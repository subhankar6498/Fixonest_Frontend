import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* <!-- Footer Section Begin --> */}
      <footer class="footer-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="footer-about">
                <div className="f-logodiv">
                  <span className="f-logospan">Fix</span>
                  <img src="/img/logo.png" alt="" height={50} />
                  <span className="f-logospan">Nest</span>
                </div>

                <p>
                  Fixonest provides you trustable services and solve your issue
                  like you never experienced before. To fulfill this promise, we
                  work closely with our hand-picked service partners, enabling
                  them with technology, training, products, tools, helping them
                  succeed and deliver on this promise.
                </p>
                <div class="fa-social">
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-youtube-play"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="editor-choice">
                <div class="section-title">
                  <h5>Contact Us</h5>
                </div>
                <div className="footer_map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58949.25962269764!2d88.27898604863277!3d22.5668054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a8e34982ff%3A0x5c83faab62209aed!2sTAKECARE%20IT%20SOLUTION!5e0!3m2!1sen!2sin!4v1731163883440!5m2!1sen!2sin"
                    width="80%"
                    height="170"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <h6 className="text-white mt-3">Call Us: +91-7980567320</h6>
                  <h6 className="text-white">Address: 123, New York, USA</h6>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="tags-cloud">
                <div class="section-title">
                  <h5>UseFul Links</h5>
                </div>
                <div class="tag-list">
                  <Link to="/">
                    <span>Home</span>
                  </Link>
                  <Link to="/about">
                    <span>About</span>
                  </Link>
                  <Link to="/services">
                    <span>Service</span>
                  </Link>
                  <Link to="/team">
                    <span>Team</span>
                  </Link>
                  <Link to="/testimonials">
                    <span>Testimonials</span>
                  </Link>
                  <Link to="/services">
                    <span>Booking</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="copyright-area">
            <div class="row">
              <div class="col-lg-6">
                {/* <div class="ca-text"><p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with{" "}
                <i class="fa fa-heart" aria-hidden="true"></i> by FixoNest
              </div>
              <div class="col-lg-6">
                <div class="ca-links">
                  <Link to="/about">About</Link>
                  <Link to="/testimonials">Testimonials</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/services">Support</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Footer Section End --> */}
    </>
  );
};

export default Footer;
