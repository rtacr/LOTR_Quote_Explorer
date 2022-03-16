# Lord Of The Rings Quote Explorer
Application to search LOTR Quotes by the characters name.

## Getting Started

1. Get your "The One API" Key <br/>
    Sign up and get your API Key from [The One API Website](https://the-one-api.dev/sign-up)
2. Set Enviroment Variables <br/>
    Paste your API Key to the `src/server/.env.example` file. Then rename the file as `.env`.

3. Building
    - Building with Docker <br/>
        `docker-compose up -d`
    - Building with npm <br/>
        Run `npm install && npm start` inside both src/web and src/server directories.
        <br />

4. Testing<br/>
    run `npm test` in both src/web and src/server directories.
    - Backend tests<br/>
        Using mocha library.
    - Frontend tests<br/>
        Using testing-library for react.
        
## Tech Stack
The One API <br />
Node.js with Express <br />
React.js (create-react-app) with Material UI Kit <br />
