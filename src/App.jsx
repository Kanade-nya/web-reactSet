// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Dashboard from "./dashboard/home.jsx";
import Course from "./course.jsx";
import {Route, BrowserRouter as Router, Routes, Link, useNavigate, Navigate} from "react-router-dom";
import Home from "./Home.jsx";
import About from "./about.jsx";
import Link1 from "./link1.jsx";
import Link2 from "./Link2.jsx";
import MainPage from "./mainpage/MainPage.jsx";
import Article from "./Article/Article.jsx";
import Topic from "./topic/Topic.jsx";

function App() {
  // const [count, setCount] = useState(0)
  //   const navigate = useNavigate()
    // console.log(count)
    // function handle(){
    //     navigate('/home')
    // }

  return (
      <Router>
          <Routes>
              <Route path='/' element={<MainPage/>}>
                  <Route path='/article/:id' element={<Article/>}></Route>
                  <Route path='/article' element={<Article/>}></Route>
                  <Route path='/topic' element={<Topic/>}></Route>
                  <Route path='/link'>
                      <Route path='/link/link1' element={<Link1/>}></Route>
                      <Route path='/link/link2' element={<Link2/>}></Route>
                  </Route>
              </Route>
              <Route path='/home' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
          </Routes>
      </Router>
  )
}

export default App
