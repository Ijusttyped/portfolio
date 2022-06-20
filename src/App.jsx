import React, { useEffect } from "react"
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ReactGA from "react-ga";
import Home from "./components/home/Home";
import CV from "./components/cv/CV";
import Blog from "./components/blog/Blog";
import NoMatch from "./components/nomatch/NoMatch";

const TRACKING_ID = "UA-232451269-1";
ReactGA.initialize(TRACKING_ID);

const App = () => {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

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