import { reporters } from 'mocha';

const Mocha = require('mocha');
const chalk = require('chalk');

const {
    EVENT_HOOK_BEGIN,
    EVENT_HOOK_END,
    EVENT_RUN_BEGIN,
    EVENT_RUN_END,
    EVENT_TEST_BEGIN,
    EVENT_TEST_END,
    EVENT_TEST_FAIL,
    EVENT_TEST_PASS,
    EVENT_TEST_RETRY,
    EVENT_SUITE_BEGIN,
    EVENT_SUITE_END,
    STATE_RUNNING,
    STATE_STOPPED
} = Mocha.Runner.constants;

export class MochaTestReporter extends reporters.Spec {
    constructor(runner: any, options: any) {
        super(runner);

        runner.on(EVENT_HOOK_BEGIN, () => {
            console.log(chalk.magenta.underline.bold('(Mocha Test Reporter) : EVENT_HOOK_BEGIN'))
        });

        runner.on(EVENT_HOOK_END, () => {
            console.log(chalk.magenta.underline.bold('(Mocha Test Reporter) : EVENT_HOOK_END'))
        });

        runner.on(EVENT_RUN_BEGIN, () => {
            console.log(chalk.magenta.underline.bold('(Mocha Test Reporter) : EVENT_RUN_BEGIN'))
        });

        runner.on(EVENT_RUN_END, () => {
            console.log(chalk.magenta.underline.bold('(Mocha Test Reporter) : EVENT_RUN_END'))
        });

        runner.on(EVENT_TEST_BEGIN, () => {
            console.log(chalk.magenta.underline.bold('(Mocha Test Reporter) : EVENT_TEST_BEGIN'))
        });

        runner.on(EVENT_TEST_END, () => {
            console.log(chalk.magenta.underline.bold('(Mocha Test Reporter) : EVENT_TEST_END'))
        });

        runner.on(EVENT_TEST_FAIL, () => {
            console.log(chalk.magenta.underline.bold('(Mocha Test Reporter) : EVENT_TEST_FAIL'))
        });

        runner.on(EVENT_TEST_PASS, () => {
            console.log(chalk.magenta.underline.bold('(Mocha Test Reporter) : EVENT_TEST_PASS'))
        });

        runner.on(EVENT_TEST_RETRY, () => {
            console.log(chalk.magenta.underline.bold('(Mocha Test Reporter) : EVENT_TEST_RETRY'))
        });

        runner.on(EVENT_SUITE_BEGIN, () => {
            console.log(chalk.magenta.underline.bold('(Mocha Test Reporter) : EVENT_SUITE_BEGIN'))
        });

        runner.on(EVENT_SUITE_END, () => {
            console.log(chalk.magenta.underline.bold('(Mocha Test Reporter) : EVENT_SUITE_END'))
        });

        runner.on(STATE_RUNNING, () => {
            console.log(chalk.magenta.underline.bold('(Mocha Test Reporter) : STATE_RUNNING'))
        });

        runner.on(STATE_STOPPED, () => {
            console.log(chalk.magenta.underline.bold('(Mocha Test Reporter) : STATE_STOPPED'))
        });
    }
}