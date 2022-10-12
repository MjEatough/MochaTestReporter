var chalk = require('chalk');
var ReporterLogger = {
    log: function (text) {
        console.log('\n', chalk.magenta.underline.bold('(Mocha Test Reporter)'));
        console.log('\n', ' - ' + text, '\n');
    },
    warn: function (text) {
        console.log('\n', chalk.magenta.underline.bold('(Mocha Test Reporter)'));
        console.warn('\n', ' - ' + text, '\n');
    }
};
module.exports = ReporterLogger;
//# sourceMappingURL=reporter.logger.js.map