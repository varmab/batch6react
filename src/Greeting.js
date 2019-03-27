import React, {useState, useEffect, useContext} from 'react'

let Greeting=(props)=>{

    let [clicks, setClicks]=useState(0);
    let [name, setName]=useState(props.name)

    let updateClicks=()=>{
        setClicks(clicks+1)
    }

    useEffect(()=>{
        //What ever you wnat to do here
        console.log("effect fired")
    })

    return(
        <h1 onClick={updateClicks}>Welcome to {name} ({clicks})</h1>
    )
}

export default Greeting;
