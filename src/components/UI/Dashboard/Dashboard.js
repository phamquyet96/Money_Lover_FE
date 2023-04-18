import * as React from "react";
import NavBar from './Navbar'
import MenuLeft from './MenuLeft';
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Container from "@mui/material/Container";


function Dashboard() {
    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div style={{ backgroundColor: "#e4e4e4" }}>
            <NavBar />
            <div className="flex" >
                <MenuLeft />
                <Container maxWidth="sm" style={{marginTop:"1rem"}}>
                    <div
                        style={{
                            backgroundColor: "white",
                            height: "30em",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Box sx={{ width: "100%", typography: "body1" }}>
                            <TabContext value={value}>
                                <Box
                                    className="flex justify-center"
                                    sx={{
                                        borderBottom: 1,
                                        borderColor: "divider",
                                        color: "success.main",
                                    }}
                                >
                                    <TabList
                                        onChange={handleChange}
                                        aria-label="lab API tabs example"
                                        value={value}
                                        textColor="success"
                                        // indicatorColor="success"
                                    >
                                        <Tab label="Last month" value="1" />
                                        <Tab label="This month" value="2" />
                                        <Tab label="Plan for future" value="3" />
                                    </TabList>
                                </Box>
                                <TabPanel value="1"></TabPanel>
                                <TabPanel value="2"></TabPanel>
                                <TabPanel value="3"></TabPanel>
                            </TabContext>
                        </Box>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Dashboard;