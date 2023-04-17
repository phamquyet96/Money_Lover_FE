import * as React from "react";
import Navbar from './Navbar';
import MenuLeft from './MenuLeft';


function Dashboard() {
    return (
        <div style={{ backgroundColor: "#e4e4e4" }}>
            <Navbar />
            <MenuLeft />
        </div>
    );
}

export default Dashboard;