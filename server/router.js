const express = require('express');
const router = express.Router();

// usage of router.get and app.get (to avoid clutter)
//  - https://stackoverflow.com/questions/28305120/differences-between-express-router-and-app-get

router.get('/', (req, res) => {
  res.send('server is up and running');
});

module.exports = router;
