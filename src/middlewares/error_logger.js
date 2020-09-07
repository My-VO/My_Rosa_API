module.exports = (error, request, reponse, next) => {
  console.log(`${error.name}\n ${error.description}`);
  next(error);
};
