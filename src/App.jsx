import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/home/Home";
import CV from "./components/cv/CV";
import Blog from "./components/blog/Blog";
import NoMatch from "./components/nomatch/NoMatch";
import Gpe from "./components/blog/GPE";

const App = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />}/>
                    <Route path={"/cv"} element={<CV />}/>
                    <Route path={"/blog/:blogId"} element={<Blog />}/>
                    <Route path={"*"} element={<NoMatch />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App