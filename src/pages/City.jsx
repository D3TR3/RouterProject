import { CITIES } from "../data/cities";

function City() {
    const city = CITIES.find((c) => c.slug)

    return (
        <div></div>
    );
}

export default City;