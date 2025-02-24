import React, { useState } from "react";
import Layout from "../components/Layout";
import GenericBanner from "../components/GenericBanner";
import MobileMenu from "../components/MobileMenu";

function Pricing() {
  const [selectedSqFt, setSelectedSqFt] = useState("0-1,500 sq.ft.");

  const base = {
    description: "Essential media to get your listing sold.",
    features: [
      "25 mls photos",
      "5 Drone Photos",
      "2D Floorplan",
      "Listing Website",
      "Flyer Builder",
      "Guaranteed Blue Skies",
      "Clear Window Views",
      "Next Day Delivery",
      "Add 10 more photos for $50",
    ],
  };

  const immersion = {
    description:
      "Popular package that creates a unique immersive experience with 3D virtual tours.",
    features: [
      "35 mls photos",
      "8 Drone Photos",
      "Zillow 3D Tour",
      "2D Floorplan",
      "Listing Website",
      "Flyer Builder",
      "Guaranteed Blue Skies",
      "Clear Window Views",
      "Next Day Delivery",
      "Upgrade to a matterport tour for $99",
    ],
  };

  const social = {
    description:
      "Best-selling package designed to get massive attention on social w/ vertical video.",
    features: [
      "40 MLS Photos",
      "8 Drone Photos",
      "Viral Cinematic Reel 30-60s",
      "2D Floorplan",
      "Listing Website",
      "Flyer Builder",
      "Guaranteed Blue Skies",
      "Clear Window Views",
      "Next Day Delivery",
      "Add Virality script for $65",
      "Add Nearby Attraction $90",
      "Additional location $65",
    ],
  };

  const everything = {
    description:
      "JamPacked media package for maximum selling power: Photos, Video, Reel, 3D Tour, and more!",
    features: [
      "40 MLS Photos",
      "10 Drone Photos",
      "Cine 4k Video Tour w/ Aerial Footage",
      "Matterport Tour",
      " Viral Cinematic Reel 30-60s",
      "2D Floorplan",
      "Virtual Twilight",
      "Listing Website",
      "Flyer Builder",
      "Guaranteed Blue Skies",
      "Clear Window Views",
      "Next Day Delivery",
    ],
  };

  const pricingData = {
    "0-1,500 sq.ft.": {
      everything: {
        price: 799,
        description: everything.description,
        features: everything.features,
      },
      social: {
        price: 399,
        description: social.description,
        features: social.features,
      },
      immersion: {
        price: 299,
        description: immersion.description,
        features: immersion.features,
      },
      base: {
        price: 199,
        description: base.description,
        features: base.features,
      },
    },
    "1,501-3,125 sq.ft.": {
      everything: {
        price: 835,
        description: everything.description,
        features: everything.features,
      },
      social: {
        price: 435,
        description: social.description,
        features: social.features,
      },
      immersion: {
        price: 319,
        description: immersion.description,
        features: immersion.features,
      },
      base: {
        price: 229,
        description: base.description,
        features: base.features,
      },
    },
    "3,126-4,000 sq.ft.": {
      everything: {
        price: 895,
        description: everything.description,
        features: everything.features,
      },
      social: {
        price: 465,
        description: social.description,
        features: social.features,
      },
      immersion: {
        price: 379,
        description: immersion.description,
        features: immersion.features,
      },
      base: {
        price: 229,
        description: base.description,
        features: base.features,
      },
    },
    "4,001-5,000 sq.ft.": {
      everything: {
        price: 995,
        description: everything.description,
        features: everything.features,
      },
      social: {
        price: 500,
        description: social.description,
        features: social.features,
      },
      immersion: {
        price: 449,
        description: immersion.description,
        features: immersion.features,
      },
      base: {
        price: 229,
        description: base.description,
        features: base.features,
      },
    },
  };
  //  PHOTOS.................
  //  PHOTOS.................
  //  PHOTOS.................
  //  PHOTOS.................
  const fifteenPhotos = {
    price: 145,
    description: "15 HDR high-quality Mls photos.",
    notice: "Perfect for when you need a few extra images.",
  };
  const twentyFivePhotos = {
    price: 175,
    description: "25 HDR high-quality Mls photos.",
    notice: "Perfect for homes 2,500 Sq ft. and under",
  };
  const fortyPhotos = {
    price: 195,
    description: "40 HDR high-quality Mls photos.",
    notice: "Perfect for homes 3,500 Sq ft. and under",
  };
  const sixtyPhotos = {
    price: 235,
    description: "60 HDR high-quality Mls photos.",
    notice: "Perfect for homes 5,000 Sq ft. and under",
  };

  const photosData = {
    "0-1,500 sq.ft.": {
      "15 mls photos": {
        price: fifteenPhotos.price,
        description: fifteenPhotos.description,
        notice: fifteenPhotos.notice,
      },
      "25 mls photos": {
        price: twentyFivePhotos.price,
        description: twentyFivePhotos.description,
        notice: twentyFivePhotos.notice,
      },
      "40 mls photos": {
        price: fortyPhotos.price,
        description: fortyPhotos.description,
        notice: fortyPhotos.notice,
      },
      "60 mls photos": {
        price: sixtyPhotos.price,
        description: sixtyPhotos.description,
        notice: sixtyPhotos.notice,
      },
    },

    // TIER 2.....................
    // TIER 2.....................
    // TIER 2.....................
    "1,501-3,125 sq.ft.": {
      "15 mls photos": {
        price: fifteenPhotos.price,
        description: fifteenPhotos.description,
        notice: fifteenPhotos.notice,
      },
      "25 mls photos": {
        price: twentyFivePhotos.price,
        description: twentyFivePhotos.description,
        notice: twentyFivePhotos.notice,
      },
      "40 mls photos": {
        price: fortyPhotos.price,
        description: fortyPhotos.description,
        notice: fortyPhotos.notice,
      },
      "60 mls photos": {
        price: sixtyPhotos.price,
        description: sixtyPhotos.description,
        notice: sixtyPhotos.notice,
      },
    },
    // TIER 3.............
    // TIER 3.............
    // TIER 3.............
    // TIER 3.............
    "3,126-4,000 sq.ft.": {
      "15 mls photos": {
        price: fifteenPhotos.price,
        description: fifteenPhotos.description,
        notice: fifteenPhotos.notice,
      },
      "25 mls photos": {
        price: twentyFivePhotos.price,
        description: twentyFivePhotos.description,
        notice: twentyFivePhotos.notice,
      },
      "40 mls photos": {
        price: fortyPhotos.price,
        description: fortyPhotos.description,
        notice: fortyPhotos.notice,
      },
      "60 mls photos": {
        price: sixtyPhotos.price,
        description: sixtyPhotos.description,
        notice: sixtyPhotos.notice,
      },
    },
    // TIER 4..................
    // TIER 4..................
    // TIER 4..................
    // TIER 4..................
    // TIER 4..................
    "4,001-5,000 sq.ft.": {
      "15 mls photos": {
        price: fifteenPhotos.price,
        description: fifteenPhotos.description,
        notice: fifteenPhotos.notice,
      },
      "25 mls photos": {
        price: twentyFivePhotos.price,
        description: twentyFivePhotos.description,
        notice: twentyFivePhotos.notice,
      },
      "40 mls photos": {
        price: fortyPhotos.price,
        description: fortyPhotos.description,
        notice: fortyPhotos.notice,
      },
      "60 mls photos": {
        price: sixtyPhotos.price,
        description: sixtyPhotos.description,
        notice: sixtyPhotos.notice,
      },
    },
  };

  //  PHOTOS.................
  //  PHOTOS.................
  //  PHOTOS.................
  //  PHOTOS.................
  const cinematic4k = {
    description:
      "Cinematic 4K video crafted with high-end gear, advanced editing, and professional film techniques—delivering a captivating, trailer-style showcase.",
    notice: "Aerial footage, Cinematic feel",
  };
  const hDShowcase = {
    description:
      "1-2 min high-definition video showcasing the property's exterior and interior with upbeat music.",
    notice: "No aerial footage.",
  };
  const viralReel = {
    description:
      "Cinematic 30-60 sec vertical reel that showcases your property while building your brand",
    notice:
      "Virality worthy script: $65 Lifestyle footage – Travel to a nearby area: $90 Additional locations – $65",
  };
  const basicReel = {
    price: 125,
    description:
      "Vertical video optimized for Reels and TikTok, showcasing the home's best features in a captivating way.",
    notice:
      "Basic walkthrough – no intro, voiceover, or effects. Contact for homes over 3,500 sq. ft.",
  };

  const videoData = {
    "0-1,500 sq.ft.": {
      "Cinematic 4k Video w/ Aerial Footage": {
        price: 275,
        description: cinematic4k.description,
        notice: cinematic4k.notice,
      },
      "HD Showcase Video": {
        price: 225,
        description: hDShowcase.description,
        notice: hDShowcase.notice,
      },
      "Viral Cinematic Reel": {
        price: 199,
        description: viralReel.description,
        notice: viralReel.notice,
      },
      "Basic Reel": {
        price: basicReel.price,
        description: basicReel.description,
        notice: basicReel.notice,
      },
    },

    // TIER 2.....................
    // TIER 2.....................
    // TIER 2.....................
    "1,501-3,125 sq.ft.": {
      "Cinematic 4k Video w/ Aerial Footage": {
        price: 299,
        description: cinematic4k.description,
        notice: cinematic4k.notice,
      },
      "HD Showcase Video": {
        price: 250,
        description: hDShowcase.description,
        notice: hDShowcase.notice,
      },
      "Viral Cinematic Reel": {
        price: 199,
        description: viralReel.description,
        notice: viralReel.notice,
      },
      "Basic Reel": {
        price: basicReel.price,
        description: basicReel.description,
        notice: basicReel.notice,
      },
    },
    // TIER 3.............
    // TIER 3.............
    // TIER 3.............
    // TIER 3.............
    "3,126-4,000 sq.ft.": {
      "Cinematic 4k Video w/ Aerial Footage": {
        price: 350,
        description: cinematic4k.description,
        notice: cinematic4k.notice,
      },
      "HD Showcase Video": {
        price: 295,
        description: hDShowcase.description,
        notice: hDShowcase.notice,
      },
      "Viral Cinematic Reel": {
        price: 225,
        description: viralReel.description,
        notice: viralReel.notice,
      },
      "Basic Reel": {
        price: basicReel.price,
        description: basicReel.description,
        notice: basicReel.notice,
      },
    },
    // TIER 4..................
    // TIER 4..................
    // TIER 4..................
    // TIER 4..................
    // TIER 4..................
    "4,001-5,000 sq.ft.": {
      "Cinematic 4k Video w/ Aerial Footage": {
        price: 415,
        description: cinematic4k.description,
        notice: cinematic4k.notice,
      },
      "HD Showcase Video": {
        price: 345,
        description: hDShowcase.description,
        notice: hDShowcase.notice,
      },
      "Viral Cinematic Reel": {
        price: 265,
        description: viralReel.description,
        notice: viralReel.notice,
      },
      "Basic Reel": {
        price: basicReel.price,
        description: basicReel.description,
        notice: basicReel.notice,
      },
    },
  };

  // OTHER SERVICES ...............
  // OTHER SERVICES ...............
  // OTHER SERVICES ...............
  // OTHER SERVICES ...............
  const fiveAerial = {
    price: 115,
    description: "Beautiful aerial shots to showcase your property.",
    notice: " $30 for every additional 5 photos.",
  };
  const matterport = {
    description:
      "Immersive 3D tour for an interactive property viewing experience.",
    notice: " Contact for homes over 5,000 sq. ft.",
  };
  const zillow3d = {
    description: "Enhance your listing with a Zillow 3D home tour.",
    notice: " Contact for homes over 5,000 sq. ft.",
  };
  const vStaging = {
    price: 30,
    description: "Transform empty spaces with realistic virtual furniture.",
    notice: "$85 for 3 | $135 for 5 *Must be combined w/ a package*",
  };
  const twilightshoot = {
    price: 210,
    description: "Capture stunning evening photos of your property.",
    notice:
      "Requires a second trip to the property. *Must be combined w/ a package*",
  };
  const communityAmenities = {
    price: 45,
    description: "Showcase the best features of the community amenities.",
    notice: " *Must be combined w/ a package*",
  };
  const neighborhoodAttraction = {
    price: 75,
    description: "Highlight nearby attractions to boost property appeal.",
    notice: "$40 per additional location. *Must be combined w/ a package*",
  };
  const virtualTwilight = {
    price: 25,
    description: "Convert daytime photos into beautiful twilight images.",
    notice: " $18 per additional photo. *Must be combined w/ a photo package*",
  };
  const tenAdditional = {
    price: 50,
    description: "Get more professional photos for your listing.",
    notice: "*Must be combined w/ a photo package*",
  };
  const floorplan = {
    price: 50,
    description: "Detailed 2D floor plans to provide spatial understanding.",
    notice: "*Must be combined w/ a photos or video service*",
  };
  const slideshow = {
    price: 25,
    description: "A stunning slideshow of your property photos with music.",
    notice:
      "(horizontal or vertical) *Must be combined w/ a photos or video service*",
  };
  const declutter = {
    price: 30,
    description: "Remove unwanted objects from images for a cleaner look.",
    notice: " *Must be combined w/ a photos or video service*",
  };

  const otherServicesPricing = {
    "0-1,500 sq.ft.": {
      "5 Drone Photos": {
        price: fiveAerial.price,
        description: fiveAerial.description,
        notice: fiveAerial.notice,
      },
      "Matterport Tour": {
        price: 169,
        description: matterport.description,
        notice: matterport.notice,
      },
      "Zillow 3D tour": {
        price: 99,
        description: zillow3d.description,
        notice: zillow3d.notice,
      },
      "Virtual Staging": {
        price: vStaging.price,
        description: vStaging.description,
        notice: vStaging.notice,
      },
      "Twilight Shoot": {
        price: twilightshoot.price,
        description: twilightshoot.description,
        notice: twilightshoot.notice,
      },
      "Community Amenities Photos": {
        price: communityAmenities.price,
        description: communityAmenities.description,
        notice: communityAmenities.notice,
      },
      "Neighborhood Attraction photos": {
        price: neighborhoodAttraction.price,
        description: neighborhoodAttraction.description,
        notice: neighborhoodAttraction.notice,
      },
      "Virtual Twilight": {
        price: virtualTwilight.price,
        description: virtualTwilight.description,
        notice: virtualTwilight.notice,
      },
      "10 Additional Photos": {
        price: tenAdditional.price,
        description: tenAdditional.description,
        notice: tenAdditional.notice,
      },
      "2D Floorplan": {
        price: floorplan.price,
        description: floorplan.description,
        notice: floorplan.notice,
      },
      "Video Slideshow (With Music)": {
        price: slideshow.price,
        description: slideshow.description,
        notice: slideshow.notice,
      },
      "Object Removal/Declutter": {
        price: declutter.price,
        description: declutter.description,
        notice: declutter.notice,
      },
    },

    // TIER 2.....................
    // TIER 2.....................
    // TIER 2.....................
    "1,501-3,125 sq.ft.": {
      "5 Drone Photos": {
        price: fiveAerial.price,
        description: fiveAerial.description,
        notice: fiveAerial.notice,
      },
      "Matterport Tour": {
        price: 185,
        description: matterport.description,
        notice: matterport.notice,
      },
      "Zillow 3D tour": {
        price: 99,
        description: zillow3d.description,
        notice: zillow3d.notice,
      },
      "Virtual Staging": {
        price: vStaging.price,
        description: vStaging.description,
        notice: vStaging.notice,
      },
      "Twilight Shoot": {
        price: twilightshoot.price,
        description: twilightshoot.description,
        notice: twilightshoot.notice,
      },
      "Community Amenities Photos": {
        price: communityAmenities.price,
        description: communityAmenities.description,
        notice: communityAmenities.notice,
      },
      "Neighborhood Attraction photos": {
        price: neighborhoodAttraction.price,
        description: neighborhoodAttraction.description,
        notice: neighborhoodAttraction.notice,
      },
      "Virtual Twilight": {
        price: virtualTwilight.price,
        description: virtualTwilight.description,
        notice: virtualTwilight.notice,
      },
      "10 Additional Photos": {
        price: tenAdditional.price,
        description: tenAdditional.description,
        notice: tenAdditional.notice,
      },
      "2D Floorplan": {
        price: floorplan.price,
        description: floorplan.description,
        notice: floorplan.notice,
      },
      "Video Slideshow (With Music)": {
        price: slideshow.price,
        description: slideshow.description,
        notice: slideshow.notice,
      },
      "Object Removal/Declutter": {
        price: declutter.price,
        description: declutter.description,
        notice: declutter.notice,
      },
    },
    // TIER 3.............
    // TIER 3.............
    // TIER 3.............
    // TIER 3.............
    "3,126-4,000 sq.ft.": {
      "5 Drone Photos": {
        price: fiveAerial.price,
        description: fiveAerial.description,
        notice: fiveAerial.notice,
      },
      "Matterport Tour": {
        price: 215,
        description: matterport.description,
        notice: matterport.notice,
      },
      "Zillow 3D tour": {
        price: 125,
        description: zillow3d.description,
        notice: zillow3d.notice,
      },
      "Virtual Staging": {
        price: vStaging.price,
        description: vStaging.description,
        notice: vStaging.notice,
      },
      "Twilight Shoot": {
        price: twilightshoot.price,
        description: twilightshoot.description,
        notice: twilightshoot.notice,
      },
      "Community Amenities Photos": {
        price: communityAmenities.price,
        description: communityAmenities.description,
        notice: communityAmenities.notice,
      },
      "Neighborhood Attraction photos": {
        price: neighborhoodAttraction.price,
        description: neighborhoodAttraction.description,
        notice: neighborhoodAttraction.notice,
      },
      "Virtual Twilight": {
        price: virtualTwilight.price,
        description: virtualTwilight.description,
        notice: virtualTwilight.notice,
      },
      "10 Additional Photos": {
        price: tenAdditional.price,
        description: tenAdditional.description,
        notice: tenAdditional.notice,
      },
      "2D Floorplan": {
        price: floorplan.price,
        description: floorplan.description,
        notice: floorplan.notice,
      },
      "Video Slideshow (With Music)": {
        price: slideshow.price,
        description: slideshow.description,
        notice: slideshow.notice,
      },
      "Object Removal/Declutter": {
        price: declutter.price,
        description: declutter.description,
        notice: declutter.notice,
      },
    },
    // TIER 4..................
    // TIER 4..................
    // TIER 4..................
    // TIER 4..................
    // TIER 4..................
    "4,001-5,000 sq.ft.": {
      "5 Drone Photos": {
        price: fiveAerial.price,
        description: fiveAerial.description,
        notice: fiveAerial.notice,
      },
      "Matterport Tour": {
        price: 245,
        description: matterport.description,
        notice: matterport.notice,
      },
      "Zillow 3D tour": {
        price: 155,
        description: zillow3d.description,
        notice: zillow3d.notice,
      },
      "Virtual Staging": {
        price: vStaging.price,
        description: vStaging.description,
        notice: vStaging.notice,
      },
      "Twilight Shoot": {
        price: twilightshoot.price,
        description: twilightshoot.description,
        notice: twilightshoot.notice,
      },
      "Community Amenities Photos": {
        price: communityAmenities.price,
        description: communityAmenities.description,
        notice: communityAmenities.notice,
      },
      "Neighborhood Attraction photos": {
        price: neighborhoodAttraction.price,
        description: neighborhoodAttraction.description,
        notice: neighborhoodAttraction.notice,
      },
      "Virtual Twilight": {
        price: virtualTwilight.price,
        description: virtualTwilight.description,
        notice: virtualTwilight.notice,
      },
      "10 Additional Photos": {
        price: tenAdditional.price,
        description: tenAdditional.description,
        notice: tenAdditional.notice,
      },
      "2D Floorplan": {
        price: floorplan.price,
        description: floorplan.description,
        notice: floorplan.notice,
      },
      "Video Slideshow (With Music)": {
        price: slideshow.price,
        description: slideshow.description,
        notice: slideshow.notice,
      },
      "Object Removal/Declutter": {
        price: declutter.price,
        description: declutter.description,
        notice: declutter.notice,
      },
    },
  };

  return (
    <Layout>
      <MobileMenu />
      <section className="services-banner-section">
        <GenericBanner title="Pricing" />
      </section>

      <section className="px-6 py-8">
        <div className="container">
          <h2 className="mx-auto text-2xl md:text-3xl font-semibold text-gray-800 mb-5 text-center">
            For Customized MLS Package Pricing, Select Your Property's Square
            Footage Below:*
          </h2>

          <div className="p-5 border-b-2 flex flex-wrap gap-4 md:gap-6 text-lg md:text-xl justify-center">
            {Object.keys(pricingData).map((size) => (
              <div
                key={size}
                className={`cursor-pointer px-3 md:px-4 py-2 border rounded-lg text-[15px] font-bold shadow-md text-center ${
                  selectedSqFt === size
                    ? "bg-yellow-500 text-black"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedSqFt(size)}
                onKeyDown={() => setSelectedSqFt(size)}
              >
                <p>{size}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-5 text-sm text-center">
          *Contact for homes over 5,000 Sq ft. | Additional charges may apply
          for properties located more than 35 miles from downtown Orlando.*
        </p>
      </section>

      <section className="px-6 md:px-12 py-8">
        <section className="px-6 md:px-12 py-8">
          <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(pricingData[selectedSqFt] || {}).map(
              ([packageName, packageDetails]) => (
                <div
                  key={packageName}
                  className="p-5 md:p-6 border border-yellow-500 rounded-lg shadow-lg bg-white text-center"
                >
                  <h4 className="text-lg text-left md:text-xl font-bold mb-2 text-gray-900">
                    {packageName.charAt(0).toUpperCase() + packageName.slice(1)}
                    : ${packageDetails.price}
                  </h4>
                  <p className="text-sm md:text-lg text-left text-gray-700 mb-5">
                    {packageDetails.description}
                  </p>
                  <ul>
                    {packageDetails.features.map((item, i) => (
                      <li className="mb-2 list-disc text-sm text-left">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
          <a
            href="https://portal.spiro.media/order/stunning/stunning-angles-order"
            target="_blank"
            rel="noreferrer"
            className="mx-auto mt-6 text-center xl:w-1/12 lg:w-2/12 md:w-3/12  p-3 block bg-slate-800 text-white text-sm font-bold"
          >
            Book Now
          </a>
        </section>
      </section>
      {/* INDIVIDUAL................... */}
      {/* INDIVIDUAL................... */}
      {/* INDIVIDUAL................... */}
      {/* INDIVIDUAL................... */}

      {/* PHOTOS......................................................................... */}
      <section className="px-6 md:px-12 py-8 bg-slate-800">
        <div className="p-5 md:p-6 rounded-lg shadow-lg bg-white">
          <h4 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            Photos
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {Object.entries(photosData[selectedSqFt] || {}).map(
              ([service, data]) => (
                <div
                  key={service}
                  className="p-4 md:p-5 border border-yellow-500 rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 text-center"
                >
                  <h5 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                    {service}
                  </h5>
                  <p className="text-sm md:text-lg text-gray-600">
                    {data.description}
                  </p>
                  <p className="text-sm text-gray-900 mt-3">{data.notice}</p>
                  <p className="text-lg md:text-xl font-bold text-gray-900 mt-3">
                    ${data.price}
                  </p>
                </div>
              )
            )}
          </div>
          <a
            href="https://portal.spiro.media/order/stunning/stunning-angles-order"
            target="_blank"
            rel="noreferrer"
            className="mx-auto mt-5 text-center xl:w-1/12 lg:w-2/12 md:w-3/12  p-3 block bg-slate-800 text-white text-sm font-bold"
          >
            Book Now
          </a>
        </div>
      </section>

      {/* VIDEO......................................................................... */}
      <section className="px-6 md:px-12 py-8 bg-slate-800">
        <div className="p-5 md:p-6 rounded-lg shadow-lg bg-white">
          <h4 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            Video
          </h4>
          <p className="mt-5 mb-5 text-sm text-center">
            *Contact for homes over 5,000 Sq ft.*{" "}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {Object.entries(videoData[selectedSqFt] || {}).map(
              ([service, data]) => (
                <div
                  key={service}
                  className="p-4 md:p-5 border border-yellow-500 rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 text-center"
                >
                  <h5 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                    {service}
                  </h5>
                  <p className="text-sm md:text-lg text-gray-600">
                    {data.description}
                  </p>
                  <p className="text-sm text-gray-900 mt-3">{data.notice}</p>
                  <p className="text-lg md:text-xl font-bold text-gray-900 mt-3">
                    ${data.price}
                  </p>
                </div>
              )
            )}
          </div>
          <a
            href="https://portal.spiro.media/order/stunning/stunning-angles-order"
            target="_blank"
            rel="noreferrer"
            className="mx-auto mt-5 text-center xl:w-1/12 lg:w-2/12 md:w-3/12  p-3 block bg-slate-800 text-white text-sm font-bold"
          >
            Book Now
          </a>
        </div>
      </section>

      {/* OTHER SERVICES........... */}
      {/* OTHER SERVICES........... */}
      {/* OTHER SERVICES........... */}
      {/* OTHER SERVICES........... */}
      <section className="px-6 md:px-12 py-8 bg-gray-100">
        <div className="p-5 md:p-6 rounded-lg shadow-lg bg-white">
          <h4 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
            Other Services
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {Object.entries(otherServicesPricing[selectedSqFt] || {}).map(
              ([service, data]) => (
                <div
                  key={service}
                  className="p-4 md:p-5 border border-yellow-500 rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 text-center"
                >
                  <h5 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                    {service}
                  </h5>
                  <p className="text-sm md:text-lg text-gray-600">
                    {data.description}
                  </p>
                  <p className="text-sm text-gray-900 mt-3">{data.notice}</p>
                  <p className="text-lg md:text-xl font-bold text-gray-900 mt-3">
                    ${data.price}
                  </p>
                </div>
              )
            )}
          </div>
          <a
            href="https://portal.spiro.media/order/stunning/stunning-angles-order"
            target="_blank"
            rel="noreferrer"
            className="mx-auto mt-5 text-center xl:w-1/12 lg:w-2/12 md:w-3/12  p-3 block bg-slate-800 text-white text-sm font-bold"
          >
            Book Now
          </a>
        </div>
      </section>
    </Layout>
  );
}

export default Pricing;
