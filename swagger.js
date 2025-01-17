const { describe } = require('node:test');

const swaggerAutogen = require('swagger-autogen')();
const doc = {
    info: {
        title: 'Contacts API',
        description: 'Contacts API'        
    },
    host: 'localhost:3000',
    schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointFiles = ['./CSE341-Contacts/routes/index.js'];

//This will generate swagger.json
swaggerAutogen(outputFile, endpointFiles, doc);