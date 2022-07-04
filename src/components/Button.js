import React from "react";

function Button({ name, onclick }) {
  return (
    <button className="h-10 w-32 px-5  rounded-[8px] border-[1px] border-black">
      {name}
    </button>
  );
}

export default Button;
