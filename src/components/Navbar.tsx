import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../app/features/store";

const Navbar = () => {
  const { cart } = useSelector((state: RootState) => state.app);
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link
          to={"/"}
          style={{
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <strong>Shopping</strong> Site
        </Link>
      </div>
      <div>
        <ul className="nav-items">
          <li>
            <Link
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
              to={"/cart"}
            >
              {`Cart ${cart.length > 0 ? "(" + cart.length + ")" : ""}`}
            </Link>
          </li>
          <li>Profile</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
