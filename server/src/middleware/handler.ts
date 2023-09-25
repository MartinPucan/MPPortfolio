export const notFoundMiddleware = (req, res) =>
  res.status(404).send('Route does not exists');

export const errorHandlerMiddleware = (err, req, res) => {
  console.log(err);
  res.status(500).json({ msg: 'there was an error' });
};
