import React from 'react';
import SectionTitle from '../common/SectionTitle';

const FeatureImgSeven = () => {
  return (
    <>
      <section className='why-choose-us pt-60 pb-60'>
        <div className='container'>
          <div className='row justify-content-lg-between justify-content-center align-items-center'>
            <div className='col-lg-5 col-md-7 order-1 order-lg-0'>
              <div className='why-choose-img position-relative'>
                <img
                  src='assets/img/feature-hero-img-2.svg'
                  className='img-fluid'
                  alt='duel-phone'
                />
              </div>
            </div>
            <div className='col-lg-6 col-md-12 order-0 order-lg-1'>
              <div className='why-choose-content'>
                <div className='mb-32'>
                  <SectionTitle
                    title='We run all kinds of services in form of software'
                    description="We deliver diverse services through innovative software tailored to your business needs."
                    leftAlign
                  />
                </div>
                <ul className='list-unstyled d-flex flex-wrap list-two-col'>
                  <li className='py-1'>
                    <i className='fas fa-check-circle me-2 text-primary'></i>
                    Thought leadership
                  </li>
                  <li className='py-1'>
                    <i className='fas fa-check-circle me-2 text-primary'></i>
                    Professional identity
                  </li>
                  <li className='py-1'>
                    <i className='fas fa-check-circle me-2 text-primary'></i>
                    Highlighting achievements
                  </li>
                  <li className='py-1'>
                    <i className='fas fa-check-circle me-2 text-primary'></i>
                    Efficient management
                  </li>
                  <li className='py-1'>
                    <i className='fas fa-check-circle me-2 text-primary'></i>
                    Rapid communication
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureImgSeven;
