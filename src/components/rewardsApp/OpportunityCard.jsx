import React from "react";

function OpportunityCard(props) {
  return (
    <div
      onClick={() => {
        props.setClickedBonusInfo(props.info);
        props.setShowBonusBox(true);
      }}
      onKeyDown={() => {
        props.setClickedBonusInfo(props.info);
        props.setShowBonusBox(true);
      }}
      role="presentation"
      className="px-3 py-1 mb-2 bg-gray-200 text-slate-900 rounded-md cursor-pointer"
    >
      <div className="m-auto flex gap-5 justify-between items-center">
        {/* Opportunity name.... */}
        <div className="flex-none py-2">
          <p className="text-sm font-semibold">{props.info.name}</p>
        </div>
        {/* Description
        <div className="rounded-md flex-none">
          <p className="text-xs ">{props.info.instructions}</p>
        </div> */}
        {/* Potential points... */}
        <div className="flex-none">
          <p className="text-sm">{props.info.points} points</p>
        </div>
        {/* Link...
        <div className="flex-none">
          <a
            className="text-xs"
            href={props.info.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default OpportunityCard;
