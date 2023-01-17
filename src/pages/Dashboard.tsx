import React from 'react';
import {Header} from "../components/Header/Header";
import {Footer} from "../components/Footer/Footer";
import Article from "../components/Article/Article";

const Dashboard = () => {
  return (
    <>
      <Header onCreateAccount={() => {}} onLogin={() => {}} onLogout={() => {}}/>
      <Article/>
      <Footer />
    </>
  );
};

export default Dashboard;