import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

/// @desc   Auth user & get token
/// @route   POST /api/users/login
/// @access   public
const authUser = expressAsyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      username: user.username,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid Login credentials');
  }
});

/// @desc   Register new User
/// @route   POST /api/users/Register
/// @access   public
const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, username, password } = req.body;
  const userExist = await User.findOne({ username });
  if (userExist) {
    res.status(400);
    throw new Error('user already exist');
  }
  const user = await User.create({
    name,
    username,
    password,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      username: user.username,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

/// @desc   Get User Profile
/// @route   POST /api/users/Profile
/// @access   private
const getUserProfile = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      username: user.username,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

export { authUser, getUserProfile, registerUser };
