const SoftwareCompanyAbout = () => {
  return (
    <>
      <section className="sc-about-section ptb-120 bg-white position-relative z-1 overflow-hidden border-line-bg">
        <span className="sc-shape-gradient sc-shape-gradient-4 position-absolute z--1"></span>
        <span className="sc-shape-gradient sc-shape-gradient-5 position-absolute z--1"></span>
        <span className="sc-shape-gradient sc-shape-gradient-6 position-absolute z--1"></span>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="sc-about-left position-relative z-1">
                <img
                  src="assets/img/software-company/ab-1.png"
                  alt="not found"
                  className="img-fluid"
                />
                <img
                  src="assets/img/software-company/ab-shape.png"
                  alt="shape image"
                  className="position-absolute ab-shape z--1 img-fluid"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sc-about-right">
                <h2 className="sc-heading-color mb-4">
                  Technology is best when people together
                </h2>
                <p className="mb-0">
                  At Big-O Technologies, we believe technology is at its best when
                  it brings people together. Our approach focuses on creating smart,
                  human-centered solutions that connect, empower, and drive progress.
                </p>
                <span className="doted-border d-block mt-40 mb-40"></span>
                <div className="d-flex align-items-center sc-about-author">
                  <img
                    src="assets/img/ceo-image.jpeg"
                    alt="not found"
                    className="flex-shrink-0"
                    style={{width:'100px',height:'100px'}}
                  />
                  <div className="ms-sm-4 mt-3 mt-sm-0">
                    <p className="text-dg-color">
                      At Big-O Technologies, we don’t just build software
                      — we build bridges between people, ideas, and possibilities.
                    </p>
                    <div className="d-flex align-items-center">
                      <h5 className="sc-heading-color me-4 mb-0">Outhouna Zakaria</h5>
                      <span className="d-inline-block text-dg-color">
                        CEO at Big-O
                      </span>
                    </div>
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

export default SoftwareCompanyAbout;
