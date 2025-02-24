import React, { useState } from "react";
import axios from "axios";
import { inDevelopment } from "../../utils/data";

const server = "https://api.stunningangles.com/new-redeem";
const localHost = "http://localhost:3000/new-redeem";
// const inDevelopment = true;

function PopUpRedeemForm(props) {
  const setShowRedeemFormFunction = props.setShowRedeemForm;
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [infoShown, setInfoShown] = useState({
    initial: true,
    complete: false,
    error: false,
  });

  // Update modal state
  const setModalState = (initial, complete, error) => {
    setInfoShown({ initial, complete, error });
  };

  // Update user information and UI state with response data
  const handleResponseData = (data) => {
    props.setUserInfo({
      firstName: data.firstName,
      lastName: data.lastName,
      company: data.company,
      email: data.email,
      totalRewardPoints: data.totalRewardPoints,
      generatedCode: data.redeemed.at(-1).generatedCode, // Last redeemed code
    });

    props.setUserEarnings(data.earned);
    props.setUserRedeemed(data.redeemed);
  };

  // Handle form submission for redeeming a reward
  const handleRedeem = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      // Send a POST request to the server to create a new redeem entry
      const response = await axios.post(
        inDevelopment ? localHost : server,
        {
          reason: props.pickedReward.name, // Reward name
          address: address, // User address
          points: props.pickedReward.points, // Points to redeem
        },
        {
          withCredentials: true, // Include credentials (cookies) in the request
        }
      );

      // If the request is successful, update user information and UI state
      if (response.status === 200) {
        handleResponseData(response.data);

        setModalState(false, true, false); // Show success modal
      }
    } catch (err) {
      // Handle errors and display appropriate messages
      if (err) {
        console.log(err); // Log the error for debugging
        setError(err.response.data.message); // Display error message
        setModalState(false, false, true); // Show error modal
      }
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-95">
      {infoShown.initial && (
        <div className="p-6 bg-white text-gray-900 rounded-lg shadow-md w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto">
          <h4 className="text-xl font-bold mb-4 sm:text-2xl">
            You're trying to redeem {props.pickedReward.name}
          </h4>
          <p className="text-sm mb-3 sm:text-base">
            <span className="font-semibold">Cost:</span>{" "}
            {props.pickedReward.points}
          </p>
          <p className="text-sm mb-2">
            <span className="font-semibold">Description:</span>{" "}
            {props.pickedReward.description}
          </p>
          <p
            className={`text-xs ${
              props.pickedReward.standAlone ? "hidden" : ""
            }`}
          >
            <span className="font-semibold text-red-700">Note:</span> Must be
            combined with a package as an add-on.
          </p>
          <p className="text-sm mt-6 mb-3 font-semibold sm:text-base">
            To continue, enter the address of the property on which you'd like
            to use this reward.
          </p>
          <div>
            <form onSubmit={handleRedeem}>
              <div className="mb-4">
                <label
                  className="block mb-1 text-sm font-bold sm:text-base"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="px-4 py-2 font-bold text-white bg-yellow-500 rounded hover:bg-yellow-300 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out w-full sm:w-auto"
                >
                  Redeem
                </button>
              </div>
            </form>
          </div>
          <p
            onClick={() => setShowRedeemFormFunction(false)}
            onKeyDown={() => setShowRedeemFormFunction(false)}
            role="presentation"
            className="text-center text-sm mt-5 underline text-slate-800 cursor-pointer hover:text-slate-400 transition duration-150 ease-in-out"
          >
            Cancel
          </p>
        </div>
      )}

      {/* SHOW REDEEMED SUCCESSFULLY MESSAGE....................... */}
      {/* SHOW REDEEMED SUCCESSFULLY MESSAGE....................... */}
      {/* SHOW REDEEMED SUCCESSFULLY MESSAGE....................... */}
      {/* SHOW REDEEMED SUCCESSFULLY MESSAGE....................... */}
      {/* SHOW REDEEMED SUCCESSFULLY MESSAGE....................... */}
      {infoShown.complete && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-95">
          <div className="p-6 bg-white overflow-x-scroll text-gray-900 rounded-lg shadow-md w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto">
            <h1 className="text-xl sm:text-2xl mb-4 sm:mb-8 text-green-600 font-bold">
              Redeemed Successfully!
            </h1>
            <p className="mb-3 sm:mb-5 text-sm font-semibold">
              Just one more step
            </p>
            <p className="mb-3 sm:mb-5 text-sm">
              When placing your order, be sure to enter the code provided below
              in the "questions" section. This will ensure that we add the
              reward to your order. <br />
              <br />
              If you're placing your order over the phone, simply tell us the
              code.
              <br />
              <br />
              Order page:{" "}
              <a
                href="https://portal.spiro.media/order/stunning/stunning-angles-order"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://portal.spiro.media/order/stunning/stunning-angles-order
              </a>{" "}
              <br />
              <br />
              Phone Number: (407) 815-4882‬
              <br />
              <br />
              Thank you for being a valued client. <br />
              <br />
              Best regards, <br />
              Stunning Angles Team
            </p>
            <p className="mb-6 sm:mb-8 text-red-600 font-semibold text-lg">
              <span className="text-black">CODE:</span>{" "}
              {props.userInfo.generatedCode}
            </p>
            <p
              onClick={() => {
                setInfoShown({
                  initial: true,
                  complete: false,
                  error: false,
                });

                setShowRedeemFormFunction(false);
              }}
              onKeyDown={() => {
                setInfoShown({
                  initial: true,
                  complete: false,
                  error: false,
                });

                setShowRedeemFormFunction(false);
              }}
              role="presentation"
              className="text-center text-sm mt-5 underline text-blue-600 cursor-pointer hover:text-blue-800 transition duration-150 ease-in-out"
            >
              Exit
            </p>
          </div>
        </div>
      )}

      {/* SHOW ERROR MESSAGE IF NEEDED................................. */}
      {/* SHOW ERROR MESSAGE IF NEEDED................................. */}
      {/* SHOW ERROR MESSAGE IF NEEDED................................. */}
      {/* SHOW ERROR MESSAGE IF NEEDED................................. */}
      {/* SHOW ERROR MESSAGE IF NEEDED................................. */}
      {infoShown.error && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-95">
          <div className="p-6 bg-white text-gray-900 rounded-lg shadow-md w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto">
            <h1 className="text-xl sm:text-xl mb-4 text-red-600 font-bold">
              Can't complete your request at this moment
            </h1>
            <p className="mb-5 text-sm">{error}</p>
            <p
              onClick={() => {
                setInfoShown({
                  initial: true,
                  complete: false,
                  error: false,
                });

                setShowRedeemFormFunction(false);
              }}
              onKeyDown={() => {
                setInfoShown({
                  initial: true,
                  complete: false,
                  error: false,
                });

                setShowRedeemFormFunction(false);
              }}
              role="presentation"
              className="text-center text-sm mt-5 underline text-slate-900 cursor-pointer hover:text-slate-800 transition duration-150 ease-in-out"
            >
              Exit
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopUpRedeemForm;
