import React from "react";

const Card = ({ id, ipk, firstName, lastName, desc, changeContent, e }) => {
  return (
    <div className="self-center px-2 pb-12 md:basis-1/2 lg:basis-1/4">
      <img
        src={require(`../img/${id}.png`)}
        alt={`Person ${id}`}
        className="mx-auto"
        onClick={() => changeContent(e)}
      />
      <span className="border-8 border-[#004681] bg-[#004681] text-white relative bottom-[32px] z-2 rounded-md text-center align-middle 2xl:left-[18px]">
        IPK {ipk}
      </span>
      <div className="2xl:pl-[18px]">
        <h2 className="relative text-2xl font-bold bottom-3">
          {firstName} {lastName}
        </h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
