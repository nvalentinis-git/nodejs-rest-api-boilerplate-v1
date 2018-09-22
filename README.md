

# Tech stack and modules

- NodeJS
- Express 4
- cross-env
- Babel
- Webpack 3
- Mongoose (ODM)
- Compression
- Helmet

# Features

- It is a basic REST API
- Users can CRUD Post
- Users can follow a Post
- Users can get Notifications
- Users can like a Post
- 

# Scripts

## Build the Project
Create the bundle with Webpack

    $ npm run dev:build

    $ npm run prod:build

## Start the Service

    $ npm run dev

    $ npm run prod
    
## Start a MongoDB instance
Using docker we can easily have a DB instance running
Default port is 27017

    $ docker run --name mongo-container mongo:latest
   

## Source
   This App was built based on this blog.
   https://hackernoon.com/the-practical-guide-for-building-rest-api-in-nodejs-and-mongodb-include-passport-and-jwt-476720b70da0
