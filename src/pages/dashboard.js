import { navigate } from "gatsby";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import RewardSingleCard from "../components/rewardsApp/RewardSingleCard";
import EarningAndRewardCard from "../components/rewardsApp/EarningAndRewardCard";
import OpportunityCard from "../components/rewardsApp/OpportunityCard";
import axios from "axios";
import PopUpRedeemForm from "../components/rewardsApp/PopUpRedeemForm";
import { rewardsList, inDevelopment } from "../utils/data";
import PopUpBonusesComponent from "../components/rewardsApp/PopUpBonusesComponent";

const server = "https://api.stunningangles.com/points";
const localHost = "http://localhost:3000/points";
const serverLogout = "https://api.stunningangles.com/logout";
const localHostLogout = "http://localhost:3000/logout";

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Interface to show while API call is made and waiting...........
// Interface to show while API call is made and waiting...........
function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
      <div className="text-white text-lg text-center capitalize">
        Getting your info...
      </div>
    </div>
  );
}

// Interface to show if user is not logged in.............
// Interface to show if user is not logged in.............
function NotLoggedIn() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 bg-opacity-75">
      <div className="text-white text-lg text-center font-semibold mb-4 capitalize">
        Not logged in - Please log into your account first.
      </div>
      <button
        className="text-white text-sm bg-slate-700 px-4 py-2 rounded hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
        onClick={() => navigate("/rewards")}
      >
        Go to Login
      </button>
    </div>
  );
}

