import { Link } from "react-router-dom";
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
        <ul className="headerList">
          <li>
            <Link className="linkPage" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="linkPage linkPage2" to="/quote">
              Quote
            </Link>
          </li>
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
