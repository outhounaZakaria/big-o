import React from 'react';
import SectionTitle from '../common/SectionTitle';

const PromoTwo = () => {
  return (
    <>
      <section className='promo-section ptb-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6 col-md-10'>
              <SectionTitle
                title='We Help you Stay Connected'
                description=" Whether it's powering seamless communication, integrating cloud platforms, or securing your networks, we ensure that your business stays in sync — anytime, anywhere.."
                  centerAlign
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='promo-single position-relative text-center bg-white custom-shadow rounded-custom p-5 mb-4'>
                <div className='promo-icon mb-32'>
                  <i className='fas fa-wifi text-primary fa-3x'></i>
                </div>
                <div className='promo-info'>
                  <h3 className='h5'>Stay Connected</h3>
                  <p className='mb-0'>
                    At Big-O Technologies, we specialize in building smart, reliable systems that keep your world connected.
                  </p>
                </div>
                {/* <!--pattern start--> */}
                <div className='dot-shape-bg position-absolute z--1 left--40 top--40'>
                  <img src='assets/img/shape/dot-big-square.svg' alt='shape' />
                </div>
                {/* <!--pattern end--> */}
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='promo-single position-relative text-center bg-white custom-shadow rounded-custom p-5 mb-4'>
                <div className='promo-icon mb-32'>
                  <i className='fas fa-user-friends text-success fa-3x'></i>
                </div>
                <div className='promo-info'>
                  <h3 className='h5'>Encourage Participation</h3>
                  <p className='mb-0'>
                    Our goal is to empower every voice and make
                    participation effortless across your organization.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='promo-single position-relative text-center bg-white custom-shadow rounded-custom p-5 mb-4'>
                <div className='promo-icon mb-32'>
                  <i className='fas fa-bezier-curve text-danger fa-3x'></i>
                </div>
                <div className='promo-info'>
                  <h3 className='h5'>Build Connections</h3>
                  <p className='mb-0'>
                    At Big-O Technologies, we create technology that brings people, systems, and ideas together.
                  </p>
                </div>
                {/* <!--pattern start--> */}
                <div className='dot-shape-bg position-absolute z--1 right--40 bottom--40'>
                  <img src='assets/img/shape/dot-big-square.svg' alt='shape' />
                </div>
                {/* <!--pattern end--> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PromoTwo;
