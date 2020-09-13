// In order to implement back-end from firebase we need to:
// 1. firebase init
// 2. select fucntions
// 3. Select language (JS)
// 4. Yes for ESlint
// 5. Install npm dependencies

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQGCBBmLNNnOH7A03DN2qAUaX2vyOCYTYE4NlaEpGH9XeRE1linABsl21sTaa9rKPuFKu5GPpS8yETTotkTskCT003YAyHOxh"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment Request Recieved!!!", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-4d263/us-central1/api

// Emulate back-end server
// 1. firebase emulators:start
