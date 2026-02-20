import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/Landingpage'
import About from './pages/About'
import Recipe from './pages/recipes'
import Contact from './pages/Contact'
import './App.css'

function App() {
  
return(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Recipes' element={<Recipe/>}/>
        <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
);
  
}

export default App
