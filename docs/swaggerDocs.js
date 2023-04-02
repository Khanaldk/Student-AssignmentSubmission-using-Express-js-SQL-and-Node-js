module.exports = {
    swaggerDefinition: {
      openapi: '3.0.1',
      info: {
        version: '1.0.0',
        title: 'Student Project Api',
        description: 'It keeps records of Student.',
        servers: ['http://localhost:5000'],
      },
      components: {
        securitySchemes: {
          jwt: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
    },
    apis: ['routes/*.js'],
  };
  
  