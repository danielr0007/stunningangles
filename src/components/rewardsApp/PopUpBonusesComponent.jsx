import React from "react";

function PopUpBonusesComponent(props) {
  return (
    <div className="bg-black p-10 absolute top-0 bottom-0 left-0 right-0 rounded-md opacity-90 text-white flex justify-center items-center">
      <div className="">
        <h4 className="text-xl text-center">
          {props.clickedBonusInfo.name} to earn {props.clickedBonusInfo.points}{" "}
          points
        </h4>
        <p className="mt-5 text-sm">{props.clickedBonusInfo.instructions}</p>
        <a
          href={props.clickedBonusInfo.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 block bg-yellow-500 hover:bg-yellow-300 p-3 text-center text-black"
        >
          Select
        </a>
        <p
          className="text-sm text-center mt-4 underline cursor-pointer"
          onClick={() => {
            props.setShowBonusInfoBox(false);
          }}
          onKeyDown={() => {
            props.setShowBonusInfoBox(false);
          }}
          role="presentation"
        >
          exit
        </p>
      </div>
    </div>
  );
}

export default PopUpBonusesComponent;
