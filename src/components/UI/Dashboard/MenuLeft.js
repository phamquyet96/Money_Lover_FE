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
import * as React from "react";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import {Link} from "react-router-dom";


function MenuLeft() {
    const { collapseSidebar, toggleSidebar, toggled } = useProSidebar();


    const toggle = () => {
        collapseSidebar();
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
          defaultCollapsed={true}
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

                    <Link to={'/account/profile'}>
                        <MenuItem icon={<PeopleOutlinedIcon />}>
                            Account
                        </MenuItem>
                    </Link>
                    <Link to={'/my-wallet'}>
                        <MenuItem icon={<AccountBalanceWalletOutlinedIcon />}>
                            Wallet
                        </MenuItem>
                    </Link>
                    <Link to={'/categories'}>
                        <MenuItem icon={<WidgetsOutlinedIcon />}>Category</MenuItem>
                    </Link>
                    <Link to={'/report'}>
                        <MenuItem icon={<AssessmentOutlinedIcon />}>Report</MenuItem>
                    </Link>
                    <SubMenu icon={<MenuOutlinedIcon />} label="Addon">
                        <MenuItem icon={<AccountBalanceWalletOutlinedIcon />}>Transaction</MenuItem>
                        <MenuItem icon={<AdUnitsOutlinedIcon />}>Budget</MenuItem>
                        <MenuItem icon={<ShoppingCartOutlinedIcon />}>Store</MenuItem>
                        <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>
        </div>

    );
}

export default MenuLeft;