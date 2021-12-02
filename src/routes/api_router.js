var express = require("express");
var router = express.Router();

router.get("/product/:productId", function (req, res, next) {
	var pid = parseInt(req.params.productId, 10);
	//Use res.send to manipulate string to get file with name as productID or something and use a static file server
	next();
});

module.exports = router;
