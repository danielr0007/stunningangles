import React, { useState } from "react";
import { navigate, Link } from "gatsby";
import axios from "axios";
import { inDevelopment } from "../utils/data";

const server = "https://api.stunningangles.com/signup";
const localHost = "http://localhost:3000/signup";
// const inDevelopment = false;

const SignUpRewards = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState(""); // Added state for password confirmation
  const [receiveEmails, setReceiveEmails] = useState(false); // Added state for promotional emails checkbox
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(inDevelopment ? localHost : server, {
        firstName,
        lastName,
        company,
        email,
        password,
        receiveEmails, // Include the promotional email opt-in in the signup request
      });

      if (response.status === 201) {
        navigate("/rewards"); // Navigate to rewards page on successful signup
      }
    } catch (err) {
      console.log(err);

      setError(err.response.data.message);
    }
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row min-h-screen">
      {/* Left Side (Form Section) */}
      <div className="flex items-center justify-center w-full lg:w-1/2 bg-gray-100 p-8">
        <div className="w-full max-w-md">
          <h2 className="mb-5 text-3xl font-bold text-center text-gray-800">
            Sign Up
          </h2>

          {error && <p className="mb-4 text-red-500">{error}</p>}
          <form className="mb-4" onSubmit={handleSignup}>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="firstname"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="lastname"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="company"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div className="mb-4">
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="passwordConfirm"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="passwordConfirm"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div className="mb-6">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  id="promotions"
                  checked={receiveEmails}
                  onChange={(e) => setReceiveEmails(e.target.checked)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700 text-xs">
                  Email me points information, earning opportunities, and
                  special offers.
                </span>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="px-4 py-2 font-bold text-white bg-slate-900 hover:bg-slate- focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
              >
                Sign Up
              </button>
            </div>
          </form>
          <Link
            to="/rewards"
            className="text-sm text-yellow-600 hover:underline"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Right Side (Image Section) */}
      <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
        <img
          src="/iran-home-1.jpg"
          alt="Promotion"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900 via-yellow-800 to-blue-950 opacity-70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="relative text-3xl md:text-4xl font-bold text-white text-center">
            Sign Up. Earn Points. Redeem Rewards!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SignUpRewards;
