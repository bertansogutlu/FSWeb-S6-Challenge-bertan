import React from "react";
import styled from "styled-components";

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
`

export default function Karakter({karakterler}) {
    console.log(karakterler[0])
    
return (
    <ScKarakter>
      {karakterler.map(element => (
        <div>
            {element.name}
        </div>
      ))}
    </ScKarakter>
)
}