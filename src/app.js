const express = require('express');

const app = express();

app.use(express.json());

const projects = []

app.get('/projects', (req, res) => {
  //todo
  return res.json(projects);
});

app.post('/projects', (req, res) => {
  //todo
  const { title, owner } = req.body;
  const project = { title, owner };
  projects.push(project);

  return res.json(project);
});

module.exports = app;

