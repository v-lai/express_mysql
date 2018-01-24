const express = require('express');
const router = express.Router({mergeParams: true});
const db = require('../models');

// all chats
router.get('/', function(req, res){
  db.Chat.findAll()
  .then(chats => {
    res.send(chats);
  }).catch(err => res.status(500).send(err));
});

// all chats in a room
router.get('/:room', function(req, res, next){
  db.Chat.findAll({where: {
    room: req.params.room
  }}).then(chat => {
    res.send(chat);
  }).catch(err => res.status(500).send(err));
});

// specific chat by id
router.get('/:room/:id', function(req, res, next){
  db.Chat.findAll({where: {
    id: req.params.id,
    room: req.params.room
  }}).then(chat => {
    res.send(chat);
  }).catch(err => res.status(500).send(err));
});

// create new chat post
router.post('/', function(req, res, next){
  db.Chat.create({
    room: req.body.room,
    user_id: req.body.user_id,
    original_content: req.body.original_content,
  }).then(chat => {
    res.redirect('/chat');
  }).catch(err => res.status(500).send(err));
});

// change name of room
router.put('/:room', function(req, res, next){
  db.Chat.update({
    room: req.body.room
  }, {
      where: {
        room: req.params.room
      }
    }).then(chat => {
      res.redirect('/chat');
    }).catch(err => res.status(500).send(err));
});

// change content
router.put('/:room/:id', function(req, res, next){
  db.Chat.update({
    edited_content: req.body.edited_content
  }, {
      where: {
        id: req.params.id,
        room: req.params.room
      }
    }).then(chat => {
      res.redirect('/chat');
    }).catch(err => res.status(500).send(err));
});

// delete a room
router.delete('/:room', function(req, res, next){
  db.Chat.destroy({
    where: {
      room: req.params.room
    }
  }).then(chat => {
    res.redirect('/chat');
  }).catch(err => res.status(500).send(err));
});

// delete a post
router.delete('/:room/:id', function(req, res, next){
  db.Chat.destroy({
    where: {
      id: req.params.id,
      room: req.params.room
    }
  }).then(chat => {
    res.redirect('/chat');
  }).catch(err => res.status(500).send(err));
});

module.exports = router;
