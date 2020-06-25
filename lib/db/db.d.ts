import mysql from "mysql";
import { ConnectionConfiguration } from "./types";
declare class DB {
    static getConnection(configuration: ConnectionConfiguration): mysql.Connection;
    static query(db: mysql.Connection, sql: string): Promise<unknown>;
}
export default DB;
