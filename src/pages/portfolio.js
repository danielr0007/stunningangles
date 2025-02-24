import React from "react";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import GenericBanner from "../components/GenericBanner";
import PortfolioGallery from "../components/PortfolioGallery";
import MobileMenu from "../components/MobileMenu";
import { imagesData } from "../utils/data";
import GeneralExpandedGallery from "../components/generalExpandedGallery";

function Portfolio() {
  const [showExpandedGallery, setShowExpandedGallery] = useState(false);
  const [clickedImageId, setClickedImageId] = useState(null);

  useEffect(() => {
    if (showExpandedGallery) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showExpandedGallery]);

  function expandImage(id) {
    setShowExpandedGallery(true);
    setClickedImageId(id);
  }
  return (
    <Layout>
      <MobileMenu />
      {/* SECTION ONE - BANNER......................................................................... */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      <section className="services-banner-section">
        <GenericBanner title="Portfolio" />
      </section>

      {/* SECTION TWO - GRID ONE.................................................................. */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      <section className="portfolio-grid-section">
        <PortfolioGallery>
          {imagesData.slice(0, 6).map((unit, index) => {
            return (
              <div key={unit.id} className="portfolio-image-container">
                <img
                  src={unit.image}
                  alt="real estate"
                  onClick={() => expandImage(unit.id)}
                  onKeyDown={() => expandImage(unit.id)}
                  role="presentation"
                />
              </div>
            );
          })}
        </PortfolioGallery>
      </section>

      {/* SECTION THREE - TWO BIG IMAGES SECTION........................................................ */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      <section className="two-big-images-section">
        <div className="images-containerr">
          <div className="image1-containerr">
            <img
              src={imagesData[7].image}
              alt=""
              onClick={() => expandImage(imagesData[7].id)}
              onKeyDown={() => expandImage(imagesData[7].id)}
              role="presentation"
            />
          </div>
          <div className="image2-containerr">
            <img
              src={imagesData[8].image}
              alt="real estate"
              onClick={() => expandImage(imagesData[8].id)}
              onKeyDown={() => expandImage(imagesData[8].id)}
              role="presentation"
            />
          </div>
        </div>
      </section>

      {/* SECTION FOUR - GRID TWO.................................................................. */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      <section className="portfolio-grid-section">
        <PortfolioGallery>
          {imagesData.slice(9, 18).map((unit, index) => {
            return (
              <div key={unit.id} className="portfolio-image-container">
                <img
                  src={unit.image}
                  alt="real estate home"
                  onClick={() => expandImage(unit.id)}
                  onKeyDown={() => expandImage(unit.id)}
                  role="presentation"
                />
              </div>
            );
          })}
        </PortfolioGallery>
      </section>

      {/* SECTION FIVE - TWO BIG IMAGES SECTION........................................................ */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      <section className="two-big-images-section">
        <div className="images-containerr">
          <div className="image1-containerr">
            <img
              src={imagesData[19].image}
              alt=""
              onClick={() => expandImage(imagesData[19].id)}
              onKeyDown={() => expandImage(imagesData[19].id)}
              role="presentation"
            />
          </div>
          <div className="image2-containerr">
            <img
              src={imagesData[18].image}
              alt=""
              onClick={() => expandImage(imagesData[18].id)}
              onKeyDown={() => expandImage(imagesData[18].id)}
              role="presentation"
            />
          </div>
        </div>
      </section>

      {/* SECTION SIX - GRID THREE.................................................................. */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      {/* ........................................................................................ */}
      <section className="portfolio-grid-section">
        <PortfolioGallery>
          {imagesData.slice(20, 35).map((unit, index) => {
            return (
              <div key={unit.id} className="portfolio-image-container">
                <img
                  src={unit.image}
                  alt="real estate home"
                  onClick={() => expandImage(unit.id)}
                  onKeyDown={() => expandImage(unit.id)}
                  role="presentation"
                />
              </div>
            );
          })}
        </PortfolioGallery>
      </section>
      {showExpandedGallery && (
        <GeneralExpandedGallery
          expandedGallery={setShowExpandedGallery}
          clickedImageId={clickedImageId}
        />
      )}
    </Layout>
  );
}

export default Portfolio;
