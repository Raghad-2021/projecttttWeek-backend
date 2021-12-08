const userModel = require("../../db/moduls/userModel");
// تسوي تشفير للباسوورد
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
//////
const logIn = async (req, res) => {
  let { email, pass } = req.body;
  try {
    // userModel اذا بيطلع وحده ويبحث عنها ب 
    const user = await userModel.findOne({ email: email });
    if (user) {
      // يقارن بين باسوورد العادي والمشفر 
      const check = await bcrypt.compare(pass, user.pass);
      if (check === true) {
        const payload = { userId: user._id, userName: user.name };
        // payload اوبجكت فيه userid , userName
        // payload يعني مشفر
        const token = jwt.sign(payload, "ABC");
         // نرسل token  ل يوزر
        res.status(200).json({ token });
      } else {
        res.status(403).json("wrong PassWord!");
      }
    } else {
      res.status(404).json("wrong Email!");
    }
  } catch (error) {
    res.send(error);
  }
};
module.exports = { logIn };
