const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const photo = {
    id: 1,
    name: 'photo1',
    description: 'this is photo1',
  };
  res.send(photo);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
