const router = require("express").Router();
const authRoutes = require("./auth");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("PAGE D'ACCUEIL");
});

/* GET page idées destination */

router.get("/ideas", (req, res, next) => {
  res.json("PAGE LISTE DESTINATIONS");
});




module.exports = router;
