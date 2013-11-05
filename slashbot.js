var Igelkott = require('igelkott');

var Slashbot = function Slashbot(config) {
  Igelkott.call(this, config);
};


Slashbot.prototype = Object.create(Igelkott.prototype, {constructor: {value: Slashbot}});

Slashbot.prototype.load = function load(pluginName) {
  try {
    Igelkott.prototype.load.call(this, pluginName);
  }
  catch (err) {
    this.log(err)
    try {
      this.plugin.load(pluginName, require('igelkott-'+pluginName).Plugin);
    } catch (err)
    {
      this.log('No such plugin: '+pluginName);
    }
  }
};

var config = require('./config.json');
config.database = {
  "app_id": process.env.APP_ID,
  "js_key": process.env.JS_KEY
}

var slashbot = new Slashbot(config);
slashbot.connect();
