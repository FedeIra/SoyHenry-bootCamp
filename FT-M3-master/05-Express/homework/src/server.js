// const bodyParser = require("body-parser");
const express = require('express');

const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
const posts = [];

const server = express();

// to enable parsing of json bodies for post requests
server.use(express.json());

// TODO: your code to handle requests

//!GET /
server.get('/', function (req, res) {
  let obj = {
    saludo: 'Hola' + req.body.name,
  };
  res.json(obj);
});

//!POST /posts
server.post(`/posts`, (req, res) => {
  const { author, title, contents } = req.body;
  const newPost = {
    author,
    title,
    contents,
    id: posts.length + 1,
  };
  if (!author || !title || !contents) {
    res.status(STATUS_USER_ERROR).json({
      error: 'No se recibieron los parámetros necesarios para crear el Post',
    });
  }
  posts.push(newPost);
  res.json(newPost);
});

//!POST /posts/author/:author
server.post(`/posts/author/:author`, (req, res) => {
  const { title, contents } = req.body;
  const newPost = {
    author: req.params.author,
    title,
    contents,
    id: posts.length + 1,
  };

  if (!title || !contents) {
    res.status(STATUS_USER_ERROR).json({
      error: 'No se recibieron los parámetros necesarios para crear el Post',
    });
  }
  posts.push(newPost);
  res.json(newPost);
});

//! GET /posts
server.get(`/posts`, (req, res) => {
  const { term } = req.query;
  if (term) {
    const result = posts.filter(
      (element) =>
        element.title.includes(term) || element.contents.includes(term)
    );
    result ? res.json(result) : res.status(404).json('no se encuentra');
  } else {
    res.json(posts);
  }
});

//! GET /posts/:author
server.get(`/posts/:author`, (req, res) => {
  const { author } = req.params;

  const result = posts.filter((element) => element.author === author);
  result.length > 0
    ? res.json(result)
    : res
        .status(STATUS_USER_ERROR)
        .json({ error: 'No existe ningun post del autor indicado' });
});

//! GET /posts/:author/:title
server.get(`/posts/:author/:title`, (req, res) => {
  const { author, title } = req.params;
  const result = posts.filter(
    (element) => element.author === author && element.title === title
  );
  if (result.length > 0) {
    res.json(result);
  } else {
    res.status(STATUS_USER_ERROR).json({
      error: 'No existe ningun post con dicho titulo y autor indicado',
    });
  }
});

//! PUT /posts
server.put(`/posts`, (req, res) => {
  const { id, title, contents } = req.body;

  if (!id || !title || !contents) {
    return res.status(STATUS_USER_ERROR).json({
      error:
        'No se recibieron los parámetros necesarios para modificar el Post',
    });
  }
  let post = posts.find((p) => p.id == id);

  if (post === undefined) {
    return res.status(STATUS_USER_ERROR).json({
      error: 'No se recibió el id correspondiente',
    });
  } else {
    post.title = title;
    post.contents = contents;
    res.status(200).json(post);
  }
});

//! DELETE /posts
server.delete(`/posts`, (req, res) => {
  const { id } = req.body;
  let post = posts.find((p) => p.id == id);

  if (!id || post === undefined) {
    return res.status(STATUS_USER_ERROR).json({ error: 'Mensaje de error' });
  } else {
    posts.splice(id - 1, 1);
    res.status(200).json({ success: true });
  }
});

//! DELETE /author
server.delete(`/author`, (req, res) => {
  const { author } = req.body;
  let authorSelected = posts.filter((p) => p.author === author);
  // let result = posts.find((element) => element.author === author);

  if (!author) {
    return res.status(STATUS_USER_ERROR).json({ error: 'Mensaje de error' });
  }
  if (authorSelected.length === 0) {
    return res
      .status(STATUS_USER_ERROR)
      .json({ error: 'No existe el autor indicado' });
  }
  posts.map((post, index, array) =>
    authorSelected.includes(post) ? array.splice(index, 1) : post
  );
  res.status(200).json(authorSelected);
});
//---------------------------------------------------------
module.exports = { posts, server };
