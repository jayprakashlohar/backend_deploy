const monggose = require("mongoose");
require("dotenv").config();

const connection = monggose.connect(process.env.DB_URL);

module.exports = { connection };
