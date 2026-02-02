import { NavLink } from "react-router";

function CitiesList() {
    return (
        <>
            {CITIES.map((c, i) => 
            <NavLink key={i} to={`/cities/${c.slug}`}>
                {c.name}
            </NavLink>)}
        </>
    );
}

export default CitiesList;