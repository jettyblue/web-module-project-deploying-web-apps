import React, { useState, useEffect } from "react";
import axios from 'axios';
import { API_URL, API_KEY } from './constants';
import styled from 'styled-components';

import Copyright from './components/Copyright';
import Explanation from './components/Explanation';
import Image from './components/Image';

import "./App.css";

const StyledHeader = styled.h1`
  color: #60485C;
  text-shadow: 2.5px 3px 3px rgb(143, 143, 143);

  &:hover {
    transition: all 0.2s ease-in-out;
  }
`

function App() {

  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
    axios.get(`${API_URL}?api_key=${API_KEY}`)
      .then(res => {
        // console.log(res.data);
        setNasaData(res.data);
      })
      .catch(err => {
        console.error(err);
      })
    }
      fetchData();
  }, [])


  return (
    <div className="App">
      <StyledHeader>
        NASA Astronomy Picture of the Day! <span role="img" aria-label='go!'>🚀</span>
      </StyledHeader>
      <Image nasaURL={nasaData.url} />
      <Explanation text={nasaData.explanation} />
      <Copyright cpright={nasaData.copyright} />
    </div>
  );
}

export default App;
