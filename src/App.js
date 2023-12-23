import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AddHouse from './components/house/AddHouse';
import HouseList from './components/house/HouseList';
import MyReservations from './components/reservations/MyReservations';
import ReservationForm from './components/reservations/ReservationForm';
import Sidebar from './components/sidebar/Sidebar';
import DeleteHouse from './components/house/DeleteHouse';
import './App.css';
import Details from './components/house/details';
import Reserves from './components/reservations/reserves';
import ReserveList from './components/reservations/reservelist';
import Login from './components/login/Login';
import { isLogged } from './api/config';
import Logout from './components/login/Logout';
import Hamburger from './components/sidebar/Hamburger';

const App = () => {
  const location = useLocation();
  useEffect(() => {
    if (!isLogged && window.location.pathname !== '/login') {
      window.location = '/login';
    }
  }, [location]);

  return (
    <div className="App">
      <div className="hamburger">
        <Hamburger />
      </div>
      <div className="sidebar-container desktop">
        <Sidebar />
      </div>
      <div className="main-container">
        <Routes>
          <Route path="/" exact="true" element={<HouseList />} />
          <Route path="/houses/:id" element={<Details />} />
          <Route path="/reserves" element={<Reserves />} />
          <Route path="/add-house" element={<AddHouse />} />
          <Route path="/reservelist" element={<ReserveList />} />
          <Route path="/my-reservations" element={<MyReservations />} />
          <Route path="/delete-house" element={<DeleteHouse />} />
          <Route path="/reservation-form/:houseId" element={<ReservationForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
