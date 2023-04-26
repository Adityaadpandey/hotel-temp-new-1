import React, { useEffect, useState } from "react";
import moment from "moment";
import "../styles/Booking.css";

const Booking = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  // const [isBooked, setIsBooked] = useState();
  const [guests, setGuests] = useState("");
  const [roomType, setRoomType] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (localStorage.getItem("cred") === false) {
      window.location.href = "/login";
    }
  }, []);
  useEffect(() => {
    const room = localStorage.getItem("room");
    if (room === "Deluxe") {
      setRoomType("Deluxe");
    } else if (room === "Superior") {
      setRoomType("Superior");
    } else if (room === "Executive") {
      setRoomType("Executive");
    }
  }, []);

  const handleSubmit = (e) => {
    const cred = localStorage.getItem("cred");
    var date = moment().utcOffset("+05:30").format("YYYY-MM-DD hh:mm:ss a");
    console.log(date);
    e.preventDefault();
    fetch("https://my-hotel-bacl.onrender.com/api", {
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
        cred: cred,
        date: date,
      }),
    })
      .then((res) => res.json())
      // .then(setIsBooked(true))
      .then((data) => console.log(data))
      .then((window.location.href = "/final"));
    // .then(console.log(date))

    // Clear the form
    setCheckIn("");
    setCheckOut("");
    setGuests("");
    setRoomType("");
    setPhone("");
    // window.location.href = "/booking";
  };

  return (
    <>
      <div className="king-con">
        {/* {isBooked ? ( */}
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
                <option value="Deluxe">Deluxe</option>
                <option value="Superior">Superior</option>
                <option value="Executive">Executive</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="phone">Your Phone No. :</label>
              <input
                className="input"
                type="phone"
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
        {/* ) : (
            <div className="booking-container">
              <h2>Booking sucessFull</h2>
              </div>
        )} */}
      </div>
    </>
  );
};

export default Booking;
