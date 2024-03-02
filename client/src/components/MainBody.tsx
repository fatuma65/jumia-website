import "bootstrap/dist/css/bootstrap.min.css";
// import Container from "react-bootstrap/Container";
// import banner from "../assets/UG_WK_3_THE_LOVE_SALE_Thumbnails-01.png";
import banner from "../assets/UG_WK36_Super_savings_Small_Banner_218X184.gif";
// import image from "../assets/UG_WK8_TECH_SALE_BRAND_DAYS_1200x320-11.png";
import image from "../assets/jumia image.png";
import "./MainBodyStyles.css";
import ProductList from "./ProductList";
// import Nav from 'react-bootstrap/Nav';
// import { ListGroup } from "react-bootstrap";
// import Navbar from "react-bootstrap/Navbar";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import ListGroup from 'react-bootstrap/ListGroup';
// import { Button } from "react-bootstrap";

const MainBody = () => {
  return (
    <>
      <div className="container1 ">
        <div className="shadow border-5">
        {/* <div className="shadow border border-top-0  border-5 border-rgb(223, 144, 170)"> */}
          {/* <div className="list1 container">
          <ul className="ul1 list-group ">
            <li className="list-group-item">Home & Office</li>
            <li className="list-group-item"> Appliances</li>
            <li className="list-group-item">Supermarket</li>
            <li className="list-group-item">Phones & tablets</li>
            <li className="list-group-item">Electronics</li>
            <li className="list-group-item">Computing</li>
            <li className="list-group-item">Gaming</li>
            <li className="list-group-item">Fashion</li>
          </ul>
           </div> */}

          {/* <Navbar expand="xxxl" className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-xxxl`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-xxxl`}
              aria-labelledby={`offcanvasNavbarLabel-xxl`}
              placement="start"
            > */}
          {/* <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-xxxl`}>
                  Click
                </Offcanvas.Title>
              </Offcanvas.Header> */}
          {/* <Offcanvas.Header closeButton>
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
          </Navbar> */}

          {/* ))} */}
          <img
            src={image}
            alt="jumia banner"
            className="banner img-fluid banner  "
          />
          <div className="list2">
            <ul className="ul2 list-group ">
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold ">Help center </div>
                  <div>Guide to Customer care</div>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Easy Return </div>
                  <div>Quick Refund</div>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Sell on Jumia </div>
                  <div>Millions of Customers</div>
                </div>
              </li>
            </ul>
          </div>
          <img src={banner} alt="image" className="image img-thumbnail" />
          <ProductList/>
        </div>
      </div>
    </>
  );
};

export default MainBody;
