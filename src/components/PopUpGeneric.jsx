import React, { useState, useEffect } from "react";

const PopupGeneric = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger the popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Disable scrolling
      document.body.style.overflow = "hidden";
    }, 5000); // 5000ms = 5 seconds

    // Clean up the timer and re-enable scrolling if the popup is closed or component unmounts
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Re-enable scrolling
    document.body.style.overflow = "auto";
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[100]">
      <div className=" bg-white rounded-lg flex flex-col md:flex-row max-w-3xl w-full relative z-[110] mx-4 shadow-lg">
        {/* Left side image */}
        <div className="hidden md:block w-1/2">
          <img
            src="/pop-up-img.png" // Replace this with your actual image
            alt="Promotional"
            className="h-full w-full object-cover rounded-l-lg"
          />
        </div>

        {/* Right side content */}
        <div className="p-6 w-full md:w-1/2 flex flex-col justify-between">
          <button
            className="absolute top-4 right-4 text-black hover:text-black text-xl"
            onClick={handleClose}
          >
            &times;
          </button>
          <div className="mb-2">
            <p className="mb-1 text-gray-700 uppercase">Do You Want</p>
            <h3 className="text-4xl font-bold uppercase">
              Free Add-on Services?
            </h3>
          </div>
          <p className="text-sm mb-4 text-gray-700">
            Join our rewards program to earn points. You can use these points to
            get more services for free!
          </p>
          <a
            href="/rewards"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-yellow-400 text-center"
          >
            Go To Rewards
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopupGeneric;
