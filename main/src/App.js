import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Routes> */}
          <h3>
            <Link to="/sub-react">微前端React</Link>
          </h3>
          <h3>
            <Link to="/sub-vue">微前端Vue</Link>
          </h3>
        {/* </Routes> */}
      </BrowserRouter>
      <div id="subapp"></div>
    </>
  );
}

export default App;
