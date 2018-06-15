var express = require('express');
var router = express.Router();

const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

/**
 * NodeJS Module dependencies.
 */
const { Readable } = require('stream');

/**
 * Connect Mongo Driver to MongoDB.
 */
let db;
MongoClient.connect('mongodb://localhost/twilioDB', (err, database) => {
  if (err) {
    console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
    process.exit(1);
  }
  db = database;
});

// const twilio = require('twilio')
// var config = require('../config');
// var client = twilio(config.accountSid, config.authToken);

const MessagingResponse = require('twilio').twiml.MessagingResponse;

/* POST /api/sms listing. */

router.post('/sms', (req, res) => {
  // Start our TwiML response.
  const twiml = new MessagingResponse();

  // Add a text message.
  const msg = twiml.message('Check out this sweet owl!');

  // Add a picture message.
  msg.media('https://demo.twilio.com/owl.png');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
})

module.exports = router;
