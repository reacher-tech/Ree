import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/Landingpage'
import Home from './pages/Home'
import About from './pages/About'
import BreakFastRecipe from './pages/Breakfast'
import './App.css'

function App() {
  
return(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='Breakfastmenu' element={<BreakFastRecipe/>}/>
    </Routes>
    </BrowserRouter>
);
  
}

export default App
