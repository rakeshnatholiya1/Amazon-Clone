import React from "react";
import "./css/header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";

function header({ cart, categories }) {
  return (
    <>
      <div className="header">
        <Link to="/">
          <img src=".\logo2.png" alt="logo" className="header_logo" />
        </Link>
        <div className="header_location">
          <span className="header_location1">Deliver to Rakesh</span>
          <span className="header_location2">
            {" "}
            <LocationOnIcon className="header_locationIcon" />
            Rajasthan 0000
          </span>
        </div>
        <div className="header_search">
          <input type="text" />
          <SearchIcon className="header_searchIcon" />
        </div>
        <div className="header_nav">
          <div className="header_option">
            <span className="header_option1">Hello Rakesh</span>
            <span className="header_option2">Sign in</span>
          </div>
          <div className="header_option">
            <span className="header_option1">Return</span>
            <span className="header_option2">& Orders</span>
          </div>
          <div className="header_option">
            <span className="header_option1">Your</span>
            <span className="header_option2">Prime</span>
          </div>
          <div className="header_option_basket">
            <Link to="/ShoppingCart">
              <ShoppingCartIcon />
            </Link>
            <span>{cart?.total_items}</span>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <ul>
          {categories?.map((category) => {
            return (
              <li key={category?.id}>
                <Link to={`/category/${category?.slug}`}>{category?.name}</Link>
              </li>
            );
          })}
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=in.amazon.mShop.android.shopping&hl=en_IN&gl=US"
              target="_blank"
            >
              <img
                src="https://m.media-amazon.com/images/G/31/IN-hq/2021/img/Mobile_Traffic_/XCM_Manual_1321458_1651511_IN_3781247_400x39_en_IN._CB655944656_.jpg"
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default header;
