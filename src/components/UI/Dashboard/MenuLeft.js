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
              <MenuItem href="/account" icon={<PeopleOutlinedIcon />}>
                Account
              </MenuItem>
              <MenuItem
                href="/my-wallet"
                icon={<AccountBalanceWalletOutlinedIcon />}
              >
                Wallet
              </MenuItem>
              <MenuItem href="/category" icon={<WidgetsOutlinedIcon />}>
                Category
              </MenuItem>
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
    );
}

export default MenuLeft;
