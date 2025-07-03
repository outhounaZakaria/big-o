import React from 'react';

const ContactBox = () => {
  return (
    <>
      <section className='contact-promo ptb-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6 mt-4 mt-lg-0'>
              <div className='contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100'>
                <span className='fad fa-envelope fa-3x text-primary'></span>
                <div className='contact-promo-info mb-4'>
                  <h5>Email Us</h5>
                  <p>
                    Simple drop us an email at {' '}
                    <strong> contact@big-o.ma </strong>
                    and you'll receive a reply within 24 hours
                  </p>
                </div>
                <a
                  href='mailto:contact@big-o.ma'
                  className='btn btn-primary mt-auto'
                >
                  Email Us
                </a>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 mt-4 mt-lg-0'>
              <div className='contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100'>
                <span className='fad fa-phone fa-3x text-primary'></span>
                <div className='contact-promo-info mb-4'>
                  <h5>Give us a call</h5>
                  <p>
                    Give us a call — we’re available,
                    <strong> Monday to Friday</strong> from
                    <strong> from 9 AM to 5 PM.</strong>
                  </p>
                </div>
                <a href='tel:+212 617 79 71 34' className='btn btn-link mt-auto'>
                  +212 617 79 71 34
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactBox;
