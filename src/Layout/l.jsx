// import { useState } from 'react';
// import axios from 'axios';

// function BookingForm({ roomId }) {
//   const [checkIn, setCheckIn] = useState(null);
//   const [checkOut, setCheckOut] = useState(null);
//   const [isAvailable, setIsAvailable] = useState(false);

//   const checkAvailability = async () => {
//     const res = await axios.post(`/api/rooms/${roomId}/check-availability`, {
//       checkIn,
//       checkOut,
//     });
//     setIsAvailable(res.data.available);
//   };

//   const handleBooking = async () => {
//     if (!isAvailable) return alert("Room not available!");
//     await axios.post(`/api/rooms/${roomId}/book`, { checkIn, checkOut, userId });
//     alert("Booked successfully!");
//   };

//   return (
//     <div>
//       <input type="date" onChange={(e) => setCheckIn(e.target.value)} />
//       <input type="date" onChange={(e) => setCheckOut(e.target.value)} />
//       <button onClick={checkAvailability}>Check Availability</button>
//       <button onClick={handleBooking} disabled={!isAvailable}>Book Now</button>
//     </div>
//   );
// }