const swaggerAutogen = require("swagger-autogen")();
var os = require("os");
var hostname = os.hostname();

// console.log(new URL("").hostname);

const outputFile = "./swagger_output.json";
// const endpointsFiles = ['./routes/index.js', './routes/quotes.js', './routes/tables.js'];
const endpointsFiles = ["./app.js"];
const doc = {
  info: {
    title: "Traffic management APIs",
    description: "Traffic management API documentation",
  },
  host: "",
  schemes: ["http"],
};

// host: '',      // by default: 'localhost:3000'
//   basePath:
swaggerAutogen(outputFile, endpointsFiles, doc);
