import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const { loggedInUser } = useContext(userContext);

  useEffect(() => {
    console.log("Use effect called");
  }, []);

  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);
  return (
    <div className="flex justify-between">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            {" "}
            Online status : {onlineStatus ? "🟢" : "🔴 "}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about"> About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>{" "}
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>{" "}
          </li>
          <li className="px-4">{loggedInUser}</li>
          <li className="px-4">
            {" "}
            <Link to="/cart">Cart ({cartItems.length} items) </Link>{" "}
          </li>
          <button
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
