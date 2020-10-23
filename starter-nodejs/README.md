# NodeJS Starter Framework

### Getting Started With NodeJS
We currently use the latest stable version of NodeJS. You can 
[download it from the nodejs website](https://nodejs.org/en/). 

### package.json scripts
We've created some basic scripts in package.json to get you started. The following are available:

**start**: starts the project webserver (defaults to port 8080)

**lint**: lints your project for formatting issues

**test**: runs tests in the project

### Logging
The server uses the debug package for logging, so you can get additional logging by specifying environment variables:

Everything:
```
DEBUG=* npm run start
```

Express route with database sql debugging:
```
DEBUG=express:router,sequelize:sql:* npm run test
```
