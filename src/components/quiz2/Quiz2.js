import React from "react";
import Button from "../Button";

function Quiz2() {
  return (
    <div className="w-1/2 bg-blue-300 px-8 h-[100vh]">
      <h1 className="text-5xl text-center my-9  mt-32">Quiz2</h1>
      <div className="flex justify-center items-center h-full">
        <Button name="Start" link="/Quiz2" />
      </div>
    </div>
  );
}

export default Quiz2;
