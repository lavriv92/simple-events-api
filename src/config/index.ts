import * as path from 'path';
import * as dotenvSafe from 'dotenv-safe';

dotenvSafe.config();

export default {
  server: {
    host: process.env.HOST,
    port: process.env.PORT
  },
  database: {
    uri: process.env.DATABASE_URL,
    options: { useNewUrlParser: true, useUnifiedTopology: true }
  },
  app: {
    rootPath: path.resolve(__dirname, '..')
  }
};