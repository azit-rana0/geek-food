import React from "react";
import { LuMenu } from "react-icons/lu";
import Button from "../Button/Button";
import "./Header.css";

export default function Header() {
  return (
    <div className="headerContainer">
      <div className="header">
        <div className="logo">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            alt="geekfood logo"
          />
          <span>GeekFoods</span>
        </div>
        <ul>
          <li>Home</li>
          <li>Quote</li>
          <li>Resturants</li>
          <li>Foods</li>
          <li>Contant</li>
        </ul>

        <div className="menuButtonContainer">
          <Button value="Get started" />
          <LuMenu className="menuButton" />
        </div>
      </div>
    </div>
  );
}
