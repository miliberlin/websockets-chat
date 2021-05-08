const router = require("express").Router();
const authRoutes = require("./auth");
const User = require('../models/User');
const Message = require('../models/Message');

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// not sure if we need this 👇

// router.get("/chat", (req, res, next) => {
//   // find all messages and send them
//   Message.find('')
//   .then((messages) => {
//     res.send(messages)
//   })
//   .catch(err => next(err))
// });

// router.post('/chat', (req, res, next) => {
//   // receive incoming message
//   const { message } = req.body;
//   Message.create({
//     message,
//     // created_by: 
//   })
//   .then(() => {
//     io.emit('message', data);
//   })
// })

router.use("/auth", authRoutes);

module.exports = router;
