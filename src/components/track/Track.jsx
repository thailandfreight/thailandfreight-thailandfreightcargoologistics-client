import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import TracksRepository from './TrackRepository';

const Track = () => {
  const [trackerId, setTrackerId] = useState('');
  const [isTrack, setIsTrack] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsTrack(true);
      const res = await TracksRepository.singleProduct(trackerId);
      setIsTrack(false);

      if (res.data.trackerId === trackerId) {
        setIsShow(true);
        history.push('./tracker', { data: res.data, isShow: true });
      }
    } catch (err) {
      setIsTrack(false);
      alert('Invalid tracker ID');
    }
  };

  return (
    <>
      <div id="track"></div>
      {/* {isShow ? ( */}
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
                        <form>
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
                                    onChange={(e) =>
                                      setTrackerId(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                              <button
                                onClick={handleSubmit}
                                className="btn btn__secondary btn__block"
                              >
                                {isTrack ? 'Submitting...' : 'Submit'}
                              </button>
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
      {/* ) : (
        <div>Input a valid Tracking Number</div>
      )} */}
    </>
  );
};

export default Track;
