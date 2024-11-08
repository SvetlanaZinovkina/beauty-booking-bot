import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config();

const migrations = {
  directory: path.join(__dirname, 'migrations'),
};

const development = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'),
  },
  useNullAsDefault: true,
  migrations,
};

const production = {
  client: 'pg',
  connection: {
    connectionString: process.env.DB_CONNECTION,
    ssl: { rejectUnauthorized: false },
  },
  useNullAsDefault: true,
  migrations,
};

export default { development, production };
