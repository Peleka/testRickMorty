import React from 'react';
import s from "./App.module.scss"
import {Header} from "./Components/Header";
import {Main} from "./Components/Main";

function App() {
  return (
    <div className={s.container}>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
