import Knex from 'knex';
import knexConfig from './knexfile.js';

const environment = process.env.NODE_ENV || 'development';
const config = knexConfig[environment];

export default Knex(config);
