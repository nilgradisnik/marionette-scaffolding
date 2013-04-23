# This is a minimal [Node.js](http://nodejs.org/) server

## Dependencies 

1. [Express](http://expressjs.com) for simple web app setup
2. [Stylus](http://learnboost.github.com/stylus/) CSS prepreprocessor
3. [Handlebars](https://github.com/donpark/hbs) templating engine
4. (optional) [UglifyJS](https://github.com/mishoo/UglifyJS) JavaScript compressor

Use npm to install these modules:

    npm install

## Running

    npm start


## Deploying
Once your project is ready for production, you can optimize all the web project files using [RequireJS optimization tool](http://requirejs.org/docs/optimization.html).

Navigate to `public/build` folder and run the `build.sh` script. All the generated files should be in the output folder.

You can run the optimized project using this command:

    NODE_ENV=production npm start

## Project structure
For this to work the file/folder structure should be:

```
marionette-scaffolding/
  server/
    server.js
  public/
    ...
```