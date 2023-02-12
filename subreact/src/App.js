import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/sub-react">About</Link>
        <Routes>
          <Route path="/" element={<div>首页</div>}></Route>
          <Route path="/sub-react" element={<div>subreact</div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
