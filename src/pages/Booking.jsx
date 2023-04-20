import React, { useEffect, useState } from "react";
import "../styles/Booking.css";

const Booking = () => {
  // if (localStorage.getItem('cred') === false) {
  //   window.location.href = '/login';
  // }
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  const [roomType, setRoomType] = useState("");
  const [phone, setPhone] = useState("");
  // if (room === 'standard') {
    //   setRoomType('standard');
    // }
  // else if (room === 'deluxe'){
  //   setRoomType('deluxe');
  // }
  // else if (room === 'suite') {
  //   setRoomType('suite');
  // }
  useEffect(() => {
    if (localStorage.getItem("cred") === false) {
      window.location.href = "/login";
    }
    
  }, []);
  useEffect(() => {
    if (roomType === "Deluxe") {
      setRoomType("Deluxe");
    } else if (roomType === "Superior") {
      setRoomType("Superior");
    } else if (roomType === "Executive") {
      setRoomType("Executive");

      }
  }, [roomType]);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        checkIn: checkIn,
        checkOut: checkOut,
        guests: guests,
        roomType: roomType,
        phone: phone,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    // Clear the form
    setCheckIn("");
    setCheckOut("");
    setGuests("");
    setRoomType("");
    setPhone("");
    // window.location.href = "/booking";
  };

  return (
    <div className="booking-container">
      <form className="form1" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="checkIn">Check-in date:</label>
          <input
            className="input"
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
            className="input"
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
            className="input"
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
            <option value="deluxe">Deluxe</option>
            <option value="standard">Superior</option>
            <option value="suite">Executive</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="phone">Your Phone No. :</label>
          <input
            className="input"
            type="number"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button className="button2" type="submit">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default Booking;
