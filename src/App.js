import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About';
import Homee from './component/Homee';
import Navbar from './component/Navbar';
import Work from './component/Work';
import Testimonials from './component/Testimonials';
import Contact from './component/Contact';

function App() {
  return (
    <div className="home-container">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homee/>} />
        <Route path='about/' element={<About/>}/>
        <Route path='work/' element={<Work/>}/>
        <Route path='testimonial/' element={<Testimonials/>}/>
        <Route path='contact/' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;