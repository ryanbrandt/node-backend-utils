"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
class DB {
    static getConnection(configuration) {
        const connection = mysql_1.default.createConnection({
            host: configuration.host,
            port: configuration.port,
            user: configuration.user,
            password: configuration.password,
            database: configuration.database,
        });
        connection.connect((err) => {
            if (err)
                console.log(`Database connection error: ${err}`);
            else
                console.log("Database connection successfully established");
        });
        return connection;
    }
    static query(db, sql) {
        console.log(sql);
        return new Promise((resolve, reject) => {
            db.query(sql, (error, results) => {
                if (error) {
                    console.log(`query rejected: ${error}`);
                    reject(error);
                }
                else {
                    resolve(results);
                }
            });
        });
    }
}
exports.default = DB;
//# sourceMappingURL=db.js.map