import React from "react";
import "./Card.css";

export default function Card({ text, name, title }) {
  return (
    <div className="testimonial-card">
      <p>{text}</p>
      <div className="author">
        <img
          src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
          alt="avatar"
        />
        <div>
          <strong>{name}</strong>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}
