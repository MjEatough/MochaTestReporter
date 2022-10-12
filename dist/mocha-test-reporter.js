"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MochaTestReporter = void 0;
var mocha_1 = require("mocha");
var Mocha = require('mocha');
var chalk = require('chalk');
var _a = Mocha.Runner.constants, EVENT_HOOK_BEGIN = _a.EVENT_HOOK_BEGIN, EVENT_HOOK_END = _a.EVENT_HOOK_END, EVENT_RUN_BEGIN = _a.EVENT_RUN_BEGIN, EVENT_RUN_END = _a.EVENT_RUN_END, EVENT_TEST_BEGIN = _a.EVENT_TEST_BEGIN, EVENT_TEST_END = _a.EVENT_TEST_END, EVENT_TEST_FAIL = _a.EVENT_TEST_FAIL, EVENT_TEST_PASS = _a.EVENT_TEST_PASS, EVENT_TEST_RETRY = _a.EVENT_TEST_RETRY, EVENT_SUITE_BEGIN = _a.EVENT_SUITE_BEGIN, EVENT_SUITE_END = _a.EVENT_SUITE_END, STATE_RUNNING = _a.STATE_RUNNING, STATE_STOPPED = _a.STATE_STOPPED;
var MochaTestReporter = /** @class */ (function (_super) {
    __extends(MochaTestReporter, _super);
    function MochaTestReporter(runner, options) {
        var _this = _super.call(this, runner) || this;
        runner.on(EVENT_HOOK_BEGIN, function () {
            console.log(chalk.magenta.underline.bold('(Mocha Test Reporter) : EVENT_HOOK_BEGIN'));
        });
        runner.on(EVENT_HOOK_END, function () {
            console.log(chalk.magenta.underline.bold('(Mocha Test Reporter) : EVENT_HOOK_END'));
        });
        runner.on(EVENT_RUN_BEGIN, function () {
            console.log(chalk.magenta.underline.bold('(Mocha Test Reporter) : EVENT_RUN_BEGIN'));
        });
        runner.on(EVENT_RUN_END, function () {
            console.log(chalk.magenta.underline.bold('(Mocha Test Reporter) : EVENT_RUN_END'));
        });
        runner.on(EVENT_TEST_BEGIN, function () {
            console.log(chalk.magenta.underline.bold('(Mocha Test Reporter) : EVENT_TEST_BEGIN'));
        });
        runner.on(EVENT_TEST_END, function () {
            console.log(chalk.magenta.underline.bold('(Mocha Test Reporter) : EVENT_TEST_END'));
        });
        runner.on(EVENT_TEST_FAIL, function () {
            console.log(chalk.magenta.underline.bold('(Mocha Test Reporter) : EVENT_TEST_FAIL'));
        });
        runner.on(EVENT_TEST_PASS, function () {
            console.log(chalk.magenta.underline.bold('(Mocha Test Reporter) : EVENT_TEST_PASS'));
        });
        runner.on(EVENT_TEST_RETRY, function () {
            console.log(chalk.magenta.underline.bold('(Mocha Test Reporter) : EVENT_TEST_RETRY'));
        });
        runner.on(EVENT_SUITE_BEGIN, function () {
            console.log(chalk.magenta.underline.bold('(Mocha Test Reporter) : EVENT_SUITE_BEGIN'));
        });
        runner.on(EVENT_SUITE_END, function () {
            console.log(chalk.magenta.underline.bold('(Mocha Test Reporter) : EVENT_SUITE_END'));
        });
        runner.on(STATE_RUNNING, function () {
            console.log(chalk.magenta.underline.bold('(Mocha Test Reporter) : STATE_RUNNING'));
        });
        runner.on(STATE_STOPPED, function () {
            console.log(chalk.magenta.underline.bold('(Mocha Test Reporter) : STATE_STOPPED'));
        });
        return _this;
    }
    return MochaTestReporter;
}(mocha_1.reporters.Spec));
exports.MochaTestReporter = MochaTestReporter;
//# sourceMappingURL=mocha-test-reporter.js.map