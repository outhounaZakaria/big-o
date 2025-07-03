import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';

const FeatureTwo = ({ cardDark }) => {
  return (
    <>
      <section
        className={`feature-section ptb-120 ${
          cardDark ? 'bg-dark' : 'bg-light'
        }`}
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6 col-md-10'>
              {cardDark ? (
                <SectionTitle
                  subtitle='Services'
                  title='Best Services Grow Your Business Value'
                  description='Globally actualize cost effective with resource maximizing
                  leadership skills.'
                  centerAlign
                  dark
                />
              ) : (
                <SectionTitle
                  subtitle='Services'
                  title='Best Services Grow Your Business Value'
                  description='Globally actualize cost effective with resource maximizing
                  leadership skills.'
                  centerAlign
                />
              )}
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <div className='feature-grid'>
                <div
                  className={`feature-card shadow-sm rounded-custom p-5 ${
                    cardDark
                      ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                      : 'bg-white'
                  }`}
                  data-aos='fade-up'
                  data-aos-delay='50'
                >
                  <div
                    className='
                      icon-box
                      d-inline-block
                      rounded-circle
                      bg-success-soft
                      mb-32
                    '
                  >
                    <i className='fal fa fa-code icon-sm text-success'></i>
                  </div>
                  <div className='feature-content'>
                    <h3 className='h5'>Software Development</h3>
                    <p className='mb-0'>
                      We turn your ideas into reality with custom software development and seamless
                      integration services, built to meet your unique needs.
                    </p>
                  </div>
                </div>
                <div
                  className={`feature-card shadow-sm rounded-custom p-5 ${
                    cardDark
                      ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                      : 'bg-white'
                  }`}
                  data-aos='fade-up'
                  data-aos-delay='50'
                >
                  <div
                    className='
                      icon-box
                      d-inline-block
                      rounded-circle
                      bg-danger-soft
                      mb-32
                    '
                  >
                    <i className='fal fa-user-friends icon-sm text-danger'></i>
                  </div>
                  <div className='feature-content'>
                    <h3 className='h5'>It Consulting & Support</h3>
                    <p className='mb-0'>
                      We provide expert IT consulting and reliable support to help your
                      business make smarter technology decisions and stay running smoothly.
                    </p>
                  </div>
                </div>
                <div
                  className={`feature-card shadow-sm rounded-custom p-5 ${
                    cardDark
                      ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                      : 'bg-white'
                  }`}
                  data-aos='fade-up'
                  data-aos-delay='50'
                >
                  <div
                    className='
                      icon-box
                      d-inline-block
                      rounded-circle
                      bg-dark-soft
                      mb-32
                    '
                  >
                    <i className='fal fa-spell-check icon-sm text-dark'></i>
                  </div>
                  <div className='feature-content'>
                    <h3 className='h5'>Compare A/B Testing</h3>
                    <p className='mb-0'>
                      Credibly disintermediate functional processes for team
                      driven action.
                    </p>
                  </div>
                </div>
                <div
                  className={`feature-card shadow-sm rounded-custom p-5 ${
                    cardDark
                      ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                      : 'bg-white'
                  }`}
                  data-aos='fade-up'
                  data-aos-delay='50'
                >
                  <div
                    className='
                      icon-box
                      d-inline-block
                      rounded-circle
                      bg-warning-soft
                      mb-32
                    '
                  >
                    <i className='fal fa-cog icon-sm text-warning'></i>
                  </div>
                  <div className='feature-content'>
                    <h3 className='h5'>Easy Customization</h3>
                    <p className='mb-0'>
                      Dynamically develop ubiquitous opportunities whereas
                      relationships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureTwo;
