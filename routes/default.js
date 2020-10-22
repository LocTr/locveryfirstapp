const express = require('express');
const router = express.Router();

//default route
router.get('/', (req, res) => {
    res.send('Welcome to my api');
})


module.exports = router;