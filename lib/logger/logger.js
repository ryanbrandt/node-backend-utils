"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    static _formatLog(message, location = "APP") {
        return `[${location} ${new Date().toISOString()}]: ${message}`;
    }
    static info(message, location) {
        console.info(Logger._formatLog(message, location));
    }
    static warn(message, location) {
        console.warn(Logger._formatLog(message, location));
    }
    static error(message, location) {
        console.error(Logger._formatLog(message, location));
    }
}
exports.default = Logger;
//# sourceMappingURL=logger.js.map