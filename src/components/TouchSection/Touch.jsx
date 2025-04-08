import React from "react";
import Button from "../Button/Button";
import "./Touch.css";

export default function Touch() {
  return (
    <div className="touchContainer">
      <div className="touchLeft">
        <img
          src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt=""
        />
      </div>
      <div className="touchRight">
        <div className="touchRightContent">
          <h2 className="touchHeader">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
            debitis.
          </h2>
          <p className="touchLorem">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            molestiae! Quidem est esse numquam odio deleniti, beatae, magni
            dolores provident quaerat totam eos, aperiam architecto eius quis
            quibusdam fugiat dicta.
          </p>
          <Button className="getInTouch" value="Get in Touch" />
        </div>
      </div>
    </div>
  );
}
