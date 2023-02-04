import React, { useState } from "react";
import styled from "styled-components";

const ScKarakter = styled.div`
div {
    border: 0.2rem solid black;
    text-shadow: -2px -2px 0 #ff6, 2px -2px 0 #ff6, -2px 2px 0 #ff6, 2px 2px 0 #ff6;
    max-width: 50%;
    margin: 2rem auto;
    background: rgba(0,0,0,0.2);
    font-size: 2rem;
    border-radius: 1rem;
    cursor: pointer;
}
h2 {
    font-family: 'Press Start 2P', cursive;
    font-size: 1.5rem;
}
h2:hover {
    transition: scale 1s;
    scale: 1.2;
}
li {
    font-family: 'Press Start 2P', cursive;
    padding: 0.5rem;
    font-size: 1rem;
    list-style-type: none;
}
`



export default function Karakter({ karakterler }) {

    const [display, setDisplay] = useState(false);
    const [selected, setSelected] = useState(null);
    
    return (
        <ScKarakter>
            {karakterler.map((element, index) => (
                <div key={index} onClick={() => {setDisplay(!display); setSelected(index)}}>
                    <h2>
                        {element.name}
                    </h2>
                    { display & ( selected === index ) ? (
                    <ul>
                        <li>Gender: {element.gender}</li>
                        <li>Height: {element.height}</li>
                        <li>Mass: {element.mass}</li>
                        <li>Birth Year: {element.birth_year}</li>
                        <li>Eye Color: {element.eye_color}</li>
                        <li>Hair Color: {element.hair_color}</li>
                        <li>Skin Color: {element.skin_color}</li>
                    </ul>
                    ) : null}
                </div>
            ))}
        </ScKarakter>
    )
}