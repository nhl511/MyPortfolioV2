import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Navigation from './components/Navigation/Navigation';
import Contact from './components/Contact/Contact';
import Project from './components/Projects/Project';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Project" element={<Project/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
