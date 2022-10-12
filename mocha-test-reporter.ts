import { reporters } from 'mocha';

const ReporterLogger = require('./reporter.logger');
const Mocha = require('mocha');

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
            ReporterLogger.log('EVENT_HOOK_BEGIN')
        });

        runner.on(EVENT_HOOK_END, () => {
            ReporterLogger.log('EVENT_HOOK_END')
        });

        runner.on(EVENT_RUN_BEGIN, () => {
            ReporterLogger.log('EVENT_RUN_BEGIN')
        });

        runner.on(EVENT_RUN_END, () => {
            ReporterLogger.log('EVENT_RUN_END')
        });

        runner.on(EVENT_TEST_BEGIN, () => {
            ReporterLogger.log('EVENT_TEST_BEGIN')
        });

        runner.on(EVENT_TEST_END, () => {
            ReporterLogger.log('EVENT_TEST_END')
        });

        runner.on(EVENT_TEST_FAIL, () => {
            ReporterLogger.log('EVENT_TEST_FAIL')
        });

        runner.on(EVENT_TEST_PASS, () => {
            ReporterLogger.log('EVENT_TEST_PASS')
        });

        runner.on(EVENT_TEST_RETRY, () => {
            ReporterLogger.log('EVENT_TEST_RETRY')
        });

        runner.on(EVENT_SUITE_BEGIN, () => {
            ReporterLogger.log('EVENT_SUITE_BEGIN')
        });

        runner.on(EVENT_SUITE_END, () => {
            ReporterLogger.log('EVENT_SUITE_END')
        });

        runner.on(STATE_RUNNING, () => {
            ReporterLogger.log('STATE_RUNNING')
        });

        runner.on(STATE_STOPPED, () => {
            ReporterLogger.log('STATE_STOPPED')
        });
    }
}