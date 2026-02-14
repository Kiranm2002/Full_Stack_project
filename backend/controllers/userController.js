const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res) => {
  try {
    const {
      fullname,
      email,
      phone,
      gender,
      dob,
      address,
      country,
      password,
    } = req.body;

    // 🔍 Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // 🔐 Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullname,
      email,
      phone,
      gender,
      dob,
      address,
      country,
      password: hashedPassword, // store hashed password
      profilePhoto: req.file ? req.file.filename : null,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
