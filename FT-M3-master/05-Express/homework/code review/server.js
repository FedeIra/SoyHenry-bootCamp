const bodyParser = require("body-parser");
const express = require("express");
const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
let posts = [];

const server = express();
// to enable parsing of json bodies for post requests
server.use(express.json());

let postId = 0;

// TODO: your code to handle requests

server.post("/posts", (req, res) => {
  const { author, title, contents } = req.body;

  if (!author || !title || !contents) {
    res.status(STATUS_USER_ERROR).json({
      error: "No se recibieron los parámetros necesarios para crear el Post",
    });
  } else {
    const newPost = { author, title, contents, id: postId };
    posts.push(newPost);

    postId++;

    res.json(newPost);
  }
});

server.post("/posts/author/:author", (req, res) => {
  const { author } = req.params;
  const { title, contents } = req.body;

  if (!author || !title || !contents) {
    res.status(STATUS_USER_ERROR).json({
      error: "No se recibieron los parámetros necesarios para crear el Post",
    });
  } else {
    const newPost = { author, title, contents, id: postId };
    posts.push(newPost);

    postId++;

    res.json(newPost);
  }
});

server.get("/posts", (req, res) => {
  // localhost:3000/posts?term=vacaciones
  const { term } = req.query;

  if (term) {
    const postsContainingTerm = posts.filter(
      (p) =>
        p.title.toLowerCase().includes(term.toLowerCase()) ||
        p.contents.toLowerCase().includes(term.toLowerCase())
    );

    res.json(postsContainingTerm);
  } else {
    res.json(posts);
  }
});

server.get("/posts/:author", (req, res) => {
  const postsByAuthor = posts.filter((p) => p.author === req.params.author);

  if (postsByAuthor.length) res.json(postsByAuthor);
  else
    res
      .status(STATUS_USER_ERROR)
      .json({ error: "No existe ningun post del autor indicado" });
});

server.get("/posts/:author/:title", (req, res) => {
  const postsByAuthorAndTitle = posts.filter(
    (p) => p.author === req.params.author && p.title === req.params.title
  );

  if (postsByAuthorAndTitle.length) res.json(postsByAuthorAndTitle);
  else
    res.status(STATUS_USER_ERROR).json({
      error: "No existe ningun post con dicho titulo y autor indicado",
    });
});

server.put("/posts", (req, res) => {
  const { id, title, contents } = req.body;

  if (!id || !title || !contents) {
    res.status(STATUS_USER_ERROR).json({
      error:
        "No se recibieron los parámetros necesarios para modificar el Post",
    });
  } else {
    let onePost = posts.find((p) => p.id === id);

    if (onePost) {
      onePost.title = title;
      onePost.contents = contents;

      res.json(onePost);
    } else {
      res.status(STATUS_USER_ERROR).json({
        error: "No existe ningun Post con el id indicado",
      });
    }
  }
});

server.delete("/posts", (req, res) => {
  if (!req.body.id)
    res.status(STATUS_USER_ERROR).json({ error: "No se recibió un ID" });
  else {
    const onePost = posts.find((p) => p.id === req.body.id);

    if (onePost) {
      posts = posts.filter((p) => p.id !== req.body.id);

      res.json({ success: true });
    } else {
      res
        .status(STATUS_USER_ERROR)
        .json({ error: "Ningun Post coincide con el ID provisto" });
    }
  }
});

server.delete("/author", (req, res) => {
  if (!req.body.author) {
    res.status(STATUS_USER_ERROR).json({ error: "No se recibió un autor" });
  }

  const postsToBeDeleted = posts.filter((p) => p.author === req.body.author);

  if (!postsToBeDeleted.length) {
    res
      .status(STATUS_USER_ERROR)
      .json({ error: "No existe el autor indicado" });
  } else {
    posts = posts.filter((p) => p.author !== req.body.author);
    res.json(postsToBeDeleted);
  }
});

module.exports = { posts, server };
