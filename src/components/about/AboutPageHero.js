import React from 'react';
import { Link } from 'react-router-dom';

const AboutPageHero = () => {
  return (
    <>
      <section
        className='about-header-section pt-120 pb-60 position-relative overflow-hidden bg-dark'
        style={{
          background:
            "url('assets/img/page-header-bg.svg')no-repeat center right",
        }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='section-heading-wrap d-flex justify-content-between z-5 position-relative'>
                <div className='about-content-left'>
                  <div className='about-info mb-5'>
                    <h1 className='fw-bold display-5'>
                      Empower Your Business with Innovative IT Solutions
                    </h1>
                    <p className='lead'>
                      We help your business run better with Scalable IT solutions that improve efficiency and support growth.
                    </p>
                  </div>
                  <img
                    src='assets/img/about-img-1.jpg'
                    alt='about'
                    className='img-fluid about-img-first mt-5 rounded-custom shadow'
                  />
                </div>
                <div className='about-content-right'>
                  <img
                    src='assets/img/about-img-2.jpg'
                    alt='about'
                    className='img-fluid mb-5 rounded-custom shadow'
                  />
                  <img
                    src='assets/img/about-img-3.jpg'
                    alt='about'
                    className='rounded-custom about-img-last shadow'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white position-absolute bottom-0 h-25 bottom-0 left-0 right-0 z-2 py-5'></div>
      </section>
    </>
  );
};

export default AboutPageHero;
