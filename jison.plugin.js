  module.exports = function(BasePlugin) {

    return BasePlugin.extend({

      name: 'jison',

      render: function(opts) {
        var Parser, err, inExtension, parser;
        inExtension = opts.inExtension;

        if (inExtension === 'jison') {
          Parser = require("jison").Parser;

          try {
            var parseOpts = {};
            var moduleName = opts.templateData.document.meta.moduleName;
            if (moduleName) {
              parseOpts.moduleName = moduleName;
            }
            parser = new Parser(opts.content || '');
            opts.content = parser.generate(parseOpts);
          } catch (err) {
            return err;
          }
        }
        return true;
      }
    });
  };