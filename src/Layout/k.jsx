// // Book a room after checking availability
// router.post('/:roomId/book', async (req, res) => {
    // const { roomId } = req.params;
    // const { checkIn, checkOut, userId } = req.body;
  
//     try {
//       await client.connect();
//       const db = client.db('your_db_name');
//       const bookings = db.collection('bookings');
  
//       // 1. Check availability again (avoid race condition)
//       const existingBooking = await bookings.findOne({
//         roomId: new ObjectId(roomId),
//         $or: [
//           { checkIn: { $lte: new Date(checkIn) }, checkOut: { $gt: new Date(checkIn) } },
//           { checkIn: { $lt: new Date(checkOut) }, checkOut: { $gte: new Date(checkOut) } },
//           { checkIn: { $gte: new Date(checkIn) }, checkOut: { $lte: new Date(checkOut) } }
//         ]
//       });
  
    //   if (existingBooking) {
    //     return res.status(400).json({ error: "Room not available for these dates!" });
    //   }
  
//       // 2. If available, create booking
//       const newBooking = {
//         roomId: new ObjectId(roomId),
//         userId: new ObjectId(userId),
//         checkIn: new Date(checkIn),
//         checkOut: new Date(checkOut),
//         createdAt: new Date()
//       };
  
//       await bookings.insertOne(newBooking);
//       res.json({ success: true });
//     } catch (err) {
//       res.status(500).json({ error: "Server error" });
//     } finally {
//       await client.close();
//     }
//   });