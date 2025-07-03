import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';

const FeatureOne = () => {
  return (
    <>
      <section  className='feature-promo ptb-60 bg-light'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6 col-md-10'>
              <SectionTitle
                title='With all the Features You Need'
                description="We deliver complete, feature-rich solutions tailored to your business needs. From robust security to seamless integrations and intuitive interfaces."
                centerAlign
              />
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-feature-promo p-lg-5 p-3 text-center mt-4'>
                <div className='feature-icon icon-center pb-5 rounded-custom bg-primary'>
                  <i className='fal fa-layer-group fa-2x text-white'></i>
                </div>
                <div className='feature-info-wrap'>
                  <h3 className='h5'>Good Performance</h3>
                  <p>
                    Performance is at the core of everything we build.
                    Our solutions are engineered for speed, reliability, and scalability.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-feature-promo p-lg-5 p-3 text-center mt-4'>
                <div className='feature-icon icon-center pb-5 rounded-custom bg-danger'>
                  <i className='fal fa-shield-check fa-2x text-white'></i>
                </div>
                <div className='feature-info-wrap'>
                  <h3 className='h5'>Highly Secure</h3>
                  <p>
                    We prioritize your security at every layer. From encrypted communications
                    to robust access controls and continuous threat monitoring.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-feature-promo p-lg-5 p-3 text-center mt-4'>
                <div className='feature-icon icon-center pb-5 rounded-custom bg-dark'>
                  <i className='fal fa-code fa-2x text-white'></i>
                </div>
                <div className='feature-info-wrap'>
                  <h3 className='h5'>Fast Development</h3>
                  <p>
                    We accelerate development timelines without compromising
                    quality, so you can launch, scale, and adapt with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureOne;
