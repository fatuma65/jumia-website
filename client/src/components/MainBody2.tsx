import Card from "react-bootstrap/Card";
import Tech from "../assets/TECH_SALE_FS_2PM_1168X384ui.gif";
import tech4 from "../assets/UG_WK9_PIXEL_ACD_PUSH-01 - tech sale 1.png";
import tech2 from "../assets/UG_WK9_Tech_Sale_FAN_DEAL_DDB-01rty - 2.png";
import pixel1 from "../assets/pixel-1.png";
import pixel2 from "../assets/pixel-2.png";
import pixel3 from "../assets/pixel-3.png";
import DiscountTimer from "./DiscountTimer";
import "./MainBody2styles.css";
import { moreImages, productImages, techSales } from "./ProductData";
import ProductList from "./ProductList";

const MainBody2 = () => {
  return (
    <>
      <div className="cont">
        <div className=" container1 ">
          <div className="row2 p-3">
            <h2>SWIPE FOR MORE</h2>
          </div>
          <div className="d-flex flex-row justify-content-center mb-3 flex1">
            <div className="show2">
              <span className="button1 ">&lt;</span>
            </div>
            {productImages.map((value, index) => {
              return (
                <Card key={index} className="row1 p-2 ">
                  <Card.Img
                    variant="top"
                    src={value.imageSrc}
                    style={{ width: "180px" }}
                  />
                </Card>
              );
            })}
            <div className="show2">
              <span className=" button1">&gt;</span>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-center mb-3 flex2">
          <div className="show2">
              <button className="button1 ">&lt;</button>
            </div>
            {moreImages.map((value, index) => {
              return (
                <Card key={index} className=" p-2 row11">
                  <Card.Img
                    variant="top"
                    src={value.imageSrc}
                    style={{ width: "180px" }}
                  />
                </Card>
              );
            })}
            <div className="show2">
              <button className=" button1">&gt;</button>
            </div>
          </div>
          <div className="view">
            <h3 className="p-4">Your Last Reviewed Products</h3>
            <h4 className="p-5">SEE ALL </h4>
          </div>
          <div className="view1">
            <div className="row2 p-3">
              <h2>Dont Miss Out On These!</h2>
            </div>
            <img src={Tech} className="img-fluid" />
          </div>
          <div className="view2">
            <div className="row3 p-3 d-flex justify-content-between">
              <h4>Flash Sales</h4>
              <h4>
                Time Left: <DiscountTimer />{" "}
              </h4>
              <h4>SEE ALL</h4>
            </div>
            <div className="products-1 container-fluid">
              <ProductList />
            </div>
          </div>
          <div className=" ">
            <div className=" p-3 sale">
              <h2>Tech Sale | Upto 60% OFF</h2>
            </div>
            <div className="view4 d-flex justify-content-around p-1">
              {techSales.map((sales, index) => {
                return (
                  <div key={index} className="img ">
                    <img src={sales.imageSrc} key={index} className="img1" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="view5 d-flex justify-content-around p-2">
            <img src={tech4} alt="tech1" className="img1" />
            <img src={tech2} alt="tech2" className="img1" />
          </div>
          <div className="view2 viewed">
            <div className="row2 p-3 d-flex justify-content-between">
              <h4>Tech Sale |</h4>
              <h5>Top Offers</h5>
              <h4>SEE ALL</h4>
            </div>
            <div className="products-1"></div>
          </div>
          <div>
            <div className="row2 p-3 h2">
              <h2>Pixel Brand Sale</h2>
            </div>
            <div className="view6 d-flex justify-content-between p-1">
              <img src={pixel1} alt="tech1" className="img1" />
              <img src={pixel2} alt="tech2" className="img1" />
              <img src={pixel3} alt="tech2" className="img1" />
            </div>
          </div>
          <div className="info">
            <div className="text-start text-break fs-5">
              <h5 className="fs-4 fw-lighter">
                Jumia Uganda - Unveiling Our Leading E-Commerce Website
              </h5>
              <h5 className="fs-4 fw-lighter">
                Welcome to the ultimate online shopping destination!
              </h5>
              <p>
                Our e-commerce platform is here to revolutionize your shopping
                journey. Whether you're on the hunt for cutting-edge tech
                gadgets, the latest fashion trends, or essential household
                appliances, we've got it all. We're not just an ordinary online
                store; we're your digital shopping haven. Bid farewell to
                crowded malls and say hello to the convenience and ease of
                buying online in Kampala, Nansana, Entebbe, Kira and all across
                Uganda.
              </p>
              <h5 className="fs-4 fw-lighter">
                Best Prices, Premium Brands, and Diverse Categories
              </h5>
              <p>
                Our commitment is to provide you with unbeatable prices,
                ensuring you get the most value for your money when you buy
                online. Explore a vast array of categories, encompassing
                electronics, computing, televisions, smartphones, men & women
                fashion, sporting goods, health & beauty and more. From the
                newest iPhone 14 Pro Max to the sensational Samsung Galaxy Z
                Fold 5 and Tecno Spark 10 Pro, we offer top-tier products that
                you crave. We take pride in presenting high-quality items at
                best prices that can't be matched, hailing from renowned top
                brands such as Samsung, Tecno, HP, Infinix, Apple, Lenovo, DELL
                and Hisense
              </p>
              <h5 className="fs-4 fw-lighter">
                Tempting Offers, Exclusive Promotions, and Enormous Savings
              </h5>
              <p>
                Get ready to be enchanted by our tempting offers, exclusive
                promotions, and substantial discounts when you buy online. Our
                online store is your gateway to unparalleled stock clearance
                sales. From lightning-quick flash sales to the grandeur of Black
                Friday, we ensure that your online shopping experience is not
                only cost-effective but also exhilarating. Save on an extensive
                range of products, from watches to air conditioners, laptops,
                sneakers, washing machine, bluetooth speakers and earbuds.
              </p>
              <h5 className="fs-4 fw-lighter">Exceptional Services</h5>
              <p>
                At our online store, we go the extra mile to ensure your online
                shopping experience is seamless and gratifying. Benefit from our
                delivery service, bringing your purchases directly to your
                doorstep, making your experience utterly hassle-free. What's
                more, we offer a wide range of products with free delivery &
                shipping, making your shopping even more convenient and
                economical. So, browse our selection and enjoy the added benefit
                of no shipping charges on these items. Shop with confidence in
                our official stores, where authenticity is guaranteed. Searching
                for quality without breaking the bank when you buy online?
                Explore our refurbished options, offering like-new products at
                budget-friendly prices. Discover the world at your doorstep with
                Jumia Global! Our handpicked selection of products shipped from
                abroad brings the best of international quality and innovation
                right to your fingertips.
              </p>
              <h5 className="fs-4 fw-lighter">
                Don't Miss Our Exclusive Campaign Events
              </h5>
              <p>
                Mark your calendar for our spectacular campaign events. Tech
                Week is your portal to the latest technological innovations,
                Jumia Anniversary celebrates fantastic deals, Black Friday
                promises to be the shopping extravaganza of the year, and the
                Jumia Festival is your exclusive ticket to a world of savings on
                your favorite brands. Join these events for the ultimate online
                shopping experience brimming with exciting stock clearance
                sales, discounts, and products that cater to your every need
                when you buy online. Ensure you're part of the excitement!
              </p>
              <p>
                At Jumia Uganda, we've brought the entire shopping universe
                right to your fingertips. We're not just an online store; we're
                your ally in discovering the finest online sales, premium
                offers, captivating deals, and unparalleled discounts. Shop with
                us today and embrace the future of online shopping!
              </p>
              <h5 className="fs-4 fw-lighter">FAQs</h5>
              <h5>How can I place an order? </h5>
              <p>
                Placing an order is easy! Simply browse our website, select the
                products you want, add them to your cart, and proceed to
                checkout. Follow the on-screen instructions to complete your
                purchase.
              </p>
              <h6 className="fs-5 fw-lighter">
                What payment methods do you accept?{" "}
              </h6>
              <p>
                We accept a variety of payment methods, including credit cards
                and cash on delivery. Choose the one that suits you best during
                the checkout process.
              </p>
              <h6 className="fs-5 fw-lighter">How long does delivery take? </h6>
              <p>
                Delivery times may vary depending on your location and the
                product. We strive to deliver your orders as quickly as
                possible, and you can check the estimated delivery time during
                the checkout process.
              </p>
              <h6 className="fs-5 fw-lighter">
                Do you offer refunds or returns?{" "}
              </h6>
              <p>
                Yes, we have a hassle-free return and refund policy. If you're
                not satisfied with your purchase, you can initiate a return
                request, and we'll guide you through the process.
              </p>
              <h6 className="fs-5 fw-lighter">
                Is my personal information safe?{" "}
              </h6>
              <p>
                Absolutely. We take data security seriously and have robust
                measures in place to protect your personal information. Your
                data is safe with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBody2;
