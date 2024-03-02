import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Form from "./routes/Form";
import Home from "./routes/Home";
import Login from "./routes/Login";
import User from "./routes/User";
import UserAccount from "./routes/UserAccount";

const App = () => {
  const { isLoggedIn, UserId } = useSelector((state: any) => state.user);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/form" element={<Form />}></Route>
        {/* <Route path="/get/:id" element={<User />}></Route> */}

        {isLoggedIn && (
          <>
            <Route path="/account/:UserId" element={<UserAccount />}></Route>
            <Route path="/get/:id" element={<User />}></Route>
          </>
        )}
        {/* <Route path="/account/:UserId" element={<UserAccount /> }></Route> */}
      </Routes>
    </>
  );
};
export default App;
