# Twilio Video Chat Web Component [Deprecated]

An example application that turns a [Twilio Video](https://www.twilio.com/video) chat into a Web Component.

## _301 redirect_

_This project was built with an old, deprecated version of the Twilio Video SDK. I recommend you check out the latest [Twilio Video Quickstart](https://github.com/twilio/video-quickstart-js) to see how to build with Twilio Video._

## Setup

### Clone the application

Start by cloning the application from GitHub.

    $ git clone https://github.com/philnash/twilio-video-chat-web-component.git
    $ cd twilio-video-chat-web-component

### Credentials
You will need some credentials from Twilio. If you don't have an account you can [sign up for a Twilio account for free](https://www.twilio.com/try-twilio). Then find or generate the below credentials.

Credential | Description
---------- | -----------
Twilio Account SID | Your main Twilio account identifier - [find it on your dashboard](https://www.twilio.com/user/account/video).
Twilio Video Configuration SID | Adds video capability to the access token - [generate one here](https://www.twilio.com/user/account/video/profiles)
API Key | Used to authenticate - [generate one here](https://www.twilio.com/user/account/messaging/dev-tools/api-keys).
API Secret | Used to authenticate - [just like the above, you'll get one here](https://www.twilio.com/user/account/messaging/dev-tools/api-keys).

Once you have your credentials, copy the `.env.example` to `.env`

    $ cp .env.example .env

Then edit that `.env` file and add the credentials you have collected.

### Dependencies

Install the dependencies for this project from npm:

    $ npm install

### Start the application

Start the Node.js application:

    $ node index.js

Open the application at [http://localhost:3000](http://localhost:3000).
