const swaggerAutogen = require('swagger-autogen')();
const doc = {
    info: {
        title: 'Contacts API',
        description: 'Contacts API'        
    },
    host: 'localhost:3000',
    schemes: ['https']
};

const outputFile = './swagger.json';
const endpointFiles = ['./routes/index.js'];

//This will generate swagger.json
swaggerAutogen(outputFile, endpointFiles, doc);