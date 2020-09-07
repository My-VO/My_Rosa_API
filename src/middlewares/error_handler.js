module.exports = (error, request, response, next) => {
  const { title, description } = error;

  const status = error.status || 500;
  if (status === 500) {
    description = "Serveur cassé. Revenez plus tard.";
  }

  response.status(error.status).json({
    title,
    description,
  });
};
