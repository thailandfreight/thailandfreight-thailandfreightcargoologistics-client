const Track = () => {
  return (
    <>
      <div id="track"></div>
      <section
        id="trackOrder"
        className="request-quote request-quote-tabs p-80"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="request__form">
                <nav className="nav nav-tabs">
                  <a
                    className="nav__link active"
                    data-toggle="tab"
                    href="index.html#track"
                  >
                    Track &amp; Trace
                  </a>
                </nav>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="track">
                    <div className="request-quote-panel">
                      <div className="request__form-body">
                        <form
                          action="https://globalgrandlogistics.com/index.php"
                          method="post"
                        >
                          <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                              <h5>Track Your Shipment</h5>
                              <div className="form-group">
                                <label>Tracking Number</label>
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="trackingid"
                                    className="form-control"
                                    placeholder="Tracking Number"
                                  />
                                </div>
                              </div>
                            </div>
                            {/* /.col-lg-12 */}
                            <div className="col-sm-12 col-md-12 col-lg-12">
                              <input
                                type="submit"
                                name="tracknow"
                                defaultValue="Track Now"
                                className="btn btn__secondary btn__block"
                              />
                            </div>
                            {/* /.col-lg-12 */}
                          </div>
                        </form>
                      </div>
                      {/* /.request__form-body */}
                      <div className="widget widget-download bg-theme">
                        <div className="widget__content">
                          <h5>
                            Quick <br />
                            Tracking Service
                          </h5>
                          <p>
                            Don't be left out, you can always know the status
                            and present location of your shipment whenever you
                            want to.
                            <br />
                            *Please enter your tracking ID/number below. Kindly
                            contact support if you have lost it or you can't
                            remember.
                          </p>
                        </div>
                        {/* /.widget__content */}
                      </div>
                      {/* /.widget-download */}
                    </div>
                    {/* /.request-quote-panel*/}
                  </div>
                  {/* /.tab */}
                </div>
                {/* /.tab-content */}
              </div>
              {/* /.request-form */}
            </div>
            {/* /.col-lg-12 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
    </>
  );
};

export default Track;
