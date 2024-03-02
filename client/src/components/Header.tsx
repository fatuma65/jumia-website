import "./HeaderStyles.css";
import image1 from "../assets/SAACHI_BRAND-SALE_Sticky_Header.gif";
import logo from "../assets/myjumia-top-logo.png";

const Header = () => {
  return (
    <>
      <div className="main">
        {/* <div className="inner"> */}
        <div className="setter">
          <img src={image1} className="inner" />
          {/* <img src={image1}/> */}
          {/* <h1 className="text-md-end text-sm-end">TREND SETTER</h1>
            <h3 className="text-md-end text-sm-end">1ST - 27TH AUG</h3> */}
          {/* </div> */}
          {/* <ul>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto" >
                <p className=" call">call to order </p>
                <p className=" fw-bold call1">0323 001 380</p>
              </div>
            </li>
          </ul> */}
        </div>
        <div className="list">
          <p className="mt-2">Sell on Jumia</p>
          <h6>JUMIA  <img src={logo} style={{ width: "20px" }} /></h6>
          <ul className="list-group list-group-horizontal food">
            <li className="list-group-item-light food1">FOOD</li>
            <li className="list-group-item-light food2">PAY</li>
            <li className="list-group-item-light food1">FORCE  <img src={logo} style={{ width: "20px" }}/></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
