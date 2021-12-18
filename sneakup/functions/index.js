const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JJbgbSEEuJgb3tp0VcAZPfAFDslXXv5yRqfaZycevlZ3O2cEHtRHmq11oN1sNYAx01oRJI8Ogc25es7Qmvht85q00zn3zKrn5"
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.get("/", (request, response) => response.status(200).send("hello"));
app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
  console.log("Payment request received!amt>>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "Rs",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
exports.api = functions.https.onRequest(app);
// (http://localhost:5001/sneakup-28d6e/us-central1/api)
