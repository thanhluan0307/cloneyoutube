import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import 'antd/dist/reset.css';
import "./App.css"

import DetailVideo from "./page/DetailVideo/detailVideo"
import ChannelsPage from './page/ChannelsPage/channels';

import SearchPage from './page/SearchPage/searchPage';
import Home from './page/Home/home';

function App() {
  return (
   <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/video/:id" element={<DetailVideo/>}/>
          <Route path="/channels/:id" element={<ChannelsPage/>}/>
          <Route path="/search" element={<SearchPage/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
