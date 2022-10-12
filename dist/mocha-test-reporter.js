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
exports.CypressTestRailReporter = void 0;
var mocha_1 = require("mocha");
var Mocha = require('mocha');
var _a = Mocha.Runner.constants, EVENT_HOOK_BEGIN = _a.EVENT_HOOK_BEGIN, EVENT_HOOK_END = _a.EVENT_HOOK_END, EVENT_RUN_BEGIN = _a.EVENT_RUN_BEGIN, EVENT_RUN_END = _a.EVENT_RUN_END, EVENT_TEST_BEGIN = _a.EVENT_TEST_BEGIN, EVENT_TEST_END = _a.EVENT_TEST_END, EVENT_TEST_FAIL = _a.EVENT_TEST_FAIL, EVENT_TEST_PASS = _a.EVENT_TEST_PASS, EVENT_TEST_RETRY = _a.EVENT_TEST_RETRY, EVENT_SUITE_BEGIN = _a.EVENT_SUITE_BEGIN, EVENT_SUITE_END = _a.EVENT_SUITE_END, STATE_RUNNING = _a.STATE_RUNNING, STATE_STOPPED = _a.STATE_STOPPED;
var CypressTestRailReporter = /** @class */ (function (_super) {
    __extends(CypressTestRailReporter, _super);
    function CypressTestRailReporter(runner, options) {
        var _this = _super.call(this, runner) || this;
        runner.on(EVENT_HOOK_BEGIN, function () {
            ReporterLogger.log('EVENT_HOOK_BEGIN');
        });
        runner.on(EVENT_HOOK_END, function () {
            ReporterLogger.log('EVENT_HOOK_END');
        });
        runner.on(EVENT_RUN_BEGIN, function () {
            ReporterLogger.log('EVENT_RUN_BEGIN');
        });
        runner.on(EVENT_RUN_END, function () {
            ReporterLogger.log('EVENT_RUN_END');
        });
        runner.on(EVENT_TEST_BEGIN, function () {
            ReporterLogger.log('EVENT_TEST_BEGIN');
        });
        runner.on(EVENT_TEST_END, function () {
            ReporterLogger.log('EVENT_TEST_END');
        });
        runner.on(EVENT_TEST_FAIL, function () {
            ReporterLogger.log('EVENT_TEST_FAIL');
        });
        runner.on(EVENT_TEST_PASS, function () {
            ReporterLogger.log('EVENT_TEST_PASS');
        });
        runner.on(EVENT_TEST_RETRY, function () {
            ReporterLogger.log('EVENT_TEST_RETRY');
        });
        runner.on(EVENT_SUITE_BEGIN, function () {
            ReporterLogger.log('EVENT_SUITE_BEGIN');
        });
        runner.on(EVENT_SUITE_END, function () {
            ReporterLogger.log('EVENT_SUITE_END');
        });
        runner.on(STATE_RUNNING, function () {
            ReporterLogger.log('STATE_RUNNING');
        });
        runner.on(STATE_STOPPED, function () {
            ReporterLogger.log('STATE_STOPPED');
        });
        return _this;
    }
    return CypressTestRailReporter;
}(mocha_1.reporters.Spec));
exports.CypressTestRailReporter = CypressTestRailReporter;
//# sourceMappingURL=mocha-test-reporter.js.map