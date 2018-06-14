var express = require('express');
var router = express.Router();

const MessagingResponse = require('twilio').twiml.MessagingResponse;

/* POST /api/sms listing. */

router.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
})

module.exports = router;
