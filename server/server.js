const PORT = process.env.PORT || 3000;
const express = require('express');

const app = express();

app.get('/search', (req, res) => {
  console.log('HITTING SEARCH WOOT!', req);
  res.send('OHAI');
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
