/*

command to run nodemon in terminal:
   npm run dev-start

Additional Resources Used:
'Learning Node.js Development'by Andrew Mead
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
  const idInt = parseInt(req.params.id);
  const project = projects[id];
  if (Number.isInteger && idInt <= projects.length) {
    return res.render('project', {project});
  } else {
    res.redirect('/');
  }
});





//Error Handlers
app.use((req, res, next) => {
  const err = new Error('This page does not exist.');
  err.status = 404;
  next(err);
})


app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
  console.log({ message: 'Route'+req.url+' Not found.' });
})





//Server port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
