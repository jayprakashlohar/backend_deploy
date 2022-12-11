const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];
  if (token) {
    const decoded = jwt.verify(token, "hush");
    if (decoded) {
      const todoID = decoded.todoID;
      req.body.todoID = todoID;
      next();
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};
module.exports = { authenticate };
