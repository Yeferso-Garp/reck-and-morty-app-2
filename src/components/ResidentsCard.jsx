import { useEffect } from "react";
import useFetch from "../hooks/useFetch"

const ResidentsCard = ( { personUrl } ) => {

    const [person, getPerson] = useFetch(personUrl);

    useEffect(() => {
        getPerson()
    }, [])
    // console.log(person)

  return (
    <article className="resident">
        <header className="resident__header">
            <img className="resident__image" src={person?.image} alt="" />
            <div className="resident__status">
                <span className={`resident__status__circle ${person?.status}`}></span>
                <span className="resident__status__value"> { person?.status } </span>
            </div>
        </header>
        <section className="resident__body">
            <h3 className="resident__name"> { person?.name } </h3>
            <hr className="resident__separator"/>
            <ul className="resident__list">
                <li className="resident__item">
                    <span className="resident__label">Specie</span>
                    <span className="resident__value"> {person?.species} </span>
                </li>
                <li className="resident__item">
                    <span className="resident__label">Origin</span>
                    <span className="resident__value"> {person?.origin.name} </span>
                </li>
                <li className="resident__item">
                    <span className="resident__label">Eppisodes where appear</span>  
                    <span className="resident__value">{person?.episode.length}</span>
                </li>
            </ul>
        </section>
    </article>
  )
}

export default ResidentsCard
