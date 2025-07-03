import { Link } from "react-router-dom";

const HelpDeskBrand = () => {
  const brands = [
    { src: "assets/img/icons/monday.png", alt: "monday" },
    { src: "assets/img/icons/segment.png", alt: "segment" },
    { src: "assets/img/icons/samsung.png", alt: "samsung" },
    { src: "assets/img/icons/morpheus.png", alt: "morpheus" },
    { src: "assets/img/icons/hellosign.png", alt: "hellosign" },
    { src: "assets/img/icons/getaround.png", alt: "getaround" },
    { src: "assets/img/icons/northwest.png", alt: "northwest" },
    { src: "assets/img/icons/lattice.png", alt: "lattice" },
  ];
  return (
    <>
      <section className="hd-brands-section pb-120">
        <div className="container">
          <div className="hd-brands-box">
            <div className="row align-items-center g-5">
              <div className="col-xl-5">
                <div className="hd-brands-left">
                  <div className="hd-title">
                    <h3 className="text-white mb-30">
                      Join the 3000+ Experts Who Bring Customer{" "}
                      <mark className="bg-transparent p-0 position-relative">
                        Service{" "}
                        <img
                          src="assets/img/shape/line-shape.png"
                          alt="line shape"
                          className="position-absolute line-shape"
                        />
                      </mark>
                    </h3>
                    <Link href="/help-desk" className="dark-explore-btn">
                      See More Customer Stories{" "}
                      <span className="ms-2">
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-7">
                <div className="hd-brands-wrapper d-flex align-items-center justify-content-center flex-wrap">
                  {brands.map((brand, index) => (
                    <div
                      key={index}
                      className={`hd-single-brand ${
                        index < 4 ? "border-line-bottom" : ""
                      } ${index % 4 !== 3 ? "border-line-right" : ""}`}
                    >
                      <img
                        src={brand.src}
                        alt={brand.alt}
                        className="img-fluid"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpDeskBrand;
