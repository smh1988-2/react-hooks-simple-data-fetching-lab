// create your App component here
import React, { useState } from 'react'
import { useEffect } from "react"

function App() {
    const [dogs, setDogs] = useState("Loading");
    const [isLoaded, setisLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then(dog => {
            setDogs(dog.message)
            setisLoaded(true)
        })
       
    }, [])


    return (
        <div>
            {isLoaded ? <img src={dogs} alt="A Random Dog" />: <p>Loading</p>}
        </div>
    )
}

export default App
