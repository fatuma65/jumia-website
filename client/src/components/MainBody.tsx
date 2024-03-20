import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import image from "../assets/main banner.png";
import banner from "../assets/main gif.gif";
import Footer from "./Footer";
import MainBody2 from "./MainBody2";
import "./MainBodyStyles.css";

const MainBody = () => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setsubCategories] = useState([]);
  const [nestedcategories, setnestedCategories] = useState([]);


  useEffect(() => {
    fetch("http://localhost:4000/category/get/category")
      .then((response) => response.json())
      .then((data: any) => {
        console.log(data), setCategories(data);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:4000/category/get/subcategory")
      .then((response) => response.json())
      .then((data: any) => {
        console.log(data), setsubCategories(data);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:4000/category/get/nestedsubcategory")
      .then((response) => response.json())
      .then((data: any) => {
        console.log(data), setnestedCategories(data);
      });
  }, []);
  return (
    <>
      <div className="container1 ">
        <div className="con">
          <div className="shadow border-5">
            <div className="list1 ">
              {categories.map((category: any) => {
                return (
                  <ul className="ul1 container" key={category.id}>
                    <li className="" style={{ border: "none" }} >
                      {category.title}
                      {/* <div className="subcategory"> */}
                      <ul className="subcategories row row-cols-3">
                        {subcategories.map((subcat:any) => (
                          <li key={subcat.id} className=" sub col" >
                            {subcat.name}
                            <ul className="nestedSubcat col">
                              {nestedcategories.map((nestedSub:any, index) => (
                                <li key={index} className=" list-group-item">{nestedSub.title}</li>
                              ))}
                            </ul>
                          </li>
                          )
                          ) }
                      </ul>
                      {/* </div> */}
                    </li>
                  </ul>
                );
              })}
              
              {/* {categories.map((category: any) => {
                return (
                  <ul className="ul1" key={category.id}>
                    <li className="list-group-item mb-1" style={{ border: "none" }} >
                      {category.title}
                    </li>
                    <div className="subcategory ">
                    <ul className="subcategories list-group">
                      {subcategories.map((subcat:any) => (
                        <><li key={subcat.id} className="list-group-item sub" >
                          {subcat.name}
                        </li>
                        <>
                        <ul className="nestedSubcat ">
                          {nestedcategories.map((nestedSub:any) => (
                            <li key={nestedSub.id} className="list-group-item ">{nestedSub.title}</li>
                          ))}
                        </ul>
                        </>
                        </>
                      )
                      )}
                    </ul>
                    </div>
                  </ul>
                );
              })} */}
            </div>
            <img
              src={image}
              alt="jumia banner"
              className="banner img-fluid banner  "
            />
            <div className="list2">
              <ul className=" ul2 ">
                <li
                  className="list-group-item  d-flex justify-content-start mb-1 align-items-start"
                  style={{ border: "none" }}
                >
                  <div className="ms-1 ">
                    <h6 className=" fw-regular" style={{marginTop: '10px'}}> HELP CENTER </h6>
                    <p>Guide to Customer care</p>
                  </div>
                </li>
                <li
                  className="list-group-item d-flex justify-content-start mb-1 align-items-start"
                  style={{ border: "none" }}
                >
                  <div className="ms-1 ">
                    <h6 className="fw-regular">EASY RETURN </h6>
                    <p>Quick Refund</p>
                  </div>
                </li>
                <li
                  className="list-group-item d-flex justify-content-start mb-1 align-items-center"
                  style={{ border: "none" }}
                >
                  <div className="ms-1 ">
                    <h6 className="fw-regular">SELL ON JUMIA </h6>
                    <p>Millions of Customers</p>
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
