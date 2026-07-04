export default function errorHandler(err, req, res, next) { // eslint-disable-line no-unused-vars
  console.error(err);
  const status = err.status || 500;
  res.status(status).json({
    message: status === 500 ? 'Something went wrong on our end.' : err.message,
  });
}
