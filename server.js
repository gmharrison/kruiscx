const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.babel.js');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer')
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies)

if (isDeveloping) {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackMiddleware(compiler, {
    hot: true,
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler, {
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  }));
} else {
  app.use(express.static(__dirname + '/dist'));
}

app.post('/form-submit', function(req, res){
    const email = req.body.email
    const name = req.body.name
    const message = req.body.message
    const data = req.body

  let transporter = nodeMailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
          user: process.env.FROMEMAIL,
          pass: process.env.PASS,
      }
  });
  let mailOptions = {
      from: "kruiscontact",
      to: process.env.TOEMAIL,
      subject: "📩 ✨ New Message from the Kruis Website ✨ 🚴",
      html: '<div>' +
      '<span style="color: #ff57cc; font-size: 14px;">From: </span>' +
      '<span style="color: #3f464d; font-size: 14px;">'+ name +'</span><br />' +
      '<span style="color: #ff57cc; font-size: 14px;">Email: </span>' +
      '<span style="color: #3f464d; font-size: 14px;">'+ email + '</span><br />' +
      '<span style="color: #ff57cc; font-size: 14px;">Message: </span>' +
      '<span style="color: #3f464d; font-size: 14px;">'+ message +'</span></div>'
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if(error){
      console.log('Error!')
      return res.status(500).send({ message: 'Something went wrong <U+1F6AB>' });
    } else {
      console.log('Sent!')
      return res.status(200).send({ message: 'Thanks for contacting us! <U+1F6B4><U+200D>‍' });
    }
  })
});

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
