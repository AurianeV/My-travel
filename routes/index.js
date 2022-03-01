const router = require("express").Router();
const authRoutes = require("./auth");
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
const Destination = require("../models/destinations.model");
const User = require("../models/User.model");
const mongoose = require('mongoose');




/*GET recherche de destinations */
router.get("/destinations", (req, res, next) => {
  //res.json("PAGE RECHERCHE ");
  const filters = {}
  //console.log("test", req.query)

  if (req.query.continent) {
    // le user a choisi un ou plusieurs continents
    filters.continent = {$in: req.query.continent }
  }

  if (req.query.bestperiod) {
    // le user a choisi un ou plusieurs mois
    filters.bestperiod = {$in: req.query.bestperiod } // 

  }

  if (req.query.temperature) {
    // le user a choisi une ou plusieurs températures
    filters.temperature = {$in: req.query.temperature }
  }

  if (req.params.city) {
    // le user a choisi une ou plusieurs températures
    filters.city = {$in: req.params.city }
  }


  if (req.query.mood) {
    // le user a choisi une ou plusieurs activités
    filters.mood = {$in: req.query.mood}
  }

//console.log("hello", filters)
  Destination.find(filters)
  .then(myDestinations => {
    console.log("destinations", myDestinations)
    res.json({destinations : myDestinations })
  })
  .catch(error => {
    console.log(error)
    res.status(500).json(error);
  })
});



/* GET Ville précise */

router.get("/destinations/:id", isLoggedIn, (req, res, next) => {
  const id = req.params.id
  Destination.findById(id) 
  .then(myDestination => {
     res.json({destination: myDestination})
  })
  .catch(error => {
    console.log(error)
    res.status(500).json(error.message);
  })
});

/* PUT Éditer les champs des utilisateurs pour mettre en favoris *//*BUG*/

router.put("/favoris", isLoggedIn, (req, res) => {
  const destinationId  = req.query.destination;

  const userid = req.session.user._id

  User.findById(userid)
    .then(user => {
         /* if (found) {
          return res.status(400).json({ errorMessage: "favoris already exists." }
           
          });
         
        }*/
       
      user.favoris.push(destinationId)// bonus: check qu'il existe pas deja / sinon: stop

      user.save()
        .then((userFromDB) => res.json(userFromDB))
        .catch(err => {res.status(500).json({ errorMessage: err.message })})
    })
    .catch(err => res.status(500).json({error: err.message}))

});




/* GET Destinations dans page favoris*/

router.get('/favoris', isLoggedIn, (req, res, next) => {
  
  const userid = req.session.user._id
 
  User.findById(userid)
  .populate('favoris')
  .then((user) => {
    res.json(user.favoris)
  })
  .catch(error => {
    return res.status(500).json({ errorMessage: error.message });
  })
  
 });


module.exports = router;
