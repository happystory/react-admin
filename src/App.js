import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavLeft from './components/NavLeft/NavLeft';

const App = () => {
  return (
    <div className='container'>
      <div className='nav-left'>
        <NavLeft />
      </div>
      <div className='main'>
        <Header />
        <div className='content'>content</div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
