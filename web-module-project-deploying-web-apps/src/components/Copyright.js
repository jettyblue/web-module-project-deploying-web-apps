import React, { useState } from 'react';
import styled from 'styled-components';


const StyledCopyright = styled.h5`
    color: #60485C;
`

const Copyright = (props) => {
    const { cpright } = props;
    return (
        <StyledCopyright>
            <hr></hr>
            <h5>Copyright: {cpright}</h5>
        </StyledCopyright>
    )
}

//adding to push commits

export default Copyright;
