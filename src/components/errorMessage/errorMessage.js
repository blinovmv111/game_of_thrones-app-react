import React from "react";
import "./errorMessage.css";
import img from "./error.jpg";

const ErrorMessage = () => {
  return (
    <>
      {/* если нужно использовать статичные файлы лежащие в папке public. Тема про переменные окружения. */}
      {/* <img src={process.env.PUBLIC_URL + "/img/error.jpg"} alt="error"></img> */}
      <img src={img} alt="error" />
      <span>Somthing goes wrong</span>
    </>
  );
};

export default ErrorMessage;
