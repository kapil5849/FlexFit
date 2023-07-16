import React from 'react'
import './App.css';
import {Routes,Route} from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';
import Footer from './components/Footer';
import WorkoutTimer from './components/WorkoutTimer';
import CalorieCalculator from './components/CalorieCalculator';
import BodyMassIndex from './components/BodyMassIndex';
import HealthAnalysis from './components/HealthAnalysis';

const App = () => {
  return (
    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/exercise/:id" element={<ExerciseDetails/>}/>
            <Route path="/health" element={<HealthAnalysis />}/>
        </Routes>
        {/* <WorkoutTimer/> */}
        {/* <CalorieCalculator/> */}
        {/* <BodyMassIndex/> */}
        
        <Footer/>
    </Box>
  )
}

export default App
