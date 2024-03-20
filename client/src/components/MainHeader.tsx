import { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/myjumia-top-logo.png";
import { handleLogout } from "../redux/actions/userActions";
import "./MainHeaderStyles.css";

const MainHeader = () => {
  const { userData, UserId, isLoggedIn, username } = useSelector(
    (state: any) => state.user
  );
  const [todo, setTodo] = useState("");

  const [categories, setCategories] = useState([]);
  const [previousScroll, setPreviousScroll] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    fetch("http://localhost:4000/category/get/category")
      .then((response) => response.json())
      .then((data: any) => {
        console.log(data), setCategories(data);
      });
  }, []);
  const history = useNavigate();
  const navigate = useNavigate();
  const back = useNavigate()
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("clicked");
    history("/login");
  };

  useEffect(() =>{
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY
      setVisible(previousScroll > currentScrollPosition || currentScrollPosition < 10)
      // setVisible((previousScroll > currentScrollPosition && previousScroll -currentScrollPosition > 70) || currentScrollPosition < 10)

      setPreviousScroll(currentScrollPosition)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [previousScroll])

  const handleLog = () => {
    dispatch(handleLogout());
    navigate("/");
  };

  const handleBack = () => {
    back('/')
  }

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
        <div className={`main-header-1 d-flex justify-content-start flex-column align-items-center  `}>
          <div className={`header3 d-flex justify-content-start flex-row align-items-center ${visible ? '' : 'hidden'}`} >
            {/* <Navbar expand="xxxl" className="bg-body-tertiary  navb">
              <Container fluid>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-xxxl`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-xxxl`}
                  aria-labelledby={`offcanvasNavbarLabel-xxl`}
                  placement="start"
                >
                  <Offcanvas.Header closeButton>
                        <div className="list1 container">
              {categories.map((category: any) => {
                return (
                  <ul className="ul1" key={category.id}>
                    <li className="list-group-item mb-1" style={{ border: "none" }} >
                      {category.title}
                    </li>
                  </ul>
                );
              })}
            </div>
                  </Offcanvas.Header>
                </Navbar.Offcanvas>
              </Container>
            </Navbar> */}
            <h3 className="fs-2 fw-bold" onClick={handleBack} style={{cursor: 'pointer'}}>
              JUMIA <img src={logo} style={{ width: "20px", height: '25px' , marginTop: '5px', marginLeft:'6px'}} />
            </h3>
            <input
              type="search"
              value={todo}
              className="input-search"
              placeholder="Search products, brands and categories"
              onChange={handleSearch}
            />
            <button
              className="search btn btn-primary fw-bold"
              type="button"
              onClick={handleButton}
            >
              SEARCH
            </button>

            <Dropdown>
              {isLoggedIn ? (
                <>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Hi, {username}
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="drop1" >
                    <Dropdown.Item as={Link} to={`/account/${UserId}`} className="acc">
                      My Account
                    </Dropdown.Item>
                    <Dropdown.Item>Orders</Dropdown.Item>
                    <Dropdown.Item>Inbox</Dropdown.Item>
                    <Dropdown.Item>Saved Items</Dropdown.Item>
                    <Dropdown.Item>Vouchers</Dropdown.Item>
                    <Dropdown.Item>
                      <button
                        className="btn btn-primary sign"
                        onClick={handleLog}
                      >
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
                    <Dropdown.Item onClick={handleClick}>
                      My Account
                    </Dropdown.Item>
                    <Dropdown.Item>Orders</Dropdown.Item>
                    <Dropdown.Item>Saved Items</Dropdown.Item>
                  </Dropdown.Menu>
                </>
              )}
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic1">
                Help
              </Dropdown.Toggle>

              <Dropdown.Menu className="drop2">
                <Dropdown.Item>Help Center</Dropdown.Item>
                <Dropdown.Item>Place An Order</Dropdown.Item>
                <Dropdown.Item>Payments & Jumia Account</Dropdown.Item>
                <Dropdown.Item>Track Your Order</Dropdown.Item>
                <Dropdown.Item>Order Cancelention</Dropdown.Item>
                <Dropdown.Item>Returns & Refunds</Dropdown.Item>
                <Dropdown.Item>
                  <button className="btn btn-primary btn3 ">Live Help</button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <h4 >Cart</h4>
          </div>
        </div>
      </div>

    </>
  );
};

export default MainHeader;
