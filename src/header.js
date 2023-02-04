import React, { useState } from "react";
import styled from "styled-components";

const ScHeader = styled.header`
h1 {
    margin: 1rem;
	font-size: 5rem;
	text-shadow: -2px -2px 0 #ff6, 2px -2px 0 #ff6, -2px 2px 0 #ff6, 2px 2px 0 #ff6;
}
`

export default function Header() {
    return (
    <ScHeader>
        <h1>STAR WARS</h1>
    </ScHeader>
    )
}