import React from "react";
import axios from "axios";

const API_URL_HELLO = "http://localhost:8080/api/hello";

const siHei = () => {
  let response = axios
    .get(API_URL_HELLO)
    .then((res) => {
      document.getElementById("output").innerText = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const Component = (props) => {
  return (
    <div>
      <button onClick={siHei}>Si hei!</button>
      <div id="output">{props.pi}</div>
    </div>
  );
};
