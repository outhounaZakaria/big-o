import React from 'react';
import SectionTitle from '../common/SectionTitle';

const FeatureImgSix = () => {
  return (
    <>
      <section id="about" className='feature-section-two pb-60 pt-120'>
        <div className='container'>
          <div className='row align-items-center justify-content-lg-between justify-content-center'>
            <div className='col-lg-6 col-md-12'>
              <div className='feature-content-wrap'>
                <SectionTitle
                  title='We are development experts on all technologies'
                  description=' Whether it’s web, mobile, cloud, or emerging tech, our versatile
                   team delivers high-quality solutions tailored to your unique needs.'
                  leftAlign
                />
                <ul className='list-unstyled mb-0'>
                  <li className='d-flex align-items-start mb-4'>
                    <div className='icon-box bg-primary rounded me-4'>
                      <i className='fas fa-bezier-curve text-white'></i>
                    </div>
                    <div className='icon-content'>
                      <h3 className='h5'>Pixel Perfect Design</h3>
                      <p>
                        We bring your vision to life with precision and attention to every detail.
                        Our pixel-perfect designs ensure an impeccable user experience.
                      </p>
                    </div>
                  </li>
                  <li className='d-flex align-items-start mb-4'>
                    <div className='icon-box bg-danger rounded me-4'>
                      <i className='fas fa-fingerprint text-white'></i>
                    </div>
                    <div className='icon-content'>
                      <h3 className='h5'>Unique &amp; Minimal Design</h3>
                      <p>
                        We believe less is more. Our minimalist design
                        approach focuses on clarity, simplicity, and functionality
                      </p>
                    </div>
                  </li>
                  <li className='d-flex align-items-start mb-4 mb-lg-0'>
                    <div className='icon-box bg-dark rounded me-4'>
                      <i className='fas fa-headset text-white'></i>
                    </div>
                    <div className='icon-content'>
                      <h3 className='h5'>24/7 Free Online Support</h3>
                      <p>
                        We’re here whenever you need us. Our free, round-the-clock
                        online support ensures your questions are answered
                        and issues resolved quickly
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-6 col-md-7'>
              <div className='feature-img-wrap' style={{textAlign:"center"}}>
                <img
                  src='assets/img/feature-hero-img.svg'
                  alt='feature'
                  className='img-fluid rounded-custom'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureImgSix;
