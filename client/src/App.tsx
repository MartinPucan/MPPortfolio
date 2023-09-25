import React from 'react';
import Article from "./components/Article/Article";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header onLogin={() => {}} onLogout={() => {}} onCreateAccount={() => {}}/>
      <main>
        <Article />
      </main>
      <Footer/>
    </>
  );
}

export default App;
