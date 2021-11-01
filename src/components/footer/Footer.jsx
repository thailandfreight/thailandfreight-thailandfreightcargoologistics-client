const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <div id="footer"></div>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-3 footer__widget footer__widget-about">
                <div className="footer__widget-content">
                  <img
                    src="img/logo.jpg"
                    alt="logo"
                    width={210}
                    className="footer-logo"
                  />
                </div>
              </div>
              {/* /.col-lg-4 */}
              <div className="col-sm-12 col-md-12 col-lg-4 footer__widget footer__widget-about">
                <h6 className="footer__widget-title">About Us</h6>
                <div className="footer__widget-content">
                  <p>
                    We offer a full range of Transport Services across the
                    Europe and more. We have many years of experience in the
                    movement of all types of items including car delivery.
                  </p>
                </div>
              </div>
              {/* /.col-lg-4 */}
              <div className="col-6 col-sm-6 col-md-3 col-lg-3 footer__widget footer__widget-nav">
                <h6 className="footer__widget-title">Contact Us</h6>
                <div className="footer__widget-content">
                  <p>
                    Thai Shipping Agencies & Trading Co., Ltd. <br />
                    TSC Bldg., 3360 Soi Manorom Rama IV Road, Klong Ton, Klong
                    Toey, Bangkok 10110, Thailand
                  </p>
                  <ul className="contact__list list-unstyled">
                    <li>
                      <span>
                        Email: thailandfreightcargologistics@gmail.com
                      </span>
                    </li>
                    <li>
                      <span>
                        Tel: 02-249-9566 Fax: 02-249-3873, 02-249-8447{' '}
                      </span>
                    </li>
                  </ul>
                </div>
                {/* /.footer-widget-content */}
              </div>
              {/* /.col-lg-2 */}
              <div className="col-6 col-sm-6 col-md-3 col-lg-2 footer__widget footer__widget-nav">
                <h6 className="footer__widget-title">Quick Links</h6>
                <div className="footer__widget-content">
                  <nav>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#slider">Home</a>
                      </li>
                      <li>
                        <a href="#about">About Us</a>
                      </li>
                      <li>
                        <a href="#footer">Contact Us</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* /.footer-widget-content */}
              </div>
              {/* /.col-lg-2 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.footer-top */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="footer__copyright">
                  <span>All Rights Reserved © 2021 </span>
                  <a href="index.html">Thailand freight & Logistics</a>
                </div>
                {/* /.Footer-copyright */}
              </div>
              {/* /.col-lg-6 */}
              <div className="col-sm-12 col-md-6 col-lg-6">
                <nav>
                  <ul className="list-unstyled footer__copyright-links d-flex flex-wrap justify-content-end">
                    <li>
                      <a href="index.html#">Terms &amp; Conditions </a>
                    </li>
                    <li>
                      <a href="index.html#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="index.html#">Sitemap</a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* /.col-lg-6 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.Footer-bottom */}
      </footer>
    </>
  );
};

export default Footer;
