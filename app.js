const express = require('express');

const router = express.Router();
const app = express();

router.get('/', (req, res) => {
    res.send('123');
});

app.use('/', router);

module.exports = app;
