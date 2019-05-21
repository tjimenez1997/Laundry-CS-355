const express = require('express');
const models = require('../models');
const passport = require('passport');
require('../config/passport.js')(passport);

const router = express.Router();

//Authentication Protected Order Page
router.get('/', function(req, res) {
	models.Order.findAll({
		where: {
			CustomerEmail: req.user.email
		},
		include: [models.Customer, models.Worker]
	}).then((orders) => {
		const arrs = {
			New: [],
			'InProgress': [],
			'Done': []
		};

		orders.forEach(function (o) {
			var order = o.toJSON();
			order.pickuptime = order.pickuptime.toLocaleString();

			if (order.washdry) {
				order.serviceText = 'Wash & Dry';
			}

			if (order.dryclean) {
				if (order.serviceText) {
					order.serviceText += ', Dry Clean';
				} else {
					order.serviceText = 'Dry Clean';
				}
			}

			console.log(order.StatusName);
			arrs[order.StatusName.replace(' ', '')].push(order);
		});

		res.render('order-history', arrs);
	});
});
    



module.exports = router;