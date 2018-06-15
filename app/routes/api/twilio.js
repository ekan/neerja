var express = require('express');
var router = express.Router();

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
