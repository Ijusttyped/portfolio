import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/home/Home";
import CV from "./components/cv/CV";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home />}/>
                    <Route path={"/cv"} element={<CV />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App