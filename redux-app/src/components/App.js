import React from 'react'
import styled from 'styled-components'
import Data from './Data'
import './../styles/App.css';

const Header = styled.header `
  display: absolute;
  background-color: #004c54;
  color: #a5acaf;
  font-family: 'Pacifico', cursive;
  font-weight: 100;
  width: 100%;
  height: 10rem;
  text-align: center;
  font-size: 4rem;
  letter-spacing: .25rem;
  /* margin: 0 auto; */
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <div className="App">
      <Header>I Bet You Didn't Know</Header>
      <Data />
    </div>
  );
}

export default App;
