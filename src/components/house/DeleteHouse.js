import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';
import './deletehouse.css';
// import { API_URL } from '../../api/config';
import { deleteHouse, fetchHouses } from '../../redux/house/houses';

const DeleteHouse = () => {
  const houses = useSelector((state) => state.houses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  const deleteHouseFromState = (id) => {
    dispatch(deleteHouse(id));
  };

  return (
    <div className="delete-house-container">
      { houses.map((house) => (
        <div className="card" key={house.id}>
          <img src={house.image_path} alt="house" className="delete-house-img" />
          <div className="card-body">
            <h5 className="card-title">
              Address:
              {house.address}
            </h5>
            <p className="card-text">
              House Type:
              {house.house_type}
            </p>
            <p className="card-text">
              <small className="text-muted">
                Rooms :
                {house.rooms}
              </small>
            </p>
            <p className="card-text">
              <small className="text-muted">
                Size:
                {house.size}
              </small>
            </p>
            <button type="button" className="delete-btn" onClick={() => deleteHouseFromState(house.id)}>Delete</button>

          </div>

        </div>

      ))}

    </div>

  );
};

export default DeleteHouse;
