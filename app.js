/* command to run nodemon in terminal
   npm run dev-start */

console.log('Starting app.js');

const pug = require('pug');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('<h1>This is my home page</h1>'))

app.get('/index', (req, res) => res.send('This is my index page'))

app.get('/about', (req, res) => res.send('This is my about page'))

app.get('/projects', (req, res) => res.send('This is my dynamic projects page'))

app.listen(port, () => console.log(`Unit 6 portfolio app listening on port ${port}!`))
