export const errorHandler = (error, req, res, _next) => {
  console.error(error);
  res.status(500).json({
    message: error.message,
  });
};
