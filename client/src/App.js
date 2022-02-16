import React from 'react';
import TickersPage from './pages/TickersPage';
import styled from 'styled-components';
import Title from './components/Title';
import Flex from './components/Flex';

const AppWrapper = styled.div`
min-height: 100vh;
padding: 2rem;
background: grey;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

function App() {

  return (
    <AppWrapper >
      <Flex justify='center'><Title color={'darkblue'}/></Flex> 
      <TickersPage/>
    </AppWrapper>
  );
}

export default App;
