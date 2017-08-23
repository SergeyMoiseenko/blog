import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Button(props) {
  return <button {...props} className={props.className} styleName="btn" />;
}
