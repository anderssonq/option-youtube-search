# Youtube fullstack app🔥
- Software Engineer Andersson Quintero 

## Getting Started 📝 
- Install Nodejs from [Nodejs Official Page](https://nodejs.org/en/)
- Open your terminal
- Navigate to the project
- Run `npm install` or `yarn install` if you use [Yarn](https://yarnpkg.com/en/)
- Run `npm run start:front` or `yarn start:front` to start a local development frontend server 
- Run `npm run start:back` or `yarn start:back` to start a local development backend server 

You can also run additional npm tasks such as
- `npm run build` to build your frontend app
- `npm run start:back` to run backend services and entire app.

## run test 📝
In this project we are using Jest for unit testing
- `npm run jest` to run all tests!
- You can see wheres tests localed at /tests/unit/*.test.js

## enviroment vars 🔒 
- `VUE_APP_API_BACKEND_URL` copy and past backend base url.
- `APIKEY_YT` copy and past api key credentils from google [Google console](https://console.cloud.google.com/).
## Stack
We used the latest 2.x [Vue CLI](https://github.com/vuejs/vue-cli) which aims to reduce project configuration
to as little as possible. Almost everything is inside `package.json` + some other related files such as
`.babel.config.js` and `.postcssrc.js`.

Nodejs/Express for server [Expressjs](https://expressjs.com/) Fast, unopinionated, minimalist web framework for Node.js.
