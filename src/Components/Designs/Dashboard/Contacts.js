import React, { useState } from "react";
import Button from "@mui/material/Button";
import iconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import MessageIcon from "@mui/icons-material/Message";
import NewIcon from "@mui/icons-material/NewReleases";
import MUIDataTable from "mui-datatables";
import IconButton from "@mui/material/IconButton";
import Swal from "sweetalert2";
import ContactService from "../../Services/ContactServices";
import { Box } from "@mui/material";
import { number } from "yup";

export const defaultContacts = () => ({
  contactId: number,
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  message: "",
});

const Contacts = () => {
  const [contactList, setContactList] = useState([]);

  const loadContacts = async () => {
    const response = await ContactService.fetchAllContact();
    if (response.data) setContactList(response?.data?.data);
  };

  React.useEffect(() => {
    loadContacts();
  }, []);

  const deleteContacts = (id) => {
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
        ContactService.deleteContact(id)
          .then((response) => {
            console.log("Response from Contact: ", response);
            Swal.fire("Deleted!", "The Contact has been deleted.", "success");
            loadContacts();
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
      name: "contactId",
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
      label: "Email",
      name: "email",
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
      label: "Message",
      name: "message",
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
          const appointment = contactList[index];

          return (
            <>
              <IconButton
                color="secondary"
                onClick={() => deleteContacts(appointment?._id)}
              >
                <MessageIcon />
              </IconButton>
            </>
          );
        },
      },
    },
  ];

  return (
    <>
      <MUIDataTable title="Contact List" columns={columns} data={contactList} />
    </>
  );
};

export default Contacts;
