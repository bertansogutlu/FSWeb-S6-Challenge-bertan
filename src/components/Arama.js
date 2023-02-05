import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const ScArama = styled.div`
input {
    font-family: 'Press Start 2P', cursive;
    font-size: 1rem;
    padding: 1rem;
    color: black;
    border: 0.2rem solid black;
    width: 30%;
    background: rgba(0,0,0,0.2);
    border-radius: 1rem;
    cursor: pointer;
}
`

export default function Arama({karakterler, setKarakterler}) {
    const [arama, setArama] = useState("")
    useEffect(() => {
        if (arama.length > 0) {setKarakterler(karakterler.filter(item => item.name.toLowerCase().includes(arama.toLowerCase())))}
        else {    axios.get('https://swapi.dev/api/people/')
        .then(function (response) {
          setKarakterler(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })}
    },[arama])

    return (
        <ScArama>
            <input onChange={(event => setArama(event.target.value))}/>
            {console.log(arama)}
        </ScArama>
    )
}