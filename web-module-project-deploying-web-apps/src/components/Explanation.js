import React, { useState } from 'react';
import styled from 'styled-components';


const StyledDetails = styled.h4`
    color: #60485C;
    max-width: 72%;
    display: inline-block;

    &:hover {
        transition: 0.2s ease-in-out;
        border: 2px solid black;
        border-radius: 8px;
        padding: 8px;
        background-color: lemonchiffon;
    }
`

const Explanation = (props) => {
    const { text } = props;
    return (
        <StyledDetails>
            <h4>{text}</h4>
        </StyledDetails>
    )
}


export default Explanation;