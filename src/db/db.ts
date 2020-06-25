import mysql from "mysql";

import { ConnectionConfiguration } from "./types";

class DB {
  static getConnection(configuration: ConnectionConfiguration) {
    const connection = mysql.createConnection({
      host: configuration.host,
      port: configuration.port,
      user: configuration.user,
      password: configuration.password,
      database: configuration.database,
    });

    connection.connect((err) => {
      if (err) console.log(`Database connection error: ${err}`);
      else console.log("Database connection successfully established");
    });

    return connection;
  }

  static query(db: mysql.Connection, sql: string) {
    console.log(sql);

    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          console.log(`query rejected: ${error}`);
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
}

export default DB;
