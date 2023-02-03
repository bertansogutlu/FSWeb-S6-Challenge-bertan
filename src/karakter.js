import React, { useState } from "react";
import styled from "styled-components";

const ScKarakter = styled.div`
div {
    border: 2px solid black;
    max-width: 50%;
    margin: 2rem auto;
    background: rgba(0,0,0,0.2);
    font-size: 2rem;
}
h2 {
    font-size: 1.5rem;
}
li {
    font-size: 1rem;
}
`



export default function Karakter({ karakterler }) {

    const [display, setDisplay] = useState(false)

    return (
        <ScKarakter>
            {karakterler.map((element) => (
                <div key={element.name} onClick={() => setDisplay(!display)}>
                    <h2>
                        {element.name}
                    </h2>
                    { display && (
                    <ul>
                        <li>Gender: {element.gender}</li>
                        <li>Height: {element.height}</li>
                        <li>Mass: {element.mass}</li>
                        <li>Birth Year: {element.birth_year}</li>
                        <li>Eye Color: {element.eye_color}</li>
                        <li>Hair Color: {element.hair_color}</li>
                        <li>Skin Color: {element.skin_color}</li>
                    </ul>
                    )}
                </div>
            ))}
        </ScKarakter>
    )
}