import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../assets/myjumia-top-logo.png";
// import LoginForm from "./LoginForm";
// import { Link } from "react-router-dom";
import "./JumiaFormStyles.css";
// import LoginForm from './'

const JumiaForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const move = useNavigate()

  const handleClick = () => {
    move('/form')
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:4000/users/create/user", {
        method: "POST",
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          username,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log("Registration is Successfull");
        navigate("/");
      } else {
        console.log("Register Failed");
      }
    } catch (error) {
      console.log("an error has occured", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Loading.....</h1>;
  }
  return (
    <div className="form">
      <img src={logo} />
      <h5 style={{ fontSize: "26px" }}>Welcome to Jumia</h5>
      <p>
       Create an Account or Log In to your account
      </p>
      {/* <p className="p">Jumia account</p> */}

      <form>
        {/* <label>FirstName </label> */}
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="first Name"
          required
        />
        {/* <label>LastName </label> */}
        <input
          type="text"
          defaultValue={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="last Name"
          required
        />
        {/* <label>Email </label> */}
        <input
          type="text"
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        {/* <label>Username </label> */}
        <input
          type="text"
          defaultValue={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        {/* <label>Password </label> */}
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <Button className="bnt1" onClick={handleSubmit}>
          Continue
        </Button>
        <p className="aaa">
          By continuing you agree to Jumia
          <br /> <a href="#">Terms and Condiions</a>
        </p>
      </form>

      <Button className="bnt" onClick={handleClick}>Login With Your Account</Button>
      <h5>
        For further support, you may visit the Help Center or contact <br />
      </h5>
      <h5 className="p1">our customer service team.</h5>
      <h3>
        Jumia <img src={logo} style={{ width: "30px", marginLeft: "-5px" }} />
      </h3>
    </div>
  );
};

export default JumiaForm;
