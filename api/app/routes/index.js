var express = require('express');
var router = express.Router();
var HomeController = require("../controller/home_controller");

/* GET home page. */
router.get('/',HomeController.indexqualquercoisa);
router.get('/usuario',HomeController.usuario);


module.exports = router;
