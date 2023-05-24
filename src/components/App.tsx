import Header from "@components/Body/Header/Header";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "@components/Body/Main/Main";
import HomePage from "../pages/HomePage";
import Footer from "@components/Body/Footer/Footer";
import { motion, useScroll } from "framer-motion";
import NotFound from "../pages/NotFound";
import Popup from "@components/UI/Popup/Popup";
import FormRequest from "@components//UI/FormRequest/FormRequest";

function App() {
    const { scrollYProgress } = useScroll();
    return (
        <>
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />
            <Header />
            <Main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Main>
            <Footer />
            <Popup>
                <FormRequest classForm="learn-more" />
            </Popup>
        </>
    );
}

export default App;
