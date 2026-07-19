import User from "../models/user.js";

const handleresponse = (res, statusCode, statusText, data) => {
  return res.status(statusCode).json({ status: statusText, data });
};
//get all users
export const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find();
    handleresponse(res, 200, "success", users);
  } catch (error) {
    next(error);
  }
};
//create a user
export const createUser = async (req, res, next) => {
  try {
    const { name, email } = req.body ?? {};
    if (!name || !email) {
      const error = new Error("name and email are required. Send JSON with Content-Type: application/json.");
      error.statusCode = 400;
      throw error;
    }

    const user = await User.create({ name, email });
    handleresponse(res, 201, "created", user);
  } catch (error) {
    next(error);
  }
};
//update a user

export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }
    handleresponse(res, 200, "success", updatedUser);
  } catch (error) {
    next(error);
  }
};

//delete a user
export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.findByIdAndDelete(id);
    if (!deleteUser) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }
    handleresponse(res, 200, "success", {
      message: "User deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
