import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/myjumia-top-logo.png";
import { handleLogout } from "../redux/actions/userActions";
import "./MainHeaderStyles.css";

const MainHeader = () => {
  // const UserId = useSelector((state: any) => state.user.UserId);
  // const isLoggedIn = useSelector((state: any) => state.user.isLoggedIn);
  // const username = useSelector((state: any) => state.user.username);
  const {userData, UserId, isLoggedIn} = useSelector((state: any) => state.user)

  const [todo, setTodo] = useState("");
  const history = useNavigate();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleClick = () => {
    console.log("clicked");
    history("/login");
   
  };

  const handleLog = () => {
    dispatch(handleLogout());
    navigate("/");
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    setTodo(e.target.value);
  };
  const handleButton = () => {
    console.log(todo);
    setTodo("");
  };

  return (
    <>
      <div className="main-header ">
        <Navbar expand="xxxl" className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-xxxl`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-xxxl`}
              aria-labelledby={`offcanvasNavbarLabel-xxl`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <ListGroup>
                  <li className="list-group-item">Home & Office</li>
                  <li className="list-group-item"> Appliances</li>
                  <li className="list-group-item">Supermarket</li>
                  <li className="list-group-item">Phones & tablets</li>
                  <li className="list-group-item">Electronics</li>
                  <li className="list-group-item">Computing</li>
                  <li className="list-group-item">Gaming</li>
                  <li className="list-group-item">Fashion</li>
                </ListGroup>
              </Offcanvas.Header>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <h1>
          JUMIA <img src={logo} style={{ width: "50px" }} />
        </h1>
        <input
          type="search"
          value={todo}
          className="input-search"
          placeholder="Search products, brands and categories"
          onChange={handleSearch}
        />
        <button
          className="search btn btn-primary"
          type="button"
          onClick={handleButton}
        >
          Search
        </button>

        <Dropdown>
          {isLoggedIn ? (
            <>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Hi, {userData.username}
              </Dropdown.Toggle>
              <Dropdown.Menu className="drop1">
                <Dropdown.Item as={Link} to={`/account/${UserId}`}>
                  My Account
                </Dropdown.Item>
                <Dropdown.Item>Orders</Dropdown.Item>
                <Dropdown.Item>Inbox</Dropdown.Item>
                <Dropdown.Item>Saved Items</Dropdown.Item>
                <Dropdown.Item>Vouchers</Dropdown.Item>
                <Dropdown.Item>
                  <button className="btn btn-primary sign" onClick={handleLog}>
                    LOGOUT
                  </button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </>
          ) : (
            <>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Account
              </Dropdown.Toggle>
              <Dropdown.Menu className="drop1">
                <Dropdown.Item>
                  <button
                    className="btn btn-primary sign"
                    onClick={handleClick}
                  >
                    Sign in
                  </button>
                </Dropdown.Item>
                <Dropdown.Item  onClick={handleClick}>
                {/* <Dropdown.Item as={Link} to={`/account/${UserId}`} onClick={handleClick}> */}
                  My Account
                </Dropdown.Item>
                <Dropdown.Item>Orders</Dropdown.Item>
                <Dropdown.Item>Saved Items</Dropdown.Item>
              </Dropdown.Menu>
            </>
          )}
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Help
          </Dropdown.Toggle>

          <Dropdown.Menu className="drop1">
            <Dropdown.Item>Help Center</Dropdown.Item>
            <Dropdown.Item>Place An Order</Dropdown.Item>
            <Dropdown.Item>Payements & Jumia Account</Dropdown.Item>
            <Dropdown.Item>Track Your Order</Dropdown.Item>
            <Dropdown.Item>Order Cancelention</Dropdown.Item>
            <Dropdown.Item>Returns & Refunds</Dropdown.Item>
            <Dropdown.Item>
              <button className="btn btn-primary">Live Help</button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <h4>Cart</h4>
      </div>
    </>
  );
};

export default MainHeader;
