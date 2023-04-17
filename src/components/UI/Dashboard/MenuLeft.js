import {
    Sidebar,
    Menu,
    MenuItem,
    useProSidebar,
    SubMenu,
} from "react-pro-sidebar";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AdUnitsOutlinedIcon from "@mui/icons-material/AdUnitsOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import Container from "@mui/material/Container";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import BasicModal from "../Modal";


function MenuLeft() {
    const { collapseSidebar, toggleSidebar, toggled } = useProSidebar();

    const toggle = () => {
        toggleSidebar();
        if (toggled) {
            console.log(true);
            collapseSidebar();
        } else {
            console.log(false);
            collapseSidebar();
        }
    };
    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div
            id="app"
            style={({ height: "100vh" }, { display: "flex", flexDirection: "row" })}
        >
            <Sidebar
                breakPoint="sm"
                transitionDuration={800}
                backgroundColor="#ffff"
                rtl={false}
                style={{ height: "100vh" }}
            >
                <Menu>
                    <MenuItem
                        icon={<SavingsOutlinedIcon />}
                        onClick={() => {
                            toggle();
                        }}
                    >
                        Menu
                    </MenuItem>

                    <SubMenu icon={<MenuOutlinedIcon />} label="Profile">
                        <MenuItem>
                            <BasicModal/>
                        </MenuItem>

                        <MenuItem icon={<AccountBalanceWalletOutlinedIcon />}>
                            Wallet
                        </MenuItem>
                        <MenuItem icon={<WidgetsOutlinedIcon />}>Category</MenuItem>
                    </SubMenu>

                    <MenuItem icon={<AccountBalanceWalletOutlinedIcon />}>
                        Transactions
                    </MenuItem>
                    <MenuItem icon={<AssessmentOutlinedIcon />}>Report</MenuItem>
                    <MenuItem icon={<AdUnitsOutlinedIcon />}>Budget</MenuItem>
                    <MenuItem icon={<ShoppingCartOutlinedIcon />}>Store</MenuItem>
                    <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
                </Menu>
            </Sidebar>

            <Container maxWidth="sm">
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
    );
}

export default MenuLeft;
