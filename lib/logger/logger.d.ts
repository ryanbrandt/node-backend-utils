declare class Logger {
    static _formatLog(message: string, location?: string): string;
    static info(message: string, location?: string): void;
    static warn(message: string, location?: string): void;
    static error(message: string, location?: string): void;
}
export default Logger;
