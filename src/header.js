import React, { useState } from "react";
import styled from "styled-components";

const ScHeader = styled.header`
h1 {
	font-size: 5rem;
	text-align: center;
	line-height: 0.8em;
	letter-spacing: -0.05em;
	text-shadow: -2px -2px 0 #ff6, 2px -2px 0 #ff6, -2px 2px 0 #ff6, 2px 2px 0 #ff6;
	z-index: 1;
}
`

export default function Header() {
    return (
    <ScHeader>
        <h1>STAR WARS</h1>
    </ScHeader>
    )
}