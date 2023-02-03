import React, { useState } from "react";
import styled from "styled-components";





export default function Karakter({karakterler}) {
  
    const [display, setDisplay] = useState(true)

    const ScKarakter = styled.div`
div {
    border: 2px solid black;
    padding: 1rem;
    max-width: 50%;
    margin: auto;
    margin-top: 2rem;
    background: rgba(0,0,0,0.2);
    font-size: 2rem;
}
li {
    font-size: 1rem;
}
ul {
    display: ${display && "none"};
}
`
return (
    <ScKarakter>
      {karakterler.map((element, key) => (
        <div key={key} onClick={() => setDisplay(!display)}>
            {element.name}
            <ul>
                <li>Gender: {element.gender}</li>
                <li>Height: {element.height}</li>
                <li>Mass: {element.mass}</li>
                <li>Birth Year: {element.birth_year}</li>
                <li>Eye Color: {element.eye_color}</li>
                <li>Hair Color: {element.hair_color}</li>
                <li>Skin Color: {element.skin_color}</li>
            </ul>
        </div>
      ))}
    </ScKarakter>
)
}