function Dashboard() {
  // Initialize the userInfo state with default values for user details
  const [userInfo, setUserInfo] = React.useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    totalRewardPoints: "",
    generatedCode: "",
  });

  // State to store the user's earnings history (array of earned rewards)
  const [userEarnings, setUserEarnings] = React.useState([]);
  // State to store the user's redeemed rewards history (array of redeemed rewards)
  const [userRedeemed, setUserRedeemed] = React.useState([]);
  // State to store the user's opportunities to earn points (array of opportunities)
  const [userOpportunities, setUserOpportunities] = React.useState([]);
  // State to control the visibility of the redeem form (true: visible, false: hidden)
  const [showRedeemForm, setShowRedeemForm] = React.useState(false);
  // State to store the currently selected reward (empty object by default)
  const [pickedReward, setPickedReward] = React.useState({});
  // State to manage the loading state of the app (true: loading, false: not loading)
  const [loading, setLoading] = useState(true);
  // State to track whether the user is logged in or not (true: logged in, false: not logged in)
  const [loggedIn, setLoggedIn] = useState(true);
  // State to control the visibility of the bonus info box (true: visible, false: hidden)
  const [showBonusInfoBox, setShowBonusInfoBox] = React.useState(false);
  // State to store the info of the clicked bonus
  const [clickedBonusInfo, setClickedBonusInfo] = React.useState({});

  // Function to fetch user data from the server and update the relevant states
  const fetchData = async () => {
    try {
      // Send a GET request to the server to fetch user points information
      const response = await axios.get(inDevelopment ? localHost : server, {
        withCredentials: true, // Include credentials (e.g., cookies) with the request
      });

      // Check if the server response indicates that the user needs to log in
      if (response.data === "Please Log in first") {
        setLoggedIn(false); // Set loggedIn state to false if not logged in
      } else {
        // Update userInfo state with the retrieved user data
        setUserInfo({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          company: response.data.company,
          email: response.data.email,
          totalRewardPoints: response.data.totalRewardPoints,
        });
        // Update userEarnings state with earned rewards data
        setUserEarnings(response.data.earned);
        // Update userRedeemed state with redeemed rewards data
        setUserRedeemed(response.data.redeemed);
        // Update userOpportunities state with opportunities rewards data
        setUserOpportunities(response.data.opportunities);
      }
    } catch (err) {
      setLoggedIn(false); // Set loggedIn state to false if an error occurs
      console.error("Error fetching user data:", err); // Log the error to the console
    } finally {
      setLoading(false); // Set loading state to false after data fetching is complete
    }
  };

  // Function to log out the user by sending a request to the server
  const logOutUser = async () => {
    try {
      // Send a GET request to the server to log out the user
      const response = await axios.get(
        inDevelopment ? localHostLogout : serverLogout,
        {
          withCredentials: true, // Include credentials (e.g., cookies) with the request
        }
      );
      // Check if the server response confirms successful logout
      console.log(response);
      if (response.data === "logged out") {
        navigate("/rewards"); // Navigate the user to the rewards page after logging out
      }
    } catch (err) {
      console.error("Error logging out:", err); // Log any errors during logout to the console
    }
  };

  // useEffect hook to fetch user data when the component mounts
  React.useEffect(() => {
    fetchData(); // Call fetchData function when the component is first rendered
  }, []); // Empty dependency array ensures this runs only once on mount

  // useEffect hook to toggle the body's overflow style based on the showRedeemForm state
  useEffect(() => {
    document.body.style.overflow = showRedeemForm ? "hidden" : "unset"; // Prevent scrolling when redeem form is visible
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showRedeemForm]); // Runs whenever showRedeemForm changes

  // Conditionally render a loading screen if data is still being fetched
  if (loading) {
    return <LoadingScreen />;
  }

  // Conditionally render a not-logged-in screen if the user is not logged in
  if (!loggedIn) {
    return <NotLoggedIn />;
  }

  return (
    <div className="">
      <Helmet>
        <title>Rewards Dashboard</title>
      </Helmet>

      <header className="w-full bg-slate-800 px-4 sm:px-8 py-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <img
              src="/logo.png"
              alt="stunning angles logo"
              className="w-[100px] sm:w-[150px] cursor-pointer"
              onClick={() => {
                navigate("/rewards");
              }}
              onKeyDown={() => {
                navigate("/rewards");
              }}
              role="presentation"
            />
          </div>
          <div className="mb-4 sm:mb-0">
            <h3 className="text-white text-base sm:text-lg font-semibold text-center">
              Welcome {capitalizeFirstLetter(userInfo.firstName)}
            </h3>
          </div>
          <div>
            <nav>
              <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <li>
                  <button
                    className="text-white text-sm bg-slate-900 px-4 py-2 rounded hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                    onClick={() => logOutUser()}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="bg-slate-900 pt-14 px-4 sm:px-10 pb-[150px] relative">
        <div className="container mx-auto flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <main className="lg:basis-4/6">
            <h4 className="text-white text-lg font-semibold mb-5">
              Your Points
            </h4>

            {/* Points Section */}
            <section className="pt-4 sm:pt-0 min-h-[250px] px-5 mb-7 bg-gray-100 flex flex-col sm:flex-row gap-7 justify-around items-center rounded-lg shadow-sm">
              {/* Image */}
              <div className="flex-none">
                <img
                  className="xl:w-[120px] sm:w-[90px] w-[100px] rounded-full border border-gray-300"
                  src="/trophy.png"
                  alt="Trophy"
                />
              </div>
              {/* Text */}
              <div className="text-center sm:text-left basis-2/4">
                <h5 className="mb-3 xl:text-lg lg:text-base text-lg leading-6 font-medium text-gray-800">
                  {capitalizeFirstLetter(userInfo.firstName)}, use this
                  dashboard to redeem your rewards, view your earnings, and
                  check your total points.
                </h5>
                <p className="text-gray-700 xl:text-sm lg:text-xs text-sm">
                  Earn 1 point for every dollar you spend. Check the bonuses
                  section below to discover how you can earn extra points. 10k Point limit.
                </p>
              </div>
              {/* Points */}
              <div className="mt-4 sm:mt-0">
                <div className="p-5 bg-white flex flex-col justify-center items-center rounded-md shadow-md">
                  <p className="text-4xl sm:text-5xl font-semibold text-yellow-500">
                    {userInfo.totalRewardPoints}
                  </p>
                  <p className="text-sm text-gray-700">points</p>
                </div>
              </div>
            </section>

            {/* Rewards Section */}
            <section className="px-5 py-4 bg-slate-800 rounded-md">
              <div className="text-white overflow-hidden">
                <h4 className="mb-3">Redeemable Rewards</h4>
                <p className="mb-10 text-xs text-slate-300">
                  Select from any of the rewards you’ve unlocked and follow the
                  instructions in the pop-up. Locked rewards will appear greyed
                  out. <br />{" "}
                  <span className="text-yellow-600 italic">Note:</span> Only one
                  reward is allowed per listing.
                </p>
                {/* Container holding reward components */}
                <div className="py-2 h-[500px] overflow-y-scroll">
                  {rewardsList.map((item, i) => (
                    <RewardSingleCard
                      key={i}
                      rewardData={item}
                      userInfo={userInfo}
                      setReward={setPickedReward}
                      setShowRedeemForm={setShowRedeemForm}
                    />
                  ))}
                </div>
              </div>
            </section>
          </main>

          {/* Aside */}
          <aside className="lg:basis-2/6 flex flex-col">
            <h4 className="text-white text-lg font-semibold mb-5">
              Earned & Redeemed Logs
            </h4>

            {/* Points Earned Section */}
            <section className="mb-5 text-white px-5 py-4 bg-slate-800 rounded-md">
              <div>
                <h4 className="mb-3">Earned Points Log</h4>
                <p className="mb-4 text-xs text-slate-300">
                  Displays each time you earned points. Each row shows the
                  service you purchased, the listing address, the date, and the
                  number of points earned.
                </p>
              </div>
              {/* Container holding earnings components */}
              <div className="py-2 px-1 h-[140px] overflow-y-scroll">
                {userEarnings.map((item, i) => (
                  <EarningAndRewardCard key={i} info={item} />
                ))}
              </div>
            </section>

            {/* Points Redeemed Section */}
            <section className="mb-5 text-white px-5 py-4 bg-slate-800 rounded-md">
              <div>
                <h4 className="mb-3">Redeemed Points Log</h4>
                <p className="mb-4 text-xs text-slate-300">
                  Displays each time you redeemed a reward. Each row shows the
                  reward redeemed, the listing address, the date, and the number
                  of points it cost.
                </p>
              </div>
              {/* Container holding redeemed components */}
              <div className="py-2 px-1 h-[140px] overflow-y-scroll">
                {userRedeemed.map((item, i) => (
                  <EarningAndRewardCard key={i} info={item} />
                ))}
              </div>
            </section>

            {/* Opportunities Section */}
            <section className="relative text-gray-800 p-2 bg-gray-200 rounded-md flex-1">
              <div className="bg-white p-4 rounded-lg h-full shadow-sm">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-yellow-500">
                    Bonuses
                  </h4>
                  <p className="mb-4 text-xs text-gray-700">
                    Earn points every time you complete any of the actions
                    below. Allow up to 24 hours after completion for the points
                    to be added to your total. <br />
                    <br />{" "}
                    <span className="font-semibold italic">
                      Click one to learn more
                    </span>
                  </p>
                </div>
                {/* Container holding opportunities components */}
                <div className="py-2 px-1 flex-1 h-[195px] overflow-y-scroll">
                  {userOpportunities.map((item, i) => (
                    <OpportunityCard
                      setShowBonusBox={setShowBonusInfoBox}
                      setClickedBonusInfo={setClickedBonusInfo}
                      key={i}
                      info={item}
                    />
                  ))}
                </div>
              </div>
              {showBonusInfoBox ? (
                <PopUpBonusesComponent
                  setShowBonusInfoBox={setShowBonusInfoBox}
                  clickedBonusInfo={clickedBonusInfo}
                />
              ) : (
                ""
              )}
            </section>
          </aside>
        </div>
      </div>

      <div className="p-1 bg-slate-800">
        <p className="text-center text-sm text-slate-300">
          Have a request or a question? Email us:
          stunningangleshomephotography@gmail.com
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-900 flex justify-center">
        <p className="pb-2 text-zinc-600 text-xs">
          Copyright Stunning Angles Home Photography
        </p>
      </footer>
      {showRedeemForm ? (
        <PopUpRedeemForm
          showRedeemForm={showRedeemForm}
          setShowRedeemForm={setShowRedeemForm}
          pickedReward={pickedReward}
          setUserInfo={setUserInfo}
          setUserEarnings={setUserEarnings}
          setUserRedeemed={setUserRedeemed}
          userInfo={userInfo}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Dashboard;
