/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogin, handleUserName } from "../redux/actions/userActions";

import "./LoginFormStyles.css";

const LoginForm = () => {
  const [loginData, setLogin] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setLogin({ ...loginData, [name]: value });
  };
  const navigate = useNavigate();
  const move = useNavigate();
  const navigateBack = () => {
    navigate("/");
  };

  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const submitLogin = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/users/login/user", {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setLogin(data);

        const UserId = data.UserId;
        console.log("UserId", UserId);
        const name1 = data.username;
        console.log(name1);

        dispatch(handleUserName(name1));

        dispatch(handleLogin(UserId));

        console.log("this is the user id", UserId);
        console.log("Login is Successfull");
        move(`/${UserId}`);
      } else {
        console.log("Register Failed");
      }
    } catch (error) {
      console.log("an error has occured", error);
    }
  };

  return (
    <div className="form-body">
      <Button onClick={navigateBack}>Back</Button>
      <form className="form1">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={handleChange}
          defaultValue={loginData.username}
          name="username"
          required
          autoComplete="on"
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          onChange={handleChange}
          defaultValue={loginData.password}
          name="password"
          required
          autoComplete="on"
        />
        <label className="form-check-label label1">
          <input className="form-check-input" type="checkbox" name="remember" />
          Remember me
        </label>

        <Button onClick={submitLogin}>Login</Button>
      </form>
    </div>
  );
};

export default LoginForm;
