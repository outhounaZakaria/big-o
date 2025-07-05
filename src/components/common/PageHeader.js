import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ title, desc, integration, blogtags }) => {
  return (
    <>

        <section
          className='page-header position-relative overflow-hidden ptb-120 bg-dark'
          style={{
            background:
              "url('assets/img/page-header-bg.svg')no-repeat bottom left",
              paddingTop:"140px"
          }}
        >
          <div className='container'>
            <div
              className={`row ${
                blogtags ? 'justify-content-center text-center' : ''
              }`}
            >
              <div className='col-lg-8 col-md-12'>
                <h1 className='display-5 fw-bold'>{title}</h1>
                <p className='lead'>{desc}</p>
              </div>
            </div>
            {blogtags ? (
              <div className='row justify-content-center text-center'>
                <div className='col-xl-8'>
                  <Link
                    to='#'
                    className='btn btn-soft-primary btn-pill btn-sm m-2'
                  >
                    Marketing
                  </Link>
                  <Link
                    to='#'
                    className='btn btn-soft-primary btn-pill btn-sm m-2'
                  >
                    Sales
                  </Link>
                  <Link
                    to='#'
                    className='btn btn-soft-primary btn-pill btn-sm m-2'
                  >
                    Design
                  </Link>
                  <Link
                    to='#'
                    className='btn btn-soft-primary btn-pill btn-sm m-2'
                  >
                    Development
                  </Link>
                  <Link
                    to='#'
                    className='btn btn-soft-primary btn-pill btn-sm m-2'
                  >
                    Product Design
                  </Link>
                  <Link
                    to='#'
                    className='btn btn-soft-primary btn-pill btn-sm m-2'
                  >
                    Customers
                  </Link>
                  <Link
                    to='#'
                    className='btn btn-soft-primary btn-pill btn-sm m-2'
                  >
                    Agency
                  </Link>
                  <Link
                    to='#'
                    className='btn btn-soft-primary btn-pill btn-sm m-2'
                  >
                    Investors
                  </Link>
                  <Link
                    to='#'
                    className='btn btn-soft-primary btn-pill btn-sm m-2'
                  >
                    Research
                  </Link>
                </div>
              </div>
            ) : (
              ''
            )}
            <div className='bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5'></div>
          </div>
        </section>
    </>
  );
};

export default PageHeader;
