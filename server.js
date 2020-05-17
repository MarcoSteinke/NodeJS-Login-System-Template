const express = require('express')
const app = express()
const bcrypt = require('bcrypt')


fakeDatabase = [];

app.use(express.urlencoded({extended: false}))

app.set('view-engine', 'ejs');

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});

app.get('/', (req, res) => {
    res.render('index.ejs', {name: "Marco"});
});

app.get('/register', (req, res) => {
    res.render('register.ejs', {name: "Marco"});
});

app.get('/login', (req, res) => {
    res.render('login.ejs', {name: "Marco"});
});

app.post('/register', async (req, res) => {
    try {
        const securePassword = bcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now().toString(),
            name: req.body.name, 
            password: securePassword});
    } catch {
        
    }
});