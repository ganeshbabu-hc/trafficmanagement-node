const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || 'fanny.db.elephantsql.com',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'tbykowof',
    password: env.DB_PASSWORD || 'FusLSIHoC0Cv-KYr-G_T_NZWkBROps_2',
    database: env.DB_NAME || 'tbykowof',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;
