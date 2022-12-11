require("dotenv").config();
const express = require("express");
const { connection } = require("../config/db");
const { userRouter } = require("../Routes/User.route");
const { todoRouter } = require("../Routes/Todos.route");
const { authenticate } = require("../Middleware/Auth");

const cors = require("cors");
const PORT = process.env.PORT;
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);
app.get("/", (req, res) => {
  res.send("This Is Home Page...");
});

app.use("/", userRouter);

app.use(authenticate);
app.use("/todo", todoRouter);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connect To Db Successfully !");
  } catch (err) {
    console.log(err);
  }
  console.log(`Listing on port ${PORT}`);
});

//jwt.js
// const jwt = require('jsonwebtoken');
// const secret = 'supersecretkey';

// const generateToken = (payload) => {
//     return jwt.sign(payload, secret, { expiresIn: '1h'});
// }

// const verifyToken = (token) => {
//     return jwt.verify(token, secret);
// }

// module.exports = {
//     generateToken,
//     verifyToken
// }

// authorize.js;
// const jwt = require('../jwt')
// const authorize = (req, res, next) => {
//     const token = req.headers['authorization'];

//     if(token) {
//         const payload = jwt.verifyToken(token);
//         if(payload) {
//             req.user = payload;
//             next();
//         } else {
//             res.status(401).json({
//                 message: 'Unauthorized'
//             });
//         }
//     } else {
//         res.status(401).json({
//             message: 'Unauthorized'
//         });
//     }
// }

// module.exports = authorize;

//  token.js;
// const jwt = require('../jwt');
// const generateToken = (req, res) => {
//     const payload = {
//         userId: req.user.id,
//         username: req.user.username
//     };
//     const token = jwt.generateToken(payload);
//     res.json({
//         token
//     });
// }

// module.exports = generateToken;

// auth.js;
// const jwt = require('../jwt');
// const verifyToken = (req, res, next) => {
//     const token = req.headers['authorization'];
//     if(token) {
//         const payload = jwt.verifyToken(token);
//         if(payload) {
//             req.user = payload;
//             next();
//         } else {
//             res.status(401).json({
//                 message: 'Unauthorized'
//             });
//         }
//     } else {
//         res.status(401).json({
//             message: 'Unauthorized'
//         });
//     }
// }

// module.exports = verifyToken;

//homepage route
// app.use('/', (req, res, next) => {
//     if(req.path === '/') {
//         next();
//     } else {
//         verifyToken(req, res, next);
//     }
// });
