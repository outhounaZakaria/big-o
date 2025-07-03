import React from "react";
import { Link } from "react-router-dom";
import {
  navCompanyLinks,
  navCompanyPage,
  offcanvasMenuData,
} from "./../../data";

const OffCanvasMenu = () => {
  return (
    <div className="offcanvas-body">
      <ul className="nav col-12 col-md-auto justify-content-center main-menu">
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link legacyBehavior to="/">
            <a className="nav-link">Home</a>
          </Link>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link legacyBehavior to="/about-us">
            <a className="nav-link">About</a>
          </Link>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link legacyBehavior to="/services">
            <a className="nav-link">Services</a>
          </Link>
        </li>

      </ul>
      <div className="action-btns mt-4 ps-3">
        <span data-bs-dismiss="offcanvas" aria-label="Close">
          <Link legacyBehavior to="/contact-us">
            <a className="btn btn-outline-primary text-decoration-none me-2">
              Contact us
            </a>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default OffCanvasMenu;
