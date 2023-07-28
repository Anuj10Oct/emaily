const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({ hello: 'Welcome!' });
});

//Dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(` Sever is listening on ${PORT} successfully!`)
);
