import "./HeaderStyles.css";

const Header2 = () => {
  return (
    <div className="main" style={{marginTop: '18px'}}>
      <div className="list">
        <p className="mt-2">Sell on Jumia</p>
        <h6>JUMIA</h6>
        <ul className="list-group list-group-horizontal food">
          <li className="list-group-item-light food1">FOOD</li>
          <li className="list-group-item-light food2">PAY</li>
          <li className="list-group-item-light food1">FORCE</li>
        </ul>
      </div>
    </div>
  );
};

export default Header2;
