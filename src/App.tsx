import React from 'react';
import s from "./App.module.scss"
import {Header} from "./Components/Header";
import {Main} from "./Components/Main";

function App() {
  return (
    <div>
      <Header/>
        <div className={s.main}>
            <Main/>
        </div>
    </div>
  );
}

export default App;
