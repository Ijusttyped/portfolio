import React from "react"
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/home/Home";
import CV from "./components/cv/CV";
import Blog from "./components/blog/Blog";
import NoMatch from "./components/nomatch/NoMatch";

const App = () => {

    return (
        <>
            <Router>
                <Routes>
                    <Route exact path={"/"} element={<Home />}/>
                    <Route exact path={"/cv"} element={<CV />}/>
                    <Route exact path={"/blog/:blogId"} element={<Blog />}/>
                    <Route exact path={"*"} element={<NoMatch />}/>
                </Routes>
            </Router>
        </>
    )
}

export default App