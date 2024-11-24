// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar/Navbar'
import Create from './components/Create/Create'
import Read from './components/Read/Read';
import Update from './components/Update/Update';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path='/create' element = {<Create/>} />
        <Route exact path='/read' element = {<Read/>} />
        <Route exact path='/:id' element = {<Update/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
