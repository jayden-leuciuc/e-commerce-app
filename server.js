const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

var app = express();
const PORT = process.env.PORT || 5000;

app.use(compression());

app.listen(PORT, function (err) {
  if (err) console.log('Error in server');
  console.log('Server started on port', PORT);
});

app.get('/', (req, res) => {
  res.json({ success: true });
});

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd',
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});
