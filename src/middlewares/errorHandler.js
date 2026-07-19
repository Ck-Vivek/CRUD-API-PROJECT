const errorHandler = (err, req, res, next) => {
  const isDuplicateEmail = err.code === 11000 && err.keyPattern?.email;
  const statusCode = isDuplicateEmail ? 409 : err.statusCode || 500;
  const message = isDuplicateEmail
    ? "A user with this email already exists."
    : err.message || "Internal server error";

  res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
  });
};
export default errorHandler;
