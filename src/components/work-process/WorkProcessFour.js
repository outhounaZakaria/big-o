import React from 'react';

const WorkProcessFour = () => {
  return (
    <>
      <section className='work-process ptb-60'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-10 col-lg-6'>
              <div className='section-heading text-center'>
                <h4 className='h5 text-primary'>Process</h4>
                <h2>We Follow Our Work Process</h2>
                <p>
                  We stick to a proven process that ensures quality and consistency in every project.
                </p>
              </div>
            </div>
          </div>
          <div className='row d-flex align-items-center' style={{marginTop: '-40px'}}>
            <div className='col-md-6 col-lg-3'>
              <div className='process-card text-center px-4 py-lg-5 py-4 rounded-custom shadow-hover mb-2 mb-lg-0'>
                <div className='process-icon border border-light bg-custom-light rounded-custom p-3'>
                  <span className='h2 mb-0 text-primary fw-bold'>1</span>
                </div>
                <h3 className='h5'>Research</h3>
                <p className='mb-0'>
                  We dive deep to uncover insights that drive smarter decisions.
                </p>
              </div>
            </div>
            <div className='dots-line first'></div>
            <div className='col-md-6 col-lg-3'>
              <div className='process-card text-center px-4 py-lg-5 py-3 rounded-custom shadow-hover mb-2 mb-lg-0'>
                <div className='process-icon border border-light bg-custom-light rounded-custom p-3'>
                  <span className='h2 mb-0 text-primary fw-bold'>2</span>
                </div>
                <h3 className='h5'>Designing</h3>
                <p className='mb-0'>
                  Defining the software’s architecture, user interfaces, and system interactions.
                </p>
              </div>
            </div>
            <div className='dots-line first'></div>
            <div className='col-md-6 col-lg-3'>
              <div className='process-card text-center px-4 py-lg-5 py-4 rounded-custom shadow-hover mb-2 mb-lg-0 mb-md-0'>
                <div className='process-icon border border-light bg-custom-light rounded-custom p-3'>
                  <span className='h2 mb-0 text-primary fw-bold'>3</span>
                </div>
                <h3 className='h5'>Building</h3>
                <p className='mb-0'>
                  This stage involves writing clean, efficient code to bring the design to life.
                </p>
              </div>
            </div>
            <div className='dots-line first'></div>
            <div className='col-md-6 col-lg-3'>
              <div className='process-card text-center px-4 py-lg-5 py-4 rounded-custom shadow-hover mb-0 mb-lg-0 mb-md-0'>
                <div className='process-icon border border-light bg-custom-light rounded-custom p-3'>
                  <span className='h2 mb-0 text-primary fw-bold'>4</span>
                </div>
                <h3 className='h5'>Deliver</h3>
                <p className='mb-0'>
                  We deploy the completed software to your environment, ensuring a smooth launch and providing support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkProcessFour;
