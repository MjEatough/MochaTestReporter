const chalk = require('chalk');

const ReporterLogger = {
    log: (text) => {
        console.log('\n', chalk.magenta.underline.bold('(Mocha Test Reporter)'));
        console.log('\n', ' - ' + text, '\n');
    },
    warn: (text) => {
        console.log('\n', chalk.magenta.underline.bold('(Mocha Test Reporter)'));
        console.warn('\n', ' - ' + text, '\n');
    }
}

module.exports = ReporterLogger;