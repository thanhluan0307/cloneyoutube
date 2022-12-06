import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import 'antd/dist/reset.css';
import "./App.css"
import Home from './page/Home/home';
import DetailVideo from "./page/DetailVideo/detailVideo"

function App() {
  return (
   <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/video:id" element={<DetailVideo/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
