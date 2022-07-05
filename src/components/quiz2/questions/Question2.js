import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function Question2() {
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const [questionNumber, setQuestionNumber] = useState(1);
  const [question, setQuestion] = useState(
    `${randomIntFromInterval(1, 10)} + ${randomIntFromInterval(1, 10)}`
  );
  useEffect(() => {
    const operator = ["+", "-", "*", "/"];

    const rndInt = randomIntFromInterval(1, 3);
    const rndOperator = operator[rndInt];
    clearInterval(2000);
    setInterval(() => {
      setQuestionNumber(questionNumber + 1);
      setQuestion(
        `${randomIntFromInterval(1, 10)} ${rndOperator} ${randomIntFromInterval(
          1,
          10
        )}`
      );
    }, 20000);
  }, [questionNumber]);

  return (
    <div className="w-full bg-blue-300 px-8 h-[100vh] flex flex-col gap-20 ">
      <h1 className="text-5xl text-center font-bold">Question {}</h1>
      <p className="text-center text-2xl font-bold">
        {questionNumber} ) &nbsp; what is the value of &nbsp;{" "}
        <code className="bg-[#ffffff8e] px-5 border-[1px] border-black rounded-[8px] py-2">
          {" "}
          {question}
        </code>{" "}
        &nbsp; ?
      </p>
      <div className="flex flex-col justify-center items-center gap-20">
        <h3 className="text-2xl font-bold"> Post your Answer here : </h3>
        <input
          type="text"
          placeholder="answer"
          className=" px-4 py-2 border border-gray-300 rounded-lg outline-none w-1/2"
        />
      </div>
      <Link to="/">
        <button className="h-10 w-32 px-5 absolute top-20 left-[40] rounded-[8px] border-[1px] border-black">
          Home
        </button>
      </Link>
      <button className="px-5 absolute float-right bottom-20 left-20 py-2  h-10 bg-blue-800 text-white font-bold rounded-lg border-[1px] border-white">
        Questions Completed {questionNumber - 1}
      </button>
      <button className="px-5 absolute float-right bottom-20 right-20 py-2 w-[140px] h-10 bg-blue-800 text-white font-bold rounded-lg border-[1px] border-white">
        SUBMIT
      </button>
    </div>
  );
}

export default Question2;
