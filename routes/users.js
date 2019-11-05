var express = require('express');
var router = express.Router();

let users = { items: [] }

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send(users.items);
});


router.post('/', (req, res) => {
	users.items.push(req.body)
	res.send('Ok!');
});


router.delete('/', function (req, res, next) {
	for(var i = 0; i < users.items.length; i++) {
		if(users.items[i].email == req.body.email) {
			users.items.splice(i,1);
		}
	}
});

module.exports = router;
