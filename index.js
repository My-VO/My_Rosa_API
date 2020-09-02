const express = require('express');

const app = express();

app.get('/', (request, reponse) => {
  reponse.send('hello');
  process.exit(1);
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
