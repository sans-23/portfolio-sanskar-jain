import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import Sieve from './components/Exploratory/Sieve';
import Home from './components/MainPage/Home'
import Sudoku from './components/SudokuSolver/Sudoku';

export default function App(){
    return (
        <Router>
            <Routes>
                <Route exact path='/explo' element={<Sieve/>}></Route>
                <Route exact path='/sudoku' element={<Sudoku/>}></Route>
                <Route exact path='/' element={<Home/>}></Route>
            </Routes> 
        </Router>
    )
} 