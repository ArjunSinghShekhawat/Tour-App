import React, { useState } from "react";

function Card({ id, name, info, image, price, removeHandler }) {
  const [readmore, setReadMore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}....`;

  // READ MORE HANDLER
  function readMoreClickHandler() {
    setReadMore(!readmore);
  }
  return (
    //MAIN CONTAINER
    <div className=" w-[400px] shadow-md flex flex-col gap-2 p-4 m-2 rounded">
      {/* IMAGE SECTION */}
      <img
        src={image}
        className=" object-cover w-[380px] aspect-square rounded"
      />
      {/* PRICE AND AMOUNT SECTION */}
      <div>
        <div>
          <div className=" text-green-500 font-bold text-2xl">{price}</div>
          <div className=" text-black font-bold text-2xl">{name}</div>
        </div>
        {/* DESCRIPTION SECTION */}
        <div>
          {description}
          <span
            onClick={readMoreClickHandler}
            className=" text-blue-500 font-bold :hover cursor-pointer"
          >
            {readmore ? `Show Less` : `Read More`}
          </span>
        </div>
      </div>
      {/* NOT InTERESTED BUTTON */}
      <button
        onClick={() => removeHandler(id)}
        className="text-white text-2xl rounded-lg py-1  bg-purple-800 hover:bg-purple-500"
      >
        Not Interested
      </button>
    </div>
  );
}
export default Card;
