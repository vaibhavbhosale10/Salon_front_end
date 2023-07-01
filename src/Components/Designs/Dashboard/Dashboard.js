import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Appointments from "./Appointments";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeAdmin } from "../../App/Slices/AuthSlice";
import Applicants from "./Applicants";
import Contacts from "./Contacts";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Dashboard = () => {
  const [color, setColor] = React.useState("");
  const changeView = (e) => {
    setColor((e.target.style.color = "black"));
    setColor((e.target.style.backgroundColor = "white"));
    setColor((e.target.style.borderColor = "black"));
  };

  const revertChange = (e) => {
    setColor((e.target.style.color = "white"));
    setColor((e.target.style.backgroundColor = "black"));
    setColor((e.target.style.borderColor = "gold"));
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    dispatch(removeAdmin());
    navigate("/login");
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Button
            onMouseOver={changeView}
            onMouseLeave={revertChange}
            onClick={handleLogout}
          >
            Logout
          </Button>

          <Tabs
            style={{ marginLeft: "100px" }}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Appointments" {...a11yProps(0)} />
            <Tab label="Applicants" {...a11yProps(1)} />
            <Tab label="Contacts" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Appointments />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Applicants />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Contacts />
        </TabPanel>
      </Box>
    </>
  );
};
export default Dashboard;
