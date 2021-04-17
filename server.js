if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({path:'practice-node-payment-app/.env'});                       
}
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;
const express = require('express');
const app = express();
const fs = require('fs');

//To embed serverside code inside our front-end HTML pages.
//My front end will be using EJS in order to render the views.


app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.static('public'))



//ROUTE
app.get('/store', function(req, res) {
    fs.readFile('items.json', function(error, data) {
      if (error) {
        res.status(500).end()
      } else {
        res.render('store.ejs', {
          stripePublicKey: stripePublicKey,
          items: JSON.parse(data)
        })
      }
    })
  })

app.listen(4000);