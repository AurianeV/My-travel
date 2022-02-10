const router = require("express").Router();
const authRoutes = require("./auth");
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
const Destination = require("../models/destinations.model");
const User = require("../models/User.model")
const mongoose = require('mongoose')


/*GET recherche de destinations */
router.get("/destinations", (req, res, next) => {
  //res.json("PAGE RECHERCHE ");
  const filters = {}
<<<<<<< HEAD
  console.log("test", req.query)
=======
  // req.params = {city : "Paris"}
>>>>>>> 281c3eb9e7f259c76264b2cf55ce8baaac8f507f

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

<<<<<<< HEAD
console.log("hello", filters)
  Destination.find(filters)
  .then(myDestinations => {
    console.log("destinations", myDestinations)
    res.json({ destinations : myDestinations })
=======
console.log(filters)
  Destination.find(filters) // filters = {}
  .then(myDestination => {
    console.log("destinations", myDestination)
    res.json({ destination: myDestination })
>>>>>>> 281c3eb9e7f259c76264b2cf55ce8baaac8f507f
  })
  .catch(error => {
    console.log(error)
    res.status(500).json(error);
  })
});

<<<<<<< HEAD
=======
/* GET Aperçu des destinations filtrées */ /*BUG*/

router.get("/resultats", isLoggedIn, (req, res, next) => {
  res.json("resultats");
  Destination.find(filters) 
  .then(myDestination => {
     res.json("destinations", {myDestination})
  })
});

>>>>>>> 281c3eb9e7f259c76264b2cf55ce8baaac8f507f
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
  const { destination } = req.query.destination;

  const userid = req.session.user._id
  User.findByIdAndUpdate({_id:userid}, {
    $push: { favoris: mongoose.Types.ObjectId(destination) }
      }, {new: true})
      .then((user) => {
        return res.json(user);
      })
      .catch((err) => {
        return res.status(500).json({ errorMessage: err.message });
  });
});



module.exports = router;
