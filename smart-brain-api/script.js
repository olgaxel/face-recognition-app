const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/register.js');
const signin = require('./controllers/signin.js');
const profileId = require('./controllers/profileId.js');
const image = require('./controllers/image.js');

const db= knex({
    client: 'pg',
    connection: {
      connectionString : process.env.DATABASE_URL,
      ssl: true,
    }
  });

const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send("success");
})

app.post('/signin', signin.handleSignin(db, bcrypt));

app.post('/register', (req, res) => {register.handleRegister(req,res, db, bcrypt)});

app.get('/profile/:id', (req, res) => {profileId.handleProfileId(req,res, db)});

app.put('/image', (req, res) => {image.handleImage(req,res, db)});

app.post('/imageurl', (req,res) => {image.handleApiCall(req, res)});

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`app is running on port ${PORT}`);
})

console.log(PORT);


/* // Load hash from your password DB.
bcrypt.compare("bacon", hash, function(err, res) {
    // res == true
});
bcrypt.compare("veggies", hash, function(err, res) {
    // res = false
}); */
/*
/ -> res =this is working
/signin -> POST = success/failure
/register -> POST = user
/profile/:userId -> GET = user
/image --> PUT --> user
*/