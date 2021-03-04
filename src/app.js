const express = require("express");
const cors = require("cors");

const repositoriesController = require('./controllers/repositories');
const likeController = require('./controllers/like');

const app = express();
app.use(express.json());
app.use(cors());

app.get("/repositories", repositoriesController.index);
app.post("/repositories", repositoriesController.create);
app.put("/repositories/:id", repositoriesController.update);
app.delete("/repositories/:id", repositoriesController.delete);
app.post("/repositories/:id/like", likeController.create);

module.exports = app;
