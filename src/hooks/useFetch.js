import { useState } from "react"
import axios from "axios"

const useFetch = (url) => {
    const [infoApi, setInfoApi] = useState();  
    const [hasError, setHasError] = useState(false);
    const [isLoader, setIsLoader] = useState(true) 
    
    const getApi = () => {
        setIsLoader(true)

        axios.get(url)
            .then(res => {
                setInfoApi(res.data)
                setHasError(false)
            })
                
            .catch(err => {
                console.log(err)
                setHasError(true)
            })
            .finally(() => {setIsLoader(false)});
    }

    return [infoApi, getApi, hasError, isLoader]
}

export default useFetch
