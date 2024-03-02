// import { useEffect } from "react";
import { useEffect } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchUserFailure,
  fetchUserSuccess,
  handleLogout,
} from "../redux/actions/userActions";
import "./AccountStyles.css";
import Header2 from "./Header2";
import MainHeader from "./MainHeader";
const Account = () => {
  const { error, loading, UserId, userData } = useSelector(
    (state: any) => state.user
  );
  let id  = UserId;
  // const { id } = useParams<{ id?: string }>();
  console.log("is the id", id);
  console.log(typeof id);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLog = () => {
    dispatch(handleLogout());
    navigate("/");
  };

  useEffect(() => {
    // dispatch(fetchUserRequest());
    fetch(`http://localhost:4000/users/get/user/${id}, `)
      .then((response: any) => response.json())
      .then((data: any) => {
        return (
          // console.log(data)
          // id.toString(),
          String(id),
        dispatch(fetchUserSuccess(data)),
        console.log(data)
        )
      
      })
      .catch((error: any) => dispatch(fetchUserFailure(error.meesage)));
  }, [dispatch]);

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (id === undefined || id === null) {
    return <div>No id returned</div>;
  }

  if (!userData || isNaN(id)) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <Header2 />
      <MainHeader />
      <div>
        <ListGroup
          className="List d-flex justify-content-between "
          variant="dark"
        >
          <ListGroup.Item style={{ border: "none" }} variant="dark">
            My Jumia Account
          </ListGroup.Item>
          <ListGroup.Item style={{ border: "none" }}>Orders</ListGroup.Item>
          <ListGroup.Item style={{ border: "none" }}>Inbox</ListGroup.Item>
          <ListGroup.Item style={{ border: "none" }}>Reviews</ListGroup.Item>
          <ListGroup.Item style={{ border: "none" }}>Vouchers</ListGroup.Item>
          <ListGroup.Item style={{ border: "none" }}>
            Saved Items
          </ListGroup.Item>
          <ListGroup.Item style={{ border: "none" }}>
            Followed Sellers
          </ListGroup.Item>
          <ListGroup.Item style={{ borderLeft: "none", borderRight: "none" }}>
            Recently Reviewed
          </ListGroup.Item>
          <ListGroup.Item style={{ border: "none" }}>
            Account Managment
          </ListGroup.Item>
          <ListGroup.Item style={{ border: "none" }}>
            Address Book
          </ListGroup.Item>
          <ListGroup.Item style={{ border: "none" }}>
            NewsLetter Preferances
          </ListGroup.Item>
          <ListGroup.Item style={{ borderLeft: "none", borderRight: "none" }}>
            Close Account
          </ListGroup.Item>
          <ListGroup.Item style={{ border: "none" }}>
            <Button className="but" onClick={handleLog}>
              LOGOUT
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </div>

      <div className="List2 container">
        <h2>Account Overview</h2>
        <hr />

        <div className="row">
          <ListGroup
            className="d-flex justify-content-between align-items-start group1 col"
            style={{ width: "60px" }}
          >
            <div className="ms-2 me-auto" style={{ width: "550px" }}>
              <ListGroup.Item
                className="fw-bold "
                style={{ fontWeight: "600px" }}
              >
                Account Details
              </ListGroup.Item>
              <ListGroup.Item style={{ borderBottom: "none" }} className="">
              {userData.firstName + ' ' + userData.lastName}
              </ListGroup.Item>
              <ListGroup.Item style={{ marginTop: "10px", height: "8rem" }}>
              {userData.email}
              </ListGroup.Item>
            </div>
          </ListGroup>

          <ListGroup className="d-flex justify-content-between align-items-start group2 col">
            <div className="ms-2 me-auto">
              <ListGroup.Item className="fw-bold ">Address Book</ListGroup.Item>
              <ListGroup.Item>
                Your default shipping address:
                <br /> {userData.firstName + ' ' + userData.lastName}
                <br /> White gold apartments <br />
                bukoto Kampala Bukoto,
                <br /> Kampala Region
                <br /> +256 789769369 / +256 758676356
              </ListGroup.Item>
            </div>
          </ListGroup>
        </div>
        <div className="row">
          <ListGroup className="d-flex justify-content-between align-items-start group3 col-1">
            <div
              className="ms-2 me-auto"
              style={{ width: "550px", height: "270px" }}
            >
              <ListGroup.Item className="fw-bold ">
                JUMIA STORE CREDIT
              </ListGroup.Item>
              <ListGroup.Item style={{ height: "10rem", color: "blue" }}>
                Jumia Pay Balance: UGX 0
              </ListGroup.Item>
            </div>
          </ListGroup>

          <ListGroup className="d-flex justify-content-between align-items-start group4 col-1">
            <div
              className="ms-2 me-auto"
              style={{ width: "520px", height: "270px" }}
            >
              <ListGroup.Item className="fw-bold ">
                NEWSLETTER PREFERENCES
              </ListGroup.Item>
              <ListGroup.Item style={{ height: "10rem" }}>
                You are currently not subscribed to any of
                <br /> our newsletters.
                <br />
                <Button className="but1">EDIT NEWSLETTER PREFFERANCES</Button>
              </ListGroup.Item>
            </div>
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default Account;
