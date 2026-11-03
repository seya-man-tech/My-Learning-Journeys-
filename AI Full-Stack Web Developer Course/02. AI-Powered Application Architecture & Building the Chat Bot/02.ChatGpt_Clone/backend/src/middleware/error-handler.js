

export const errorHandler = (err, req, res, next) => {

  console.error("SERVER ERROR CAUGHT:", err);

  const statusCode = err.statusCode || err.status || 500;
  const message = err.message || "Something went wrong, try again later";

  return res.status(statusCode).json({
    success: false,
    message: message,
  });
};