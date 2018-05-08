const PORT = process.env.PORT || 3000;
const environment = process.env.ENVIRONMENT || 'development';
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const knexConfig = require('./knexfile')[environment];
const knex = require('knex')({ debug: true, ...knexConfig });

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api', (req, res) => {
  console.log('hello world');
  res.send('hello world');
});

// app.('/api/search', (req, res) => {
//   console.log('HITTING SEARCH WOOT!', req);
//   res.json({
//     data: 'blah'
//   });
// });

app.post('/api/search', (req, res) => {
  console.log('req.body', req.body);
  knex
    .raw(`SELECT * FROM properties WHERE street_address='${req.body.address}'`)
    .then(data => {
      res.json(data.rows);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
