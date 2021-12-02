var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
	res.render("index", {
		message: "Hello and Welcome !!!", // this can be any thing you want
	});
});

module.exports = router;
