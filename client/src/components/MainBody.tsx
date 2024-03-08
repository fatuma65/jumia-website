import "bootstrap/dist/css/bootstrap.min.css";
import image from "../assets/main banner.png";
import banner from "../assets/main gif.gif";
import Footer from "./Footer";
import MainBody2 from "./MainBody2";
import "./MainBodyStyles.css";

const MainBody = () => {
  return (
    <>
      <div className="container1 ">
        <div className="con">
          <div className="shadow border-5">
            <div className="list1 container">
              <ul className="ul1 list-group ">
                <li className="list-group-item" style={{ border: "none" }}>
                  Home & Office
                </li>
                <li className="list-group-item" style={{ border: "none" }}>
                  {" "}
                  Appliances
                </li>
                <li className="list-group-item" style={{ border: "none" }}>
                  Supermarket
                </li>
                <li className="list-group-item" style={{ border: "none" }}>
                  Phones & tablets
                </li>
                <li className="list-group-item" style={{ border: "none" }}>
                  Electronics
                </li>
                <li className="list-group-item" style={{ border: "none" }}>
                  Computing
                </li>
                <li className="list-group-item" style={{ border: "none" }}>
                  Gaming
                </li>
                <li className="list-group-item" style={{ border: "none" }}>
                  Fashion
                </li>
                <li className="list-group-item" style={{ border: "none" }}>
                  Tv's & radios
                </li>
                <li className="list-group-item" style={{ border: "none" }}>
                  Baby Products
                </li>
                <li className="list-group-item" style={{ border: "none" }}>
                  Health & Beauty
                </li>
                <li className="list-group-item" style={{ border: "none" }}>
                  Other Categories
                </li>
              </ul>
            </div>
            <img
              src={image}
              alt="jumia banner"
              className="banner img-fluid banner  "
            />
            <div className="list2" >
              <ul className=" ul2 list-group"  >
                <li
                  className="list-group-item d-flex justify-content-around align-items-start"
                  style={{ border: "none"}}
                >
                  <div className="ms-2 me-auto ">
                    <h5 className="fw-bold ">HELP CENTER </h5>
                    <h6>Guide to Customer care</h6>
                  </div>
                </li>
                <li
                  className="list-group-item d-flex justify-content-between align-items-start"
                  style={{ border: "none" }}
                >
                  <div className="ms-2 me-auto">
                    <h5 className="fw-bold">EASY RETURN </h5>
                    <h6>Quick Refund</h6>
                  </div>
                </li>
                <li
                  className="list-group-item d-flex justify-content-between align-items-start"
                  style={{ border: "none" }}
                >
                  <div className="ms-2 me-auto">
                    <h5 className="fw-bold">SELL ON JUMIA </h5>
                    <h6>Millions of Customers</h6>
                  </div>
                </li>
              </ul>
            </div>
            <img src={banner} alt="image" className="image img-fluid" />
            <MainBody2 />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainBody;
