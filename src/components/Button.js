import React from "react";
import { Link } from "react-router-dom";

function Button({ name, onclick, link }) {
  return (
    <Link to={`${link}`}>
      <button className="h-10 w-32 px-5  rounded-[8px] border-[1px] border-black">
        {name}
      </button>
    </Link>
  );
}

export default Button;
