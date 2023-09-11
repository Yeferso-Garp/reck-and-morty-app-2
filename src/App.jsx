
import { useEffect, useRef, useState } from 'react';
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber';
import LocationInfo from './components/LocationInfo';
import ResidentsCard from './components/ResidentsCard';
import Loader from './components/Loader';

function App() {

  const [inputValue, setInputValue] = useState(getRandomNumber(126));

  const url = `https://rickandmortyapi.com/api/location/${inputValue || 'hola'}`
  const [ location, getLocation, hasError, isLoader ] = useFetch(url);

  useEffect(() => {
    getLocation()
  }, [inputValue])
  console.log(location)

  const inputSearch = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    setInputValue(inputSearch.current.value.trim())
  };


  return (
    <div>
      <h1 className='general__title'>Rick and Morty App</h1>

      <form className='btn__button' onSubmit={handleSubmit}>
        <input className='btn__input' ref={inputSearch} type="text" placeholder='Enter number here...'/>
        <button className='btn__search'>Search</button>
      </form>



      {
        isLoader
        ? <Loader />
        : (
          hasError
            ? <h2 className='erro__digite'> ❎ Hey you must provide an 1 to 126 👀</h2>
            : 
                <>
                  <LocationInfo 
                  location = {location}
                  />
                  <div className='container__resident'>
                    {
                      location?.residents.map(personUrl => (
                          <ResidentsCard 
                          key={personUrl}
                          personUrl = {personUrl} 
                          />
                        ))
                    }
                  </div>
                </>
        )
      }
    </div>
  )
}

export default App
