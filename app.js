/* command to run nodemon in terminal
   npm run dev-start

Additional Resources Used: 'Learning Node.js Development'by Andrew Mead,
'Express In Action' by Evan Hahn
*/


console.log('Starting app.js');

//Vars
const pug = require('pug');
const express = require('express');
const app = express();

const data = require("./data.json");
const projects = data.projects

app.set('view engine', 'pug');
app.use('/static', express.static('public'));


const port = 3000;






//Home Page
app.get('/', (req, res) => {
  res.render('index', {projects: projects});
});


//About Page
app.get('/about', (req, res) => {
  res.render('about');
});


//Dynamic Projects Route
app.get('/projects/:id', (req, res) => {
  const id = req.params.id
  const project = projects[id];
  res.render('project', {project});
});





//Error Handlers
// 404
app.use((req, res, next) => {
  return res.status(404).send({ message: 'Route'+req.url+' Not found.' });
});

// 500 - Any server error
app.use((err, req, res, next) => {
  return res.status(500).send({ error: err });
});




//Server port
app.listen(port, () => console.log(`Unit 6 portfolio app listening on port ${port}!`))
