const userModel = require("../../db/moduls/userModel");
// تسوي تشفير للباسوورد
const bcrypt = require("bcrypt");
const addUserSinUp = async (req, res) => {
  // نرسل الاسم والايميل والباسورد من البودي
  let { name, email, pass } = req.body;
  try {
    // bcrypt.hash هو الي يشفرالباسورد
    pass = await bcrypt.hash(pass, 10);
    const newUser = new userModel({
      name,
      email,
      pass,
    });
    const result = await newUser.save();
    res.status(201).json(result);
  } catch (error) {
    res.send(error);
  }
};
module.exports = { addUserSinUp };
