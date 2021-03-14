const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: '/config.env' });
// mongo db connections
const DB = process.env.DATABASE;
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('connection successful');
}).catch((err) => console.log('no connection'));
// connection end

// middle ware section
const middleware = (req, res, next) => {
    console.log('hello my middleware');
    next();
}
// end
app.get('/', (req, res) => {
    res.send('this is index page from the server');
});
app.get('/Home', (req, res) => {
    res.send('this is Home page from the server');
});
app.get('/About', middleware, (req, res) => {
    console.log('hello my About');
    res.send('this is about page from the server');
});
app.get('/Singnup', (req, res) => {
    res.send('this is register page from the server');
});
app.get('/Signin', (req, res) => {
    res.send('this is login page from the server');
});
app.listen(3000, () => {
    console.log('server is runing on port no 3000');
})
