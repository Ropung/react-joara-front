import React from "react";
import {
  AiFillInstagram,
  AiFillAndroid,
  AiFillTwitterCircle,
} from "react-icons/ai";

const LoginOauth = () => {
  return (
    <>
      <div className="w-full flex flex-row gap-4 text-5xl items-center justify-center">
        <AiFillInstagram className="text-main cursor-pointer border boder-gray-400 rounded-full p-1 hover:text-white hover:bg-main" />
        <AiFillAndroid className="text-main cursor-pointer border boder-gray-400 rounded-full p-1 hover:text-white hover:bg-main" />
        <AiFillTwitterCircle className="text-main cursor-pointer border boder-gray-400 rounded-full p-1 hover:text-white hover:bg-main" />
        <button></button>
        <button></button>
      </div>
    </>
  );
};

export default LoginOauth;
