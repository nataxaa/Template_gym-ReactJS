import React from 'react';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/global';
import { ForYou } from './pages/ForYou';
import { Worked } from './pages/Worked';
import { About } from './pages/About';
import { Trainer } from './pages/Trainer';
import { Tranding } from './pages/Tranding';
import { Faq } from './pages/Faq';


export function App() {
  return (
    <div>
      <Home/>
      <ForYou/>
      <Worked/>
      <About/>
      <Trainer/>
      <Tranding/>
      <Faq/>
      <GlobalStyle/>
    </div>
  );
}


