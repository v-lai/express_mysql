const express = require('express');
const router = express.Router();
const db = require('../models');

// all users
router.get('/', function(req, res){
  db.User.findAll()
  .then(users => {
    res.send(users);
  }).catch(err => res.status(500).send(err));
});

// specific user
router.get('/:id', function (req, res, next) {
  db.User.findAll({
    where: {
      id: req.params.id
    }
  }).then(user => {
    res.send(user);
  }).catch(err => res.status(500).send(err));
});

// create a new user
router.post('/', function (req, res, next) {
  db.User.create({
      name: req.body.name,
      is_active: true,
  }).then(user => {
    res.redirect('/user');
  }).catch(err => res.status(500).send(err));
});

// change user name and is_active
router.put('/:id', function (req, res, next) {
  db.User.update({
    name: req.body.name,
    is_active: req.body.is_active
  }, {
      where: {
        id: req.params.id
      }
    }).then(user => {
      res.redirect('/user');
    }).catch(err => res.status(500).send(err));
});

// delete a user
router.delete('/:id', function (req, res, next) {
  db.User.destroy({
    where: {
      id: req.params.id
    }
  }).then(user => {
    res.redirect('/user');
  }).catch(err => res.status(500).send(err));
});

module.exports = router;
