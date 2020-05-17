const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('flash')

const passportConfig = require('./passport-config')

passportConfig(passport, username => {
    fakeDatabase.find(user  => user.username === username);
})

fakeDatabase = [];

app.use(express.urlencoded({extended: false}))

app.set('view-engine', 'ejs');

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/register', (req, res) => {
    res.render('register.ejs');
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.post('/register', async (req, res) => {
    try {
        const securePassword = await bcrypt.hash(req.body.password, 10);
        fakeDatabase.push({
            id: Date.now().toString(),
            name: req.body.username, 
            password: securePassword
        });
        res.redirect('/login');
    } catch (e) {
        res.redirect('/register');
    }

    console.log(fakeDatabase);

});