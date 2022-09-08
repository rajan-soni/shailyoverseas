import { config } from 'dotenv';

config({ path: `${process.env.NODE_ENV || 'development'}.env` });

export const { NODE_ENV, NODE_PORT } = process.env;
