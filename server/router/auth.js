const express = require('express');
const router = express.Router();

router.get('/Home', (req, res) => {
    res.send('this is Home page from the server in router');
});

router.post('/register', (req, res) => {
    console.log(req.body);
    // res.send("mera router page");
    res.json({ message: req.body });
})

module.exports = router;