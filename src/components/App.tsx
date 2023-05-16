
import Header from '@components/Body/Header/Header';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '@components/Body/Main/Main';
import HomePage from '../pages/HomePage';
import Footer from '@components/Body/Footer/Footer';
function App() {
    return (
        <>
        <Header />
        <Main>
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
        </Main>
        <Footer />
        </>
    );
}

export default App;