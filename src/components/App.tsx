
import Header from '@components/Body/Header/Header';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './Body/Main/Main';
import HomePage from '../pages/HomePage';
function App() {
    return (
        <>
        <Header />
        <Main>
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
        </Main>
        </>
    );
}

export default App;