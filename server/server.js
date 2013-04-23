/**
 * Node.js server for web app testing (http://nodejs.org)
 * This is only to get you started working on your web client easily 
 *
 * @author Nil Gradisnik <nil.gradisnik@gmail.com>
 */

/**
 * Module imports
 * Install modules using npm package manager (https://github.com/isaacs/npm)
 */
var express = require('express');
var stylus  = require('stylus');
var nib     = require('nib');
var hbs     = require('hbs');

/**
 * Express web app
 */
var app = module.exports = express();

/**
 * Express configuration
 */
app.configure(function() {

  // Setup Handlebars templating engine
  // More info: (https://github.com/donpark/hbs)
  app.set('view engine', 'html');
  app.engine('html', hbs.__express);

  app.use(app.router);

  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

/**
 * DEVELOPMENT
 */
app.configure('development', function() {

  var DEV_PATH = '/../public';

  // stylus css compiler middleware
  app.use(stylus.middleware({
    src: __dirname+DEV_PATH+'/style',
    dest: __dirname + DEV_PATH,
    compile: function(str, path) {
      return stylus(str)
        .set('filename', path)
        .set('compress', false)
        .use(nib());
    }
  }));

  // Tell Handlebars to look for templates here
  app.set('views', __dirname + DEV_PATH);

  app.use(express.static(__dirname + DEV_PATH));
});

/**
 * PRODUCTION
 * Run nodejs with NODE_ENV=production
 */
app.configure('production', function() {

  var PROD_PATH = '/../public/build/output';

  app.use({ src: __dirname + PROD_PATH });

  app.set('views', __dirname + PROD_PATH);

  app.use(express.static(__dirname + PROD_PATH));
});

/**
 * Routes
 */
app.get('/', function(req, res) {
  res.render('index');
});
app.get('/users', function(req, res) {
  res.send('ok');
});
app.post('/users', function(req, res) {
  res.send('ok');
});

// Handlebars helper, returns json string
hbs.registerHelper('json', function(context) {
  return JSON.stringify(context);
});

/**
 * Start server
 */
var PORT = 1337;
app.listen(PORT);
console.log("marionette-scaffolding server listening on http://localhost:"+PORT+" ["+app.settings.env+"]");

/**
 * Generic error handling
 */
process.on('uncaughtException', function(err) {
  console.error("FATAL ERROR: "+err.message);
  console.error('Stack: '+err.stack);
  console.error("Shuting down app...");
  process.exit(1);
});
