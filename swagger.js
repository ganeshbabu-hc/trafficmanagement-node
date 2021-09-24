const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
// const endpointsFiles = ['./routes/index.js', './routes/quotes.js', './routes/tables.js'];
const endpointsFiles = ['./app.js'];

swaggerAutogen(outputFile, endpointsFiles)