require('dotenv').config();

const server = require('./serveur');

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Serveur is listening on port ${port}!`);
});
