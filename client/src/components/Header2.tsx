import "./HeaderStyles.css";
import logo from "../assets/myjumia-top-logo.png";

const Header2 = () => {
  return (
    <div className="main" style={{marginTop: '18px'}}>
      <div className="list">
        <p className="mt-2"><img src={logo} style={{ width: "18px" , marginTop: '-5px'}} /> Sell on Jumia</p>
        <h6>JUMIA <img src={logo} style={{ width: "20px", marginTop: '-6px' }} /></h6>
        <ul className="list-group list-group-horizontal food">
          <li className="list-group-item-light food1">FOOD</li>
          <li className="list-group-item-light food2">PAY</li>
          <li className="list-group-item-light food1"><img src={logo} style={{ width: "18px" ,  marginTop: '-5px'}}/> FORCE</li>
        </ul>
      </div>
    </div>
  );
};

export default Header2;
