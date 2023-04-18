import * as React from "react";
import NavBar from './Navbar';
import MenuLeft from './MenuLeft';


function Dashboard() {
    return (
        <div style={{ backgroundColor: "#e4e4e4" }}>
            <NavBar />
            <MenuLeft />
        </div>
    );
}

export default Dashboard;