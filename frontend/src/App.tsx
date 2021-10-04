import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Content from './components/Content';
import Footer from './components/Foooter';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Header title="Início" subtitle="Project Crud"/>
      <Nav/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
