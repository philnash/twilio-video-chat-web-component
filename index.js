require('dotenv').load();
var express = require("express");
var twilio = require("twilio");
var AccessToken = twilio.AccessToken;
var ConversationsGrant = AccessToken.ConversationsGrant;

var app = express();

app.set("view options", { layout: false });
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
  res.render("index.html");
});

app.get("/token", function(req, res) {
  res.set('Content-Type', 'application/json');
  var token = new AccessToken(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_API_KEY,
    process.env.TWILIO_API_SECRET
  );
  if (req.query.identity) {
    token.identity = req.query.identity;
    var grant = new ConversationsGrant();
    grant.configurationProfileSid = process.env.TWILIO_CONFIGURATION_SID;
    token.addGrant(grant);
    res.send({
      token: token.toJwt()
    });
  } else {
    res.status(400).send(JSON.stringify({ error: "You must supply an identity." }));
  }
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Your app is listening on localhost:" + port);
});
