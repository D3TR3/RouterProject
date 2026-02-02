import { NavLink } from "react-router";

function DashboardHeader() {
    return (
        <header>
            <nav>
                <NavLink to="/dashboard">
                    Dashboard
                </NavLink>
                <NavLink to="/dashboard/settings">
                    Dashboard Settings
                </NavLink>
            </nav>
        </header>
    );
}

export default DashboardHeader;