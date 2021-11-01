import { Link, useLocation, Redirect } from 'react-router-dom';
import { CardGiftcard } from '@material-ui/icons';
import './tracker.css';

const Tracker = () => {
  const location = useLocation();
  const data = location.state;
  console.log('location data', data);

  const {
    trackerId,
    start,
    end,
    item,
    packageForm,
    weight,
    quantity,
    mode,
    name,
    addressFrom,
    addressTo
  } = data?.data || {};

  // console.log('status ||', status[0]);
  const status = data?.data.status[0];
  console.log('tracker', status);

  if (status === 'processing') {
    var msg = 'Processing';
    var color = 'orange';
  } else if (status === 'transit') {
    var msg = 'In Transit';
    var color = 'blue';
  } else if (status === 'ready') {
    var msg = 'Ready for Pickup';
    var color = 'green';
  } else {
    var msg = 'NILL';
  }

  return (
    <>
      {data?.isShow ? (
        <div className="tracker">
          {/* start 1 */}
          <div className="bg-img">
            <section
              id="page-title"
              className="page-title bg-overlay bg-parallax"
            >
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <h1 className="pagetitle__heading">
                      Tracking No.: {trackerId}
                      <br />
                      <span
                        style={{ textTransform: 'uppercase', fontSize: 24 }}
                      >
                        (Status: {msg} )
                      </span>
                    </h1>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <Link to="/">Home</Link>
                        </li>
                        <li className="breadcrumb-item active">Track</li>
                      </ol>
                    </nav>
                  </div>
                  {/* /.col-lg-12 */}
                </div>
                {/* /.row */}
              </div>
              {/* /.container */}
            </section>
          </div>
          {/* /.page-title */}

          {/* end 1 */}
          {/* start */}
          <section id="trackShipmeent" className="track-shipment pb-60">
            <div className="container">
              <div
                className="trackerStatus"
                style={{ backgroundColor: `${color}` }}
              >
                Status: {msg}
                {color === 'green' ? (
                  <CardGiftcard className="delivered" />
                ) : (
                  <svg className="spinner" viewBox="0 0 50 50">
                    <circle
                      class="path"
                      cx="25"
                      cy="25"
                      r="20"
                      fill="none"
                      stroke-width="5"
                    ></circle>
                  </svg>
                )}
              </div>
              <div className="row">
                <div className="col-md-6">
                  <h4>SHIPMENT DATES</h4>
                  <p>
                    <strong>Start Date:</strong>
                    <br />
                    {start}
                  </p>
                  <p>
                    <strong>Scheduled Delivery Date:</strong>
                    <br />
                    {end}
                  </p>
                </div>
                <div className="col-md-6">
                  <h4>DESTINATION</h4>
                  <p>
                    <strong>Name of Receiver:</strong>
                    <br />
                    {name}{' '}
                  </p>
                  <p>
                    <strong>Address from:</strong>
                    <br />
                    {addressFrom}
                  </p>
                  <p>
                    <strong>Final Destination Address:</strong>
                    <br />
                    {addressTo}{' '}
                  </p>
                </div>
              </div>
              {/* end row */}
              <div className="row">
                <div className="col-md-12">
                  <h4>SHIPMENT FACTS</h4>
                </div>
                <div className="col-md-3">
                  <p>
                    <strong>Package:</strong>
                    <br />
                    {packageForm}{' '}
                  </p>
                </div>
                <div className="col-md-3">
                  <p>
                    <strong>Weight:</strong>
                    <br />
                    {weight}
                  </p>
                </div>
                <div className="col-md-3">
                  <p>
                    <strong>Quantity:</strong>
                    <br />
                    {quantity}
                  </p>
                </div>
                <div className="col-md-3">
                  <p>
                    <strong>Mode of Delivery:</strong>
                    <br />
                    {mode}{' '}
                  </p>
                </div>
                <div className="col-md-3">
                  <p>
                    <strong>Full Name of Package:</strong>
                    <br />
                    {item}
                  </p>
                </div>
              </div>
              {/* end row */}
              {/* <div className="row">
            <div className="col-md-12">
              <h4 style={{ marginTop: 20 }}>HISTORY</h4>
            </div>
            <div className="col-md-12">
              <table style={{ width: '100%' }}>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Location</th>
                    <th>Comment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2021-07-01</td>
                    <td>12:08AM</td>
                    <td>Ukraine </td>
                    <td>
                      Hola, estamos muy decepcionados con el aeropuerto del país
                      porque no pudieron dejarnos entrar porque estaban en
                      huelga la última vez que intentamos traerles la caja,
                      ahora estamos en Ucrania e iremos a Nueva Zelanda desde
                      aquí. por favor venga a Ucran
                    </td>
                  </tr>
                  <tr>
                    <td>2021-05-17</td>
                    <td>10:51 PM</td>
                    <td>Brazil </td>
                    <td>
                      We are happy to inform you about the importance of your
                      package, we have arrived in Brazil and due to border
                      restrictions, we must wait for drug control and some other
                      searches, we will go to your country immediately, we
                      finish the process. We will con
                    </td>
                  </tr>
                  <tr>
                    <td>2021-05-17</td>
                    <td>10:51 PM</td>
                    <td>Brazil </td>
                    <td>
                      We are glad to inform on the importance of your package,
                      we have arrived at Brazil and Due to there border
                      restrictions we are to wait for drug check and someone
                      other searches , we will be heading to your country
                      immediately we are done with the process,
                    </td>
                  </tr>
                  <tr>
                    <td>2021-05-15</td>
                    <td>4:36AM</td>
                    <td>Tunisia</td>
                    <td>
                      your package box just arrived at our station in Tunisia,
                      we will be moving to our next location if we have
                      confirmed your Delivery payment.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> */}
              {/* end row */}
            </div>
            {/* /.container */}
          </section>
          {/* /.Track Shipmeent */}

          {/* end */}
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default Tracker;
