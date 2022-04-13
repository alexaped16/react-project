import React from 'react'
import Nav from "./components/Nav";
import KekambasCrew from "./views/KekambasCrew";
import Home from "./views/Home";
import Posts from "./views/Posts";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
          <Nav />
            <div className='App'>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/posts" element={<Posts/>} />
                    <Route path="/kekambascrew" element={<KekambasCrew/>} />
                </Routes>
              </div>
        </Router>

    );
}

export default App; 








