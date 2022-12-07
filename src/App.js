import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import 'antd/dist/reset.css';
import "./App.css"

import DetailVideo from "./page/DetailVideo/detailVideo"
import Channels from './page/Channle/channels';
import Content from './component/Content/content';
import SearchVideo from './page/SearchVideo/searchVideo';
function App() {
  return (
   <BrowserRouter>
      <Routes>
          <Route path="/" element={<Content/>}/>
          <Route path="/video/:id" element={<DetailVideo/>}/>
          <Route path="/channels/:id" element={<Channels/>}/>
          <Route path="/search/:id" element={<SearchVideo/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
