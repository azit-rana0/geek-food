import React from "react";
import Button from "../Button/Button";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="opecity"></div>
      <div className="heroContent">
        <h1 className="heroHeader">
          Let us find your
          <span> Forever Food.</span>
        </h1>
        <p className="heroLorem">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          illo tenetur fuga ducimus numquam ea!
        </p>
        <div className="heroButton">
          <Button className="searchNow" value="Search Now" />
          <Button className="knowMore" value="Know more" />
        </div>
      </div>
    </div>
  );
}
