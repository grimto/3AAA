const express = require('express');
const app = express();
const objectssRoutes = express.Router();

// Require objectss model in our routes module
let ObjectssRoutes = require('../models/objectss');

// Defined store route
objectssRoutes.route('/add').post(function (req, res) {
  let objectss = new ObjectssRoutes(req.body);
  objectss.save()
    .then(objectss => {
      res.status(200).json({'object': 'object is added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
objectssRoutes.route('/').get(function (req, res) {
  ObjectssRoutes.find(function (err, objectsses){
    if(err){
      console.log(err);
    }
    else {
      res.json(objectsses);
    }
  });
});

// Defined edit route
objectssRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  ObjectssRoutes.findById(id, function (err, objectss){
    res.json(objectss);
  });
});

//  Defined update route
objectssRoutes.route('/update/:id').put(function (req, res) {
  ObjectssRoutes.findById( req.params.id, function(err, next, objectss) {
    if (!objectss)
      return (new Error('Could not load Document'));
    else {
      objectss._name = req.body._name;
      objectss._paragraph= req.body._paragraph;
      objectss.save().then(objectss => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
objectssRoutes.route('/delete/:id').get(function (req, res) {
  ObjectssRoutes.findByIdAndRemove({_id: req.params.id}, function(err, objectss){
    if(err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = objectssRoutes;
