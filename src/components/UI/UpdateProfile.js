import Box from "@mui/material/Box";
import Navbar from "../UI/Dashboard/Navbar"
import {Menu, MenuItem, Sidebar, SubMenu, useProSidebar} from "react-pro-sidebar";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import AdUnitsOutlinedIcon from "@mui/icons-material/AdUnitsOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import * as React from "react";
import {Card, TextField} from "@mui/material";

function UpdateProfile(){
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
    return(
        <>
            <Box style={{ backgroundColor: "#e4e4e4" }}>
                <Navbar/>
                <div className="flex">
                    <div
                        id="app"
                        style={({ height: "100vh" }, { display: "flex", flexDirection: "row"    })}
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
                                    <MenuItem icon={<PeopleOutlinedIcon />}>
                                        Manage my account{" "}
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
                    </div>
                    <div style={{display:"flex",justifyContent:"center", width: '1300px'}}>
                        <Card style={{width:"500px"}}>
                            <Box>
                                <TextField>Name</TextField>
                            </Box>
                            <Box>
                                <TextField>Email</TextField>
                            </Box>
                        </Card>
                    </div>
                </div>
            </Box>
        </>
    )
}
export default UpdateProfile;