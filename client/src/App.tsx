
import {Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="login" element={<Login /> }></Route>
    </Routes >
    </>
  )
}
export default App;
