import React from "react";

function formatDateString(isoString) {
  const date = new Date(isoString);
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
}

function EarningAndRewardCard(props) {
  // console.log(props.info);
  const rewardName = props.info.reason;
  const address = props.info.address;
  const date = formatDateString(props.info.date);
  const points = props.info.points;
  return (
    <div className="p-3 mb-2 bg-white text-gray-800 rounded-md shadow-sm">
      <div className="m-auto flex flex-col sm:flex-row gap-3 sm:gap-5 justify-between items-center">
        {/* Reward name */}
        <div className="basis-2/4 sm:basis-1/4 text-center sm:text-left">
          <p className="text-sm font-medium">{rewardName}</p>
        </div>
        {/* Address */}
        <div className="w-full sm:w-[130px] rounded-md flex-none text-center sm:text-left">
          <p className="font-semibold text-sm truncate">{address}</p>
        </div>
        {/* Date */}
        <div className="text-center sm:text-left">
          <p className="text-xs sm:text-sm">{date}</p>
        </div>
        {/* Points */}
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold">{points}</p>
        </div>
      </div>
    </div>
  );
}

export default EarningAndRewardCard;
