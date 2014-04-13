  module.exports = function(BasePlugin) {

    return BasePlugin.extend({

      name: 'jison',

      render: function(opts) {
        var Parser, err, inExtension, parser;
        inExtension = opts.inExtension;

        if (inExtension === 'jison') {
          Parser = require("jison").Parser;

          try {
            parser = new Parser(opts.content || '');
            opts.content = parser.generate();
          } catch (err) {
            return err;
          }
        }
        return true;
      }
    });
  };