
const LocationInfo = ( { location } ) => {
  return (
    <article className="location">
        <h2 className="location__title"> {location?.name} </h2>
        <ul className="location__list">
          <li className="location__item">
            <span className="location__item__tipe">Type: </span>
            <span className="location__item__value"> {location?.type} </span>
          </li>
          <li className="location__item">
            <span className="location__item__tipe">Dimension: </span>
            <span className="location__item__value"> {location?.dimension || 'unknown'} </span>
          </li>
          <li className="location__item">
            <span className="location__item__tipe">Population: </span>
            <span className="location__item__value"> {location?.residents.length} </span>
          </li>
        </ul>
    </article>
  )
}

export default LocationInfo
