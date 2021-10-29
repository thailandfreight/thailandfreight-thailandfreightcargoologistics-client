const Content = () => {
  return (
    <>
      {/* =========================== 
          fancybox Layout 3
        ============================= */}
      <section id="fancyboxLayout3" className="fancybox-layout3 p-0">
        <div className="container">
          <div className="row fancybox-boxes-wrap">
            {/* fancybox item #1 */}
            <div className="col-sm-6 col-md-6 col-lg-3 fancybox-item">
              <div className="fancybox__icon">
                <i className="icon-wallet" />
              </div>
              {/* /.fancybox-icon */}
              <div className="fancybox__content">
                <h4 className="fancybox__title">Real-Time Tracking</h4>
                <p className="fancybox__desc">
                  Don't be left out! You can track your order status online.
                </p>
              </div>
              {/* /.fancybox-content */}
            </div>
            {/* /.fancybox-item */}
            {/* fancybox item #2 */}
            <div className="col-sm-6 col-md-6 col-lg-3 fancybox-item">
              <div className="fancybox__icon">
                <i className="icon-search" />
              </div>
              {/* /.fancybox-icon */}
              <div className="fancybox__content">
                <h4 className="fancybox__title">Safe Delivery</h4>
                <p className="fancybox__desc">
                  Our highly skilled professionals and partners across the globe
                  will ensure the safety of your goods.
                </p>
              </div>
              {/* /.fancybox-content */}
            </div>
            {/* /.fancybox-item */}
            {/* fancybox item #3 */}
            <div className="col-sm-6 col-md-6 col-lg-3 fancybox-item">
              <div className="fancybox__icon">
                <i className="icon-trolley" />
              </div>
              {/* /.fancybox-icon */}
              <div className="fancybox__content">
                <h4 className="fancybox__title">
                  Fast &amp; Efficient Delivery
                </h4>
                <p className="fancybox__desc">
                  We enhance our operations by relieving you of the worries.
                </p>
              </div>
              {/* /.fancybox-content */}
            </div>
            {/* /.fancybox-item */}
            {/* fancybox item #4 */}
            <div className="col-sm-6 col-md-6 col-lg-3 fancybox-item">
              <div className="fancybox__icon">
                <i className="icon-package-6" />
              </div>
              {/* /.fancybox-icon */}
              <div className="fancybox__content">
                <h4 className="fancybox__title">Personalised solutions</h4>
                <p className="fancybox__desc">
                  We continue to pursue that same vision in today's complex
                  solutions.
                </p>
              </div>
              {/* /.fancybox-content */}
            </div>
            {/* /.fancybox-item */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* /.fancybox Layout3 */}
      {/* ========================
About 1
    =========================== */}
      <div id="about"></div>
      <section id="about" className="about about-1 pt-90">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-7">
              <div className="video-banner p-0">
                <img src="img/gallery-big-2.jpg" alt="background" />
              </div>
              {/* /.video */}
            </div>
            {/* /.col-lg-6 */}
            <div className="col-sm-12 col-md-12 col-lg-5">
              <div className="heading heading-3 pt-100">
                <span className="heading__subtitle">
                  Real Solutions, Real Fast!
                </span>
                <h2 className="heading__title">
                  Safe, Reliable Logistic Solutions That Saves Your Time!
                </h2>
                <p className="heading__desc mb-30">
                  We offer a Global Logistics Network with our worldwide offices
                  and also high quality distribution facilities which are
                  staffed by dedicated teams of the top of experts. We have good
                  years of quality experiences in this field.
                </p>
                <img
                  src="assets/images/about/singnture.png"
                  alt="singnture"
                  className="mr-30"
                />
                <a href="#footer" className="btn btn__primary btn__lg">
                  Contact Us
                </a>
              </div>
              {/* /.heading */}
            </div>
            {/* /.col-lg-5 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* /.About 1 */}
      {/* ========================= 
   Banner 2
    =========================  */}
      <section id="Banner2" className="banner bg-theme banner-2 p-80">
        <div className="container">
          <div className="row heading heading-2 mb-40">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <h2 className="heading__title text-center text-light">
                Delivering the Best Global Logistics Solutions.
              </h2>
            </div>
            {/* /.col-lg-5 */}
          </div>
          {/* /.row */}
          <div className="row text-center">
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="service-item">
                <div className="service__icon">
                  <i className="icon-air-freight" />
                </div>
                <div className="service__content">
                  <h4 className="service__title">Air Freight</h4>
                  <p className="service__desc">
                    Airfreight is fast-moving, challenging and constantly
                    changing – it’s the nature of the business. Around the globe
                    capacity and demand can change in the blink of an eye so
                    it’s essential to have a partner.
                  </p>
                </div>
              </div>
              {/* /.service-item */}
            </div>
            {/* /.col-lg-4 */}
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="service-item">
                <div className="service__icon">
                  <i className="icon-cargo-ship" />
                </div>
                <div className="service__content">
                  <h4 className="service__title">Ocean Freight</h4>
                  <p className="service__desc">
                    Our extensive and long-term relations with shipping lines
                    mean we can provide you with access to a global carrier
                    portfolio, covering major ports, with the best transit
                    times, fully flexible scheduling.
                  </p>
                </div>
              </div>
              {/* /.service-item */}
            </div>
            {/* /.col-lg-4 */}
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div className="service-item">
                <div className="service__icon">
                  <i className="icon-truck" />
                </div>
                <div className="service__content">
                  <h4 className="service__title">Road Freight</h4>
                  <p className="service__desc">
                    Using only quality carriers, means you benefit from improved
                    service levels, greater flexibility and time-definite
                    deliveries. Our expertise in transport management and
                    planning allows us to design.
                  </p>
                </div>
              </div>
              {/* /.service-item */}
            </div>
            {/* /.col-lg-4 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* /.Banner 2 */}
      {/* ========================
  Request Quote Tabs
    =========================== */}
    </>
  );
};

export default Content;
