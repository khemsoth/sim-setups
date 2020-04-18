const express = require('express');
const app = express();
const axios = require('axios');
const Models = require('../Models');

module.exports = function(app) {



//GET ROUTES -------------------------------------

//Get all sims
app.get('/get/sims', function(req, res) {
  Models.Sim.findAll({})
    .then(function(sims) {
        res.json(sims);
    });
}); 

app.get('/get/acctracks', function(req, res) {
  Models.Track.findAll({
    where: {
      acc: 1
    }
    }).then(function(err, tracks) {
      if(err) {
        res.send(err);
      } else {
        res.json(tracks);
      }
  })
})

app.get('/get/acc-cars', function(req, res) {
  Models.Car.findAll({
    where: {
      acc: 1
    }
    }).then(function(err, cars) {
      if(err) {
        res.send(err);
      } else {
        res.json(cars);
      }
  })
})

app.get('/get/assetto-corsa-cars', function(req, res) {
  Models.Car.findAll({
    where: {
      assettoCorsa: 1
    }
    }).then(function(err, cars) {
      if(err) {
        res.send(err);
      } else {
        res.json(cars);
      }
  })
})

//POST ROUTES ------------------------------------

//Post new Sim
app.post('/post/sim', function(req, res) {
  Models.Sim.create({
    title: req.body.title
  }).then(function(sim) {
    res.send(sim)
  });
});

app.post('/post/track', function(req, res) {
  Models.Track.create({
    name: req.body.name, 
    iracing: req.body.iracing,
    acc: req.body.acc,
    assettoCorsa: req.body.assettoCorsa,
    raceroom: req.body.raceroom
  }).then(function(track) {
    res.send(track);
  })
});

app.post('/post/car', function(req, res) {
  Models.Car.create({
    make: req.body.make, 
    model: req.body.model,
    iracing: req.body.iracing,
    acc: req.body.acc,
    assettoCorsa: req.body.assettoCorsa,
    raceroom: req.body.raceroom
  }).then(function(car) {
    res.send(car);
  })
})

};
