import React, { useState } from "react";
import { navigate, Link } from "gatsby";
import axios from "axios";
import { inDevelopment } from "../utils/data";

const server = "https://api.stunningangles.com/login";
const localHost = "http://localhost:3000/login";
// const inDevelopment = true;

const Rewards = () => {
  // State hooks for form fields and error messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle form submission for login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        inDevelopment ? localHost : server,
        {
          email,
          password,
        },
        {
          withCredentials: true, // This is crucial for sending and receiving cookies
        }
      );

      // If login is successful, navigate to the dashboard
      if (response.data.user) {
        navigate("/dashboard");
      }
    } catch (err) {
      // Handle errors and display appropriate messages
      if (err.response.data.errors.email === "") {
        setError(err.response.data.errors.password);
        setPassword("");
      } else {
        setError(err.response.data.errors.email);
        setEmail("");
      }
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left Side with Gradient Background and Image */}
        <div
          className="flex-1 flex items-center justify-center bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('/jet-9.jpg'), linear-gradient(to right, rgba(128, 0, 128, 0.7), rgba(255, 165, 0, 0.7), rgba(255, 192, 203, 0.7))",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-400 via-slate-600  to-slate-800 opacity-70"></div>
          <div className="relative">
            <h1 className="p-2 text-3xl md:text-4xl font-bold text-yellow-300 text-center">
              Sign Up. Earn Points. Redeem Rewards!
            </h1>

            <a
              href="/rewards#howitworks"
              className="block text-center text-white text-sm font-medium"
            >
              Click here to see how it works
            </a>
          </div>
        </div>

        {/* Right Side with Login Form............. */}
        {/* Right Side with Login Form............. */}
        {/* Right Side with Login Form............. */}
        <div className="flex-1 flex items-center justify-center bg-white p-8">
          <div className="w-full max-w-md">
            <h2 className="mb-6 text-3xl font-bold text-gray-800 text-center md:text-left">
              Login
            </h2>
            {error && <p className="mb-4 text-red-500">{error}</p>}
            <form className="mb-4" onSubmit={handleLogin}>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="email"
                >
                  User Name
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="username@gmail.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="mr-2 leading-tight"
                  />
                  <label htmlFor="remember" className="text-sm text-gray-700">
                    Remember Me
                  </label>
                </div>
                <Link
                  to="/passwordreset/resetpasswordrequest/"
                  className="text-sm text-yellow-600 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 font-bold text-white bg-slate-900 rounded-lg hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
              >
                Login
              </button>
            </form>
            <p className="text-center text-sm text-gray-600">
              New User?{" "}
              <Link to="/signup" className="text-yellow-600 hover:underline">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Steps Section............ */}
      {/* Steps Section............ */}
      {/* Steps Section............ */}
      <div id="howitworks" className="bg-gray-100 py-16">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">
          Unlock <span className="text-yellow-500">Free</span> Media Services
        </h2>
        <div className="container mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/rewards-app-pics/step-1.png"
              alt="Step 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 border-t-2 border-zinc-200">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                1. Sign up to earn points
              </h3>
              <p className="text-gray-600">
                Sign up for free in just 30 seconds and start accumulating
                points. You'll earn 1 point for every dollar spent on marketing
                your listings with us.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/rewards-app-pics/step-2.png"
              alt="Step 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 border-t-2 border-zinc-200">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                2. Redeem the points you've earned
              </h3>
              <p className="text-gray-600">
                Log into your rewards account and choose from the available
                services you can redeem with your points. Once selected, you'll
                receive a code that you can use when placing your order.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/rewards-app-pics/step-3.png"
              alt="Step 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 border-t-2 border-zinc-200">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                3. Place your order
              </h3>
              <p className="text-gray-600">
                Start your order on the Stunning Angles order page. When you
                reach the "Questions" section, enter the code you received from
                the rewards portal. Then, complete your order. If you place your
                order over the phone, simply tell us the code.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section.......... */}
      {/* Benefits Section.......... */}
      {/* Benefits Section.......... */}
      <section className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-500 mb-6">
            Rewards That Maximize Your Listing's Appeal
          </h2>
          <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
            Choose from a range of media services made to spark interest in your
            listing. Explore some of them below...
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/rewards-app-pics/2d-floorplan.jpg"
                alt="2D Floorplan"
                className="mx-auto mb-4 w-20 h-20 rounded-md "
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                2D Floorplan
              </h3>
              <p className="text-sm text-gray-700">
                A 2D floorplan is a scaled diagram of a property's layout,
                offering a clear and straightforward view of room sizes, flow,
                and spatial relationships, which helps potential buyers
                visualize the space. Includes estimated measurements.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/rewards-app-pics/zillow-tour.jpg"
                alt="  Zillow 3D Tour"
                className="mx-auto mb-4 w-20 h-20 rounded-md"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Zillow 3D Tour
              </h3>
              <p className="text-sm text-gray-700">
                An immersive, interactive virtual tour that allows potential
                buyers to explore a property from any angle, providing a
                realistic sense of the space and layout, which can increase
                engagement and interest in the listing.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/rewards-app-pics/reel.jpg"
                alt="Social Media Reel"
                className="mx-auto mb-4 w-20 h-20 rounded-md"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Social Media Reel
              </h3>
              <p className="text-sm text-gray-700">
                An Instagram reel video walkthrough is a short, engaging video
                that showcases a property’s key features in a dynamic and
                visually appealing way, helping to capture the attention of
                potential buyers on social media and driving traffic to the
                listing.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/rewards-app-pics/ammenities.jpg"
                alt="Community Amenities"
                className="mx-auto mb-4 w-20 h-20 rounded-md"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Community Amenities Images
              </h3>
              <p className="text-sm text-gray-700">
                Community Amenities Images are visuals that showcase the shared
                facilities within a residential community, such as pools, gyms,
                clubhouses, and playgrounds, highlighting the lifestyle benefits
                and added value these features bring to potential buyers.
              </p>
            </div>
            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/rewards-app-pics/virtual-staging.jpg"
                alt="Virtual Staging"
                className="mx-auto mb-4 w-20 h-20 rounded-md"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Virtual Staging
              </h3>
              <p className="text-sm text-gray-700">
                Virtual Staging is the process of digitally furnishing and
                decorating an empty property in photos, helping potential buyers
                visualize the space's potential, which can make the listing more
                appealing and increase its perceived value without the cost of
                physical staging.
              </p>
            </div>
            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/rewards-app-pics/vir-twilight.jpg"
                alt=" Virtual Twilight "
                className="mx-auto mb-4 w-20 h-20 rounded-md"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Virtual Twilight Image
              </h3>
              <p className="text-sm text-gray-700">
                A Virtual Twilight is a digitally enhanced image that simulates
                the appearance of a property at dusk, creating a warm and
                inviting atmosphere that highlights the home's exterior
                features, which can attract more interest by making the listing
                stand out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 flex justify-center">
        <p className="pb-2 text-zinc-600 text-xs">
          Copyright Stunning Angles Home Photography
        </p>
      </footer>
    </>
  );
};

export default Rewards;
