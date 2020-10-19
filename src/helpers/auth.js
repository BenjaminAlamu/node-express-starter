const jwt = require("jsonwebtoken");

module.exports = {
  hash(password, salt = 10) {
    return bycrpt.hashSync(password, salt);
  },
  comparePassword(password, hash) {
    return bycrpt.compareSync(password, hash);
  },
  signToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET_KEY);
  },
  decodeToken(payload) {
    return jwt.decode(payload, process.env.JWT_SECRET_KEY);
  },
};
