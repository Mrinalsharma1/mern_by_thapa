const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// mongo db connections
const DB = 'mongodb+srv://mernstack:mrinal@cluster0.qcfbk.mongodb.net/MERN_THAPA?retryWrites=true&w=majority';
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).catch((err) => console.log('no connection'));
// connection end


const User = require('../model/userschema');

router.get('/Home', (req, res) => {
    res.send('this is Home page from the server in router');
});

// using promises

// router.post('/register', (req, res) => {
//     const { name, email, phone, work, password, cpassword } = req.body;

//     if (!name || !email || !phone || !work || !password || !cpassword) {
//         return res.status(422).json({ error: "plse fill the form first" });
//     }
//     
//     User.findOne({ email: email }) && User.findOne({ phone: phone })
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: "email allready exist" });
//             }
//             else {
//                 return res.status(422).json({ error: "phone allready exist" });
//             }
//             const user = new User({ name, email, phone, work, password, cpassword });
//             user.save().then(() => {
//                 res.status(201).json({ message: "user registerd successfully" });
//             }).catch((err) => res.status(500).json({ error: "faild to register" }));

//         }).catch(err => { console.log(err); });
// })

// with async await
router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "plse fill the form first" });
    }
    try {
        const emailExist = await User.findOne({ email: email })
        const phoneExist = await User.findOne({ phone: phone })
        if (emailExist) {
            return res.status(422).json({ error: "email allready exist" });
        }
        else if (phoneExist) {
            return res.status(422).json({ error: "phone allready exist" });
        }
        else if (password != cpassword) {
            return res.status(422).json({ error: "enter valid password" });
        } else {
            const user = new User({ name, email, phone, work, password, cpassword });
            // we are  hash our password in here after save in data base
            const userregister = await user.save();
            if (userregister) {
                res.status(201).json({ message: "user registerd successfully" });
            } else {
                res.status(500).json({ error: "faild to register" });
            }
        }

    } catch (err) {
        console.log(err);
    }
})

// signin page
router.post('/signin', async (req, res) => {
    // console.log(req.body);
    // req.json({ message: "awsome" });
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ message: "plse fill the box" })
        }

        const tusername = await User.findOne({ email: email });
        console.log(tusername);
        if (!tusername) {
            res.status(200).json({ error: "invalid error" });
        }
        else {
            res.status(400).json({ message: "user signin successfully" });
        }
    } catch (err) {
        console.log(err);
    }
})
module.exports = router;