import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OffCanvasMenu from "./OffCanvasMenu";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import {
  navHomeOne,
  navHomeTwo,
  navCompanyLinks,
  navCompanyPage,
  navHomeThree,
  navHomeFour,
} from "./../../data";
import {HashLink} from "react-router-hash-link";
const Navbar = ({
  navDark,
  insurance,
  classOption,
  corporate,
  creativeAgencyOne,
  itCompany,
}) => {
  // console.log("corporate...", corporate);
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const stickyheader = document.querySelector(".main-header");
    setHeaderTop(stickyheader.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <>
      <header
        className={`main-header z-10 ${
          creativeAgencyOne ? "creative_agency_nav " : ""
        }  ${itCompany ? "it_company_nav " : ""}     ${
          corporate ? "header-35 position-absolute top-0 start-0 zindex-9" : ""
        }   ${navDark ? "position-absolute " : ""} w-100 ${classOption} ${
          insurance && "ins-header main-header w-100 z-10 "
        }`}
      >
        <nav
          className={`navbar navbar-expand-xl z-50  ${
            corporate ? "affix" : ""
          } ${navDark ? "navbar-dark " : "navbar-light"} sticky-header ${
            scroll > headerTop ? "affix" : ""
          }`}
        >
          <div className="container d-flex align-items-center justify-content-lg-between position-relative">
            <Link to="/">
              {scroll > headerTop || !navDark || itCompany ? (
                <img
                  width={113}
                  height={26}
                  src="assets/img/logo-color.png"
                  alt="Big-O"
                  className="img-fluid logo-color"
                />
              ) : (
                <img
                  width={113}
                  height={26}
                  src="assets/img/logo-white.png"
                  alt="Big-O"
                  className="img-fluid logo-white"
                />
              )}
            </Link>
            <button
              className="navbar-toggler position-absolute right-0 border-0"
              id="#offcanvasWithBackdrop"
              role="button"
            >
              <span
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBackdrop"
                aria-controls="offcanvasWithBackdrop"
              >
                <HiMenu style={{ width: "1.8em", height: "1.8em" }} />
              </span>
            </button>
            <div className="clearfix"></div>
            <div className="collapse navbar-collapse justify-content-center">
              <ul className="nav col-12 col-md-auto justify-content-center main-menu">
                <li>
                  <HashLink to="/" className="nav-link">
                    Home
                  </HashLink>
                </li>
                <li>
                  <HashLink
                      to="/about-us" className="nav-link">
                    About
                  </HashLink>
                </li>
                <li>
                  <Link to="/services" className="nav-link">
                    Services
                  </Link>
                </li>

              </ul>
            </div>

            <div className="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block">
              <div className="action-btns  ps-3">
                <span aria-label="Close">
                    <Link to="/contact-us">
                        <a className="btn btn-outline-primary text-decoration-none me-2">
                            Contact us
                            </a>
                    </Link>
                </span>
              </div>
            </div>

            <div
              className="offcanvas offcanvas-end d-xl-none"
              tabIndex="-1"
              id="offcanvasWithBackdrop"
            >
              <div className="offcanvas-header d-flex align-items-center mt-4">
                <Link
                  to="/"
                  className="d-flex align-items-center mb-md-0 text-decoration-none"
                >
                  <img
                    width={121}
                    height={36}
                    src="assets/img/logo-color.png"
                    alt="logo"
                    className="img-fluid ps-2"
                  />
                </Link>
                <button
                  type="button"
                  className="close-btn text-danger"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  style={{ width: "35px", height: "35px"}}
                >
                  <HiOutlineX style={{ width: "1.7em", height: "1.7em", marginLeft: "-2px", marginBottom: "1px" }} />
                </button>
              </div>

               <OffCanvasMenu />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
