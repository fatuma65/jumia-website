import "./HeaderStyles.css";
import image1 from "../assets/SAACHI_BRAND-SALE_Sticky_Header.gif";
import logo from "../assets/myjumia-top-logo.png";

const Header = () => {
  return (
    <>
      <div className="main">
        <div className="setter">
          <img src={image1} className="inner" />
        </div>
        <div className="list">
          <p className="mt-2"><img src={logo} style={{ width: "18px" , marginTop: '-5px'}} /> Sell on Jumia</p>
          <h6>JUMIA  <img src={logo} style={{ width: "20px", marginTop: '-6px' }} /></h6>
          <ul className="list-group list-group-horizontal food">
            <li className="list-group-item-light food1">FOOD</li>
            <li className="list-group-item-light food2">PAY</li>
            <li className="list-group-item-light food1"><img src={logo} style={{ width: "18px" ,  marginTop: '-5px'}}/> FORCE</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
