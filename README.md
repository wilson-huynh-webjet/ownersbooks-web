# Owners and Books web application
Owners and Books web application to display all books available, built with ReactJs.
- Fully responsive from mobile to desktop with mobile breakpoint 600px
- Css tokens used for easy to mange and change
- Unit tests with Jest
- To keep the scope small, there is no integration or end-to-end test implemented
- Cross browser testing with Chrome, Edge, Brave & Safari
- When running this web application on local, it'd call [the local API](https://github.com/wilson-huynh-webjet/ownersbooks-api), therefore the local API would need to be installed and run first before the web.

## Demo site
https://ownersbooks-web.vercel.app

## Development 

### Requirements
- Node.js v24
- npm

### Setup

```bash
npm install
```

### Run dev server

```bash
npm start
```

The server runs at `http://localhost:9010` by default.  

### Unit Test

```bash
npm test
```

## Deployment 
### Build

```bash
npm run build
```

Output files will be placed in `dist` folder