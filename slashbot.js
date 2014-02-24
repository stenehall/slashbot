var Igelkott = require('igelkott');

var Slashbot = function Slashbot(config) {
  Igelkott.call(this, config);
};


Slashbot.prototype = Object.create(Igelkott.prototype, {constructor: {value: Slashbot}});

var config = require('./config.json');

var slashbot = new Slashbot(config);
slashbot.connect();
