import React, { useState } from 'react';
import './Image.css';

const Image = (props) => {
    const { nasaURL } = props;
    return (
        <div>
            <img src={nasaURL} alt='Nasa astronomy pic'/>
        </div>
    )
}

export default Image;
