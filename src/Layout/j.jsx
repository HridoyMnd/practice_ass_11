// const { MongoClient } = require('mongodb');
// const client = new MongoClient('your_mongodb_uri');

// // Check if a room is available for given dates
// router.post('/:roomId/check-availability', async (req, res) => {
//   const { roomId } = req.params;
//   const { checkIn, checkOut } = req.body;

//   try {
//     await client.connect();
//     const db = client.db('your_db_name');
//     const bookings = db.collection('bookings');

//     // Check for overlapping bookings
//     const existingBooking = await bookings.findOne({
//       roomId: new ObjectId(roomId),
//       $or: [
//         // Case 1: New checkIn is inside an existing booking period
//         { checkIn: { $lte: new Date(checkIn) }, checkOut: { $gt: new Date(checkIn) } },
//         // Case 2: New checkOut is inside an existing booking period
//         { checkIn: { $lt: new Date(checkOut) }, checkOut: { $gte: new Date(checkOut) } },
//         // Case 3: New booking fully covers an existing booking
//         { checkIn: { $gte: new Date(checkIn) }, checkOut: { $lte: new Date(checkOut) } }
//       ]
//     });

//     res.json({ available: !existingBooking });
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   } finally {
//     await client.close();
//   }
// });