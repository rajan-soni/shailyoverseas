import { createLogger, format, transports } from 'winston';
const { combine, timestamp, printf } = format;

const customFormat = printf(({ level, message, timestamp }) => {
  return `[${level}] ${timestamp}: ${message}`;
});

const logger = () => {
  return createLogger({
    level: 'debug',
    format: combine(timestamp({ format: 'HH:mm:ss' }), customFormat),
    transports: [new transports.Console()],
  });
};

export default logger();