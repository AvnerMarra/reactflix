import React from 'react';
import styled from 'styled-components';
import Menu from './components/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
//import logo from './logo.svg';


const AppWrapper = styled.div`
background: var(--mainColor);
`;

function App() {
  return (
    <AppWrapper>
      <Menu />
      
    </AppWrapper>
  );
}

export default App;
