import React from "react";
import "./Button.css";

export default function Button({ value, className }) {
  return <button className={className}>{value}</button>;
}
