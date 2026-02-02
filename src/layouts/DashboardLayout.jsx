import { Outlet } from "react-router";
import DashboardHeader from "../components/DashboardHeader";

function DashboardLayout() {
    return (
        <>
            <DashboardHeader />
            <Outlet />
        </>
    );
}

export default DashboardLayout;