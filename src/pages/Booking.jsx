import React, { useState } from 'react';
import '../styles/Booking.css';

const Booking = () => {
  if (localStorage.getItem('token') === null) {
    window.location.href = '/login';
  }
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');
  const [roomType, setRoomType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Check-in date:', checkIn);
    console.log('Check-out date:', checkOut);
    console.log('Number of guests:', guests);
    console.log('Room type:', roomType);
    
    // Clear the form
    // setCheckIn('');
    // setCheckOut('');
    // setGuests('');
    // setRoomType('');

  };

  return (
    <div className="booking-container">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="checkIn">Check-in date:</label>
          <input
            type="date"
            id="checkIn"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="checkOut">Check-out date:</label>
          <input
            type="date"
            id="checkOut"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="guests">Number of guests:</label>
          <input
            type="number"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            min="1"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="roomType">Room type:</label>
          <select
            id="roomType"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            required
          >
            <option value="">Select a room type</option>
            <option value="standard">Standard</option>
            <option value="deluxe">Deluxe</option>
            <option value="suite">Suite</option>
          </select>
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default Booking;
