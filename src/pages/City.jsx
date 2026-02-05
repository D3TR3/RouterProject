import { CITIES } from "../data/cities";

function City() {
    const {citySlug} = useParams();
    const city = CITIES.find((c) => c.slug === citySlug);

    if (!city) {
        return <Navigate to={"/not-found"} replace/>
    }

    return (
        <div>
            <h1>{city.name}</h1>
            <h2>{city.country}</h2>
            <p>{city.population} Million</p>
        </div>
    );
}

export default City;