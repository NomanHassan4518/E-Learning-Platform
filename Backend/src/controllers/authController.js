import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRECT, { expiresIn: "1d" });
};

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const isUserExit = await User.findOne({ email });

    if (isUserExit) {
      return res.status(409).json({ message: "User already exit" });
    }

    let isAdmin = email === "malikhassanhu55@gmail.com";

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      isAdmin,
    });

    return res.status(201).json({
      message: "User registered successfully",
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      token: generateToken(newUser._id),
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      return res.status(201).json({
        message: "Login successfully",
        id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else{
      return res.status(401).json({message:"Invalid email or password"})
    }
  } catch (error) {}
};
