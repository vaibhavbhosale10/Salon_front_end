import React, { useState } from "react";
import Button from "@mui/material/Button";
import iconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import NewIcon from "@mui/icons-material/NewReleases";
import VisibilityIcon from "@mui/icons-material/Visibility";
import MUIDataTable from "mui-datatables";
import IconButton from "@mui/material/IconButton";
import Swal from "sweetalert2";
import { Box } from "@mui/material";
import ResumeServices from "../../Services/ResumeServices";
import { number } from "yup";

export const defaultApplicants = () => ({
  resumeId: number,
  firstName: "",
  lastName: "",
  mobile: "",
  email: "",
  country: "",
  state: "",
  resume: "",
});

const Applicants = () => {
  const [applicantsList, setApplicantsList] = useState([]);

  const loadApplicants = async () => {
    const response = await ResumeServices.fetchAllResume();
    if (response.data) setApplicantsList(response?.data?.data);
  };

  React.useEffect(() => {
    loadApplicants();
  }, []);

  const deleteApplicant = (id) => {
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
        ResumeServices.deleteResume(id)
          .then((response) => {
            Swal.fire("Deleted!", "The Applicant has been deleted.", "success");
            loadApplicants();
          })
          .catch((err) => {
            console.error(err);

            Swal.fire(
              "Not Deleted!",
              "The Applicant has not been deleted.",
              "error"
            );
          });
      }
    });
  };

  const columns = [
    {
      label: "ID",
      name: "resumeId",
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
      label: "Email",
      name: "email",
      options: {
        sort: false,
        filter: false,
      },
    },
    {
      label: "Country",
      name: "country",
      options: {
        sort: false,
        filter: true,
      },
    },
    {
      label: "State",
      name: "state",
      options: {
        sort: false,
        filter: true,
      },
    },
    {
      label: "City",
      name: "city",
      options: {
        sort: false,
        filter: true,
      },
    },
    {
      label: "Resume",
      name: "resume",
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
          const applicant = applicantsList[index];

          return (
            <>
              {/* <IconButton
                color="primary"
                onClick={() => editApplicant(applicantDetails)}
              >
                <EditIcon />
              </IconButton> */}

              <IconButton
                color="primary"
                onClick={() => deleteApplicant(applicant?._id)}
              >
                <VisibilityIcon />
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
        title="Applicants List"
        columns={columns}
        data={applicantsList}
      />
    </>
  );
};

export default Applicants;
