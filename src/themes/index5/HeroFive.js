import React from "react";
import { Link } from "react-router-dom";
import HeroTitle from "../../components/common/HeroTitle";

const HeroFive = () => {
  return (
    <>
      <section id="homeTop"
        className="hero-section ptb-120 d-flex align-items-center bg-dark text-white position-relative overflow-hidden"
        style={{
          background:
            "url('assets/img/page-header-bg.svg')no-repeat bottom right",
        }}
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="hero-content-wrap">
                <HeroTitle
                  title="Transform Your Business With Next Generation IT Solutions"
                  desc="At Big-O Technologies, we tailor smart IT strategies that fuel innovation, streamline your systems, and push your business to new heights."
                />

                <div className="action-btns mt-5">
                  <Link to="/about-us" className="btn btn-outline-light">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 mt-5 mt-lg-0">
              <div className="animated-img-wrap">
                {/* <!--animated shape start--> */}
                <ul className="animate-element parallax-element animated-hero-1 position-relative ">
                  <li className="layer " data-depth="0.02">
                    <img
                      src="assets/img/screen/animated-screen-2.svg"
                      alt="shape"
                      className="img-fluid position-absolute type-0"
                    />
                  </li>
                </ul>
                {/* <!--animated shape end--> */}
                <img
                  src="assets/img/screen/animated-screen-1.svg"
                  alt="shape"
                  className="position-relative img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroFive;
