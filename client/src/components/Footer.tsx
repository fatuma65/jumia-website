import "./FooterStyles.css";
import logo from "../assets/myjumia-top-logo.png";
import apple from "../assets/app-store.png";
import google from "../assets/play-store.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer1">
        <h3 className="p-4 fw-bold fs-4">
          JUMIA{" "}
          <img
            src={logo}
            style={{ width: "18px", height: "20px", marginTop: "-12px" }}
          />
        </h3>
        <div className="side1">
          <h6 className="fw-regular">NEW TO JUMIA?</h6>
          <p>
            Subscribe to our newsletter to get updates on our latest offers!
          </p>
          <input
            type="text"
            className="input2"
            placeholder="Enter Email Address"
          />
          <button className="btn btn-secondary">MALE</button>
          <button className="btn btn-secondary">FEMALE</button>
          <input
            type="checkbox"
            className="input1 "
            // style={{ padding: "100px" }}
          />
          <label
         
           className="para ">   
            I agree to Jumias Privacy and Cookie Policy. You can unsubscribe
            from newsletters at <br /> any time.
          </label>
          <p className="para2">I accept the Legal Terms</p>
        </div>
        <div className="side2 ">
          <h3 className="fw-regular">DOWNLOAD JUMIA FREE APP</h3>
          <p>Get access to exclusive offers!</p>
          <img
            src={apple}
            alt=""
            style={{ width: "130px", height: "40px" }}
            className="img2"
          />
          <img
            src={google}
            alt=""
            style={{ width: "130px", height: "40px" }}
            className="img2"
          />
        </div>
      </div>
      <div className="footer2">
        <div className="">
          <h4 className="p-3 need fs-6 fw-semibold">NEED HELP?</h4>
          <ul className="name fw-lighter">
            <li className="list-group-item">Chat With Us</li>
            <li className="list-group-item"> Help Center</li>
            <li className="list-group-item">Contact us</li>
          </ul>
          <div className="name1 ">
            <h4 className="p-2 fs-6 fw-semibold">USEFUL LINKS</h4>
            <ul className="">
              <li className="list-group-item">Place an order</li>
              <li className="list-group-item">Pay for your order</li>
              <li className="list-group-item">Delivery</li>
              <li className="list-group-item">Delivery Timelines</li>
              <li className="list-group-item">Report a Product</li>
              <li className="list-group-item">Create a return</li>
            </ul>
          </div>
          <div className=" follow ">
            <h4 className="fs-6 fw-semibold">FOLLOW US</h4>
          </div>

          <div className="jumia1">
            <h4 className="p-3 fs-6 fw-semibold">ABOUT JUMIA UGANDA</h4>
            <ul>
              <li className="list-group-item">About Us</li>
              <li className="list-group-item">Jumia Careers</li>
              <li className="list-group-item">IPR Protection Policy</li>
              <li className="list-group-item">Terms and Conditions</li>
              <li className="list-group-item">
                Store & Credit Terms & Conditions
              </li>
              <li className="list-group-item">Dispute Resolution Policy</li>
              <li className="list-group-item">Privacy policy Notiice</li>
              <li className="list-group-item">Cookie Notice</li>
              <li className="list-group-item">Return & Refund Policy</li>
              <li className="list-group-item">Flash Sales</li>
              <li className="list-group-item">Jumia Global</li>
            </ul>
          </div>
          <div className="jumia2">
            <h4 className="p-3 fs-6 fw-semibold">MAKE MONEY WITH US</h4>
            <ul>
              <li className="list-group-item ">Sell on Jumia</li>
              <li className="list-group-item">Vendor Hub</li>
              <li className="list-group-item">Become a Sales Consultant</li>
              <li className="list-group-item">
                Become a Logistics Servic Partner
              </li>
              <li className="list-group-item">Become a Jumia Delivery Agent</li>
              <li className="list-group-item">Jumia B2B</li>
              <li className="list-group-item">
                Become a Jumia Pickup Station Partner
              </li>
            </ul>
          </div>
          <div className="jumia3-4 ">
            <h4 className="p-3 fs-6 fw-semibold">JUMIA INTERNATIONAL</h4>
            <ul className="jumia3">
              <li className="list-group-item">Algerie</li>
              <li className="list-group-item">Cote</li>
              <li className="list-group-item">d'lvoire</li>
              <li className="list-group-item">Egypt</li>
              <li className="list-group-item">Ghana</li>
              <li className="list-group-item">Kenya</li>
            </ul>
            <ul className="jumia4">
              <li className="list-group-item">Morocco</li>
              <li className="list-group-item">Nigeria</li>
              <li className="list-group-item">Senagal</li>
              <li className="list-group-item">Tunusia</li>
            </ul>
          </div>

          <div className="payment">
            <h4 className="p-3 fs-6 fw-semibold">PAYMENT METHODS</h4>
          </div>
          <ul className="jumia5">
            <li className="list-group-item">Acer</li>
            <li className="list-group-item">Apple</li>
            <li className="list-group-item">Asus</li>
            <li className="list-group-item">Canon</li>
          </ul>
          <ul className="jumia6">
            <li className="list-group-item">Changhong</li>
            <li className="list-group-item">Coca-Cola</li>
            <li className="list-group-item">Dell</li>
            <li className="list-group-item">Fanta</li>
          </ul>
          <ul className="jumia7">
            <li className="list-group-item">Global Star</li>
            <li className="list-group-item">Hisense</li>
            <li className="list-group-item">Hp</li>
          </ul>
          <ul className="jumia8">
            <li className="list-group-item">Huawei</li>
            <li className="list-group-item">Infinix</li>
            <li className="list-group-item">Itel</li>
          </ul>
          <ul className="jumia9">
            <li className="list-group-item">Jbl</li>
            <li className="list-group-item">Lenovo</li>
            <li className="list-group-item">Itel</li>
          </ul>
          <ul className="jumia10">
            <li className="list-group-item">Nokia</li>
            <li className="list-group-item">Oppo</li>
            <li className="list-group-item">Redmi</li>
          </ul>
          <ul className="jumia11">
            <li className="list-group-item">Sachi</li>
            <li className="list-group-item">Samsung</li>
            <li className="list-group-item">Sony</li>
          </ul>
          <ul className="jumia12">
            <li className="list-group-item">Tecno</li>
            <li className="list-group-item">Toshiba</li>
            <li className="list-group-item">XIAOMI</li>
          </ul>
        </div>
        <hr />

        <h6 className="pay1">PAY</h6>
        <h6 className="pay2">
          <img src={logo} style={{ width: "18px", marginTop: "-5px" }} /> FORCE
        </h6>
      </div>
    </div>
  );
};

export default Footer;
