const router = require("express").Router();
const authRoutes = require("./auth");
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
const Destination = require("../models/destinations.model");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("PAGE D'ACCUEIL");
});

/* GET page idées destination */
router.get("/ideas", (req, res, next) => {
  res.json("PAGE LISTE DESTINATIONS");
});

/*GET recherche de destinations */
router.get("/destinations", isLoggedIn, (req, res, next) => {
  //res.json("PAGE RECHERCHE ");
  const filters = {}

  if (req.params.continent) {
    // le user a choisi un ou plusieurs continents
    filters.continent = {$in: req.params.continent }
  }

  if (req.params.bestperiod) {
    // le user a choisi un ou plusieurs mois
    filters.bestperiod = {$in: req.params.bestperiod } // 

  }

  if (req.params.temperature) {
    // le user a choisi une ou plusieurs températures
    filters.temperature = {$in: req.params.temperature }
  }


  if (req.params.mood) {
    // le user a choisi une ou plusieurs activités
    filters.mood = {$in: req.params.mood}
  }

console.log(filters)
  Destination.find(filters)
  .then(myDestination => {
    console.log("destinations", myDestination)
    res.json({ destination: myDestination })
  })
  .catch(error => {
    console.log(error)
    res.status(500).json(error);
  })
});

/* GET Aperçu des destinations filtrées */

router.get("/resultats", isLoggedIn, (req, res, next) => {
  res.json("resultats");
  Destination.find({}) 
  .then(myDestination => {
     response.json("recipes", {myDestination})
  })
});

/* GET Ville précise */

router.get("/destination/:id", isLoggedIn, (req, res, next) => {
  const id = req.params.id
  res.json("resultats");
  Destination.findById(id) 
  .then(myDestination => {
     res.json({destination: myDestination})
  })
});

/* PUT Éditer les champs des utilisateurs pour mettre en favoris */

router.put("/favoris", isLoggedIn, (req, res) => {
  const { country, image, city} = req.body;

  const cityid = req.session.city._id
  Destination.findByIdAndUpdate({_id:cityid}, {
    country: country,
    image: image,
    city: city,
      }, {new: true})
      .then((destinations) => {
        return res.json(destinations);
      })
      .catch((err) => {
        return res.status(500).json({ errorMessage: err.message });
  });
});



module.exports = router;
