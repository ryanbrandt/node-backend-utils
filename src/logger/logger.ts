class Logger {
  static _formatLog(message: string, location: string = "APP"): string {
    return `[${location} ${new Date().toISOString()}]: ${message}`;
  }

  static info(message: string, location?: string): void {
    console.info(Logger._formatLog(message, location));
  }

  static warn(message: string, location?: string): void {
    console.warn(Logger._formatLog(message, location));
  }

  static error(message: string, location?: string): void {
    console.error(Logger._formatLog(message, location));
  }
}

export default Logger;
