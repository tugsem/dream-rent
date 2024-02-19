import { createAsyncThunk } from '@reduxjs/toolkit';
import HouseAPI from '../houseAPI';

// Setting Actions and Reducers for the houses

const REMOVE_HOUSE = 'REMOVE_HOUSE';
const GET_HOUSES = 'GET_HOUSES';

const initialHouseArray = [];

const houseReducer = (state = initialHouseArray, action) => {
  switch (action.type) {
    case 'GET_HOUSES':
      return action.payload;
    case 'REMOVE_HOUSE/fulfilled':
      return [
        ...state.filter((house) => (house.id) !== action.payload),
      ];
    default:
      return state;
  }
};

// Setting up Action Creators

export const getAllHouses = (payload) => (
  {
    type: GET_HOUSES,
    payload,
  }
);

export const fetchHouses = createAsyncThunk(GET_HOUSES, async (get, { dispatch }) => {
  try {
    const response = await HouseAPI.fetchHouses();
    dispatch(getAllHouses(response));
  } catch (err) {
    dispatch({ type: 'GET_HOUSES_REJECTED', payload: err });
  }
});

export const deleteHouse = createAsyncThunk(REMOVE_HOUSE, async (id) => {
  await HouseAPI.deleteHouse(id);
  return id;
});

export default houseReducer;
