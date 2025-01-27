import FilmsCard from "./cards/films";
import PeopleCard from "./cards/people";
import PlanetCard from "./cards/planets";

export default function Presentation({ selectionData }) {
    const selectionType = selectionData.url.match(/(?<=https:\/\/swapi\.dev\/api\/)(.*?)(?=\/\d+\/)/gm)
    if (selectionType[0] === 'people') {
        return <PeopleCard people_data={selectionData} />
    }
    if (selectionType[0] === 'films') {
        return <FilmsCard film_data={selectionData} />
    }
    if (selectionType[0] === 'planets') {
        return <PlanetCard planet_data={selectionData} />
    }
    return <></>
}
