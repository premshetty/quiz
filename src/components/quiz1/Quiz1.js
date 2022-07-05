import React from "react";
import Button from "../Button";

function Quiz1() {
  return (
    <div className="w-1/2 bg-green-300 px-8 h-[100vh]">
      <h1 className="text-5xl text-center my-9 mt-32">Quiz1</h1>
      <div className="flex justify-center items-center h-full">
        <Button name="Start" link="/Quiz1" />
      </div>
    </div>
  );
}

export default Quiz1;
