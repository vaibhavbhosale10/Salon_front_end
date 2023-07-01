import React, { useState } from "react";
import Button from "@mui/material/Button";
import iconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import NewIcon from "@mui/icons-material/NewReleases";
import MUIDataTable from "mui-datatables";
import IconButton from "@mui/material/IconButton";
import Swal from "sweetalert2";
import { Box } from "@mui/material";
import AppointmentService from "../../Services/AppointmentServices";
import { number } from "yup";

export const defaultAppointment = () => ({
  apptId: number,
  firstName: "",
  lastName: "",
  mobile: "",
  date: Date.now().toString(),
  time: "",
  services: "",
});

const Appointments = () => {
  const [appointmentList, setAppointmentList] = useState([]);

  const loadAppointments = async () => {
    const response = await AppointmentService.fetchAllAppointment();
    if (response.data) setAppointmentList(response?.data?.data);
  };

  React.useEffect(() => {
    loadAppointments();
  }, []);

  const deleteAppointment = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        AppointmentService.deleteAppointment(id)
          .then((response) => {
            Swal.fire(
              "Deleted!",
              "The Appointment has been deleted.",
              "success"
            );
            loadAppointments();
          })
          .catch((err) => {
            console.error(err);

            Swal.fire(
              "Not Deleted!",
              "The Appointment has not been deleted.",
              "error"
            );
          });
      }
    });
  };

  const columns = [
    {
      label: "ID",
      name: "apptId",
    },
    {
      label: "First Name",
      name: "firstName",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      label: "Last Name",
      name: "lastName",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      label: "Mobile",
      name: "mobile",
      options: {
        sort: false,
        filter: false,
      },
    },
    {
      label: "Date",
      name: "date",
      options: {
        sort: false,
        filter: false,
      },
    },
    {
      label: "Time",
      name: "time",
      options: {
        sort: false,
        filter: true,
      },
    },
    {
      label: "Services",
      name: "services",
      options: {
        sort: false,
        filter: true,
      },
    },

    {
      label: "Action",
      name: "action",
      options: {
        sort: false,
        filter: false,

        customBodyRenderLite: (index) => {
          const appointment = appointmentList[index];

          return (
            <>
              <IconButton
                color="primary"
                onClick={() => deleteAppointment(appointment?._id)}
              >
                <CheckCircleIcon />
              </IconButton>
            </>
          );
        },
      },
    },
  ];

  return (
    <>
      <MUIDataTable
        title="Appointment List"
        columns={columns}
        data={appointmentList}
      />
    </>
  );
};

export default Appointments;
