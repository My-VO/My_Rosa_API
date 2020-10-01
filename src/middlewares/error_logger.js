module.exports = (error, request, response, next) => {
  console.error(`${error.name}\n  ${error.description}`);

  console.error("error : ", error);
  next(error);
};
