import React from "react";

function RewardSingleCard(props) {
  // Handle the selection of a reward
  function handleRewardSelection() {
    // Set the selected reward details
    props.setReward({
      name: props.rewardData.name,
      points: props.rewardData.points,
      description: props.rewardData.description,
      standAlone: props.rewardData.standAlone,
    });

    // Open the redeem pop-up modal
    props.setShowRedeemForm(true);
  }

  return (
    <div
      className={`p-3 mb-3 bg-white text-gray-800 rounded-lg shadow-sm ${
        props.userInfo.totalRewardPoints < props.rewardData.points
          ? "opacity-50"
          : "opacity-100"
      }`}
    >
      <div className="m-auto px-3 sm:px-5 flex flex-col sm:flex-row gap-3 sm:gap-5 justify-between items-center">
        {/* Reward name */}
        <div className="basis-2/6 sm:basis-1/6 text-center sm:text-left">
          <p className="font-semibold text-sm">{props.rewardData.name}</p>
        </div>
        {/* Reward image */}
        <div className="w-[50px] sm:w-[110px] rounded-md flex-none">
          <img
            className="object-fill h-full w-full rounded-md"
            src={props.rewardData.image}
            alt={props.rewardData.name}
          />
        </div>
        {/* Reward cost */}
        <div className="font-semibold text-sm text-center sm:text-left">
          Redeem for{" "}
          <span className="bg-yellow-500 text-white p-1 rounded-md">
            {props.rewardData.points}
          </span>{" "}
          points
        </div>
        {/* Select button */}
        <div className="mt-2 sm:mt-0">
          <button
            onClick={handleRewardSelection}
            className="px-2 sm:px-4 py-2 bg-yellow-500  text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out w-full sm:w-auto"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
}

export default RewardSingleCard;
