import React from 'react';
import Kursus from './state/State';
import Materi from './props/Props';
import './props/style.css';

function App() {
  return (
    <div className="wraperapp">
      <Kursus/>
      <p>Contoh state</p>
      <hr/>
      <Materi img={require('./props/36.jpg')} des="belajar seo" harga="120000"/>
      <Materi img={require('./props/bintang.jpg')} des="belajar adward" harga="400000"/>
      <Materi img={require('./props/36.jpg')} des="belajar React js" harga="50000"/>
    </div>
  );
}

export default App;
