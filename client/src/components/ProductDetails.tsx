import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchProductDetails, fetchProductFailure } from "../redux/actions/productActions"
import './ProductDetailStyles.css'
import { useDispatch, useSelector } from "react-redux"
import DiscountTimer from "./DiscountTimer"
import { Dropdown } from "react-bootstrap"
import Footer from "./Footer"



const ProductDetails = () => {
    const {id } = useParams<{id: string }>()
    const {productDetails, error} = useSelector((state: any) => state.product)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch( `http://localhost:4000/products/get/${id}`)
        .then((response) => response.json())
        .then((data) => {console.log(data), dispatch(fetchProductDetails(data))})
        .catch((error: any) => {
            dispatch(fetchProductFailure(error.message)), console.log(error);
          });
    }, [dispatch])

    if (!productDetails ) {
        return <div>Product not found</div>;
      }
      if (error) {
        return <h1>Error: {error.message}</h1>;
      }
    return (
        <div className="details">
            <div className="first-div">
                <div className="card">
                <img src={`http://localhost:4000/uploads/${productDetails.product.image}`} className="img-fluid item-image"/>
                <div className="nested">
                    <h6 className="title word-break">{productDetails.product.title}</h6>
                    <p className="brand">Brand: <a href="#">{productDetails.catName}</a> | <a href="#">Similar products from {productDetails.catName}</a></p>
                    <hr />
                    <div className="inside">
                        <div className="d-flex justify-content-between inside1 p-1">
                        <h6>Flash Sales</h6>
                        <div className="time">
                            Time left: <DiscountTimer />
                        </div>
                        </div>
                        <h4 className="price fw-semibold">UGX {productDetails.product.price}</h4>
                    </div>
                    <p>+ shipping from UGX 1,900 to Central Business District</p>
                    <p>ratings</p>
                    <h5>VARIATION AVAILABLE</h5>
                    <button className="btn btn-primary add fw-semibold">ADD TO CART</button>
                    <hr />
                    <div className="d-flex justify-content-between inside2 p-1">
                    <h5>YOU CAN ALSO BUY:</h5>
                    <a href="#">Details</a>
                    </div>
                    <div className="inside3">
                        <h6 style={{fontSize: '14px'}} className="h6">Protect - Device Insurance</h6>
                        <p className="money fw-regular">+  UGX 17,820</p>
                        <hr className="main-hr"/>
                        <p className="total">Total price:</p>
                        <h6 className="total fw-semibold">UGX 457,720</h6>
                        <button className="btn btn-primary fw-semibold both">BUY BOTH</button>
                    </div>
                    <hr />
                    <h5 className="prom">PROMOTIONS</h5>
                    <a href="#">Check out brand new computing deals now</a>
                    <br/>
                    <a href="#">Shop hot clearance deals as low as 5k</a>

                    {/* <p className="description">{productDetails.description}</p> */}
                </div>
                <h6 className="prod">Share this product</h6>
                <a href="#" className="share">Report incorrect product information</a>
                </div>
            </div>
            <div className="second-div">
                <h6 className="return fw-bold">DELIVERY & RETURNS</h6>
                <hr className="second-hr"/>
                <div className="jumia">JUMIA <p>EXPRESS</p></div>
                <p className="express">Express delivery in main cities <a href="#" style={{fontSize: '14px'}}>Details</a></p>
                <hr className="third-hr"/>
                <h5 className="fw-bold choose">Choose your location</h5>
                <select name="" id="regions" className="dropdown-toogle">
                    <option value="1" className="dropdown-item">Kampala Region</option>
                    <option value="2" className="dropdown-item">Eastern Region</option>
                    <option value="3" className="dropdown-item">Entebbe Area</option>
                    <option value="4" className="dropdown-item">Northern Region</option>
                    <option value="5" className="dropdown-item">Rest Of Central Region</option>
                    <option value="6" className="dropdown-item">western Region</option>
                </select>
                <select name="" id="regions1" className="dropdown-toogle">
                    <option value="1" className="dropdown-item">Central Business District</option>
                    <option value="2" className="dropdown-item">Bwaise</option>
                    <option value="3" className="dropdown-item">Entebbe</option>
                    <option value="4" className="dropdown-item">Bukoto</option>
                    <option value="5" className="dropdown-item">Bulenga</option>
                    <option value="6" className="dropdown-item">Ntinda</option>
                </select>
                <div className="station1">
                    <h6 >Pickup Station</h6>
                    <a href="#">Details</a>
                    <p className="fees">Delivery Fees UGX 1,900</p>
                    <p className="pick">Pickup by 16 March when you order</p>
                    <p className="with">within next 7hrs 0mins</p>
                </div>
                <div className="station2">
                    <h6>Door Delivery</h6>
                    <a href="#">Details</a>
                    <p className="fees">Delivery Fees UGX 3,900</p>
                    <p className="pick">Delivery by 16 March when you order within next 7hrs 0mins</p>
                </div>
                <div className="station3">
                    <h6>Return Policy</h6>
                    <p className="fees">Free return within 7 days for eligible items.Details</p>
                </div>
            </div>
            <div className="third-div">

            </div>
            <div className="description">

            </div>
            {/* <Footer/> */}
            
        </div>
    )
}
export default ProductDetails