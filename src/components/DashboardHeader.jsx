import { NavLink } from "react-router";

function DashboardHeader() {
    return (
        <header>
            <nav>
                <NavLink to="/dashboard">
                    Dashboard
                </NavLink>
            </nav>
        </header>
    );
}

export default DashboardHeader;