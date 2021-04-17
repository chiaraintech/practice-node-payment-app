if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load()                        //It will load all the vars in my env file if I am NOT in prod.
}
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;
const express = require('express');
const app = express();

//To embed serverside code inside our front-end HTML pages.
//My front end will be using EJS in order to render the views.
app.set('view engine', 'ejs');
//I need to tell the app where all the static front end facing files are.
app.use(express.static('public'));

app.listen(4000);