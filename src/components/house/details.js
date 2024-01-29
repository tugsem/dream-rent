import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_URL } from '../../api/config';

function Details() {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}houses/${id}`)
      .then((res) => res.json())
      .then(
        (data) => {
          setDetail(data);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        },
      );
  }, [id]);
  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (detail) {
    return (
      <div className="container">
        <div className="row d-flex p-5">
          <div className="col-sm-8">
            <img src={detail.image_path} loading="lazy" className="thumbnail img-responsive img-fluid rounded" alt="house comes here" />
          </div>
          <div className="col-sm-4">
            <p className="fs-3 text-end text-break">{detail.address}</p>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td>House Type</td>
                  <td>{detail.house_type}</td>
                </tr>
                <tr>
                  <td>Balcony</td>
                  <td>{String(detail.balcony)}</td>
                </tr>
                <tr>
                  <td>Rooms</td>
                  <td>{detail.rooms}</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>
                    {detail.size}
                    &#13217;
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="d-grid gap-2 mt-5">
              <a href={`/reservation-form/${id}`} type="submit" className="btn btn-success">Reserve</a>
            </div>
          </div>
        </div>
        <div className="row">
          <Link to="/">
            <button type="submit" className="btn btn-success">Back</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Details;
