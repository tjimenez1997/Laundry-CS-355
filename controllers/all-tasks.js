const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
    models.Order.findAll({
        where: {
            WorkerEmail: req.user.email
        },
        include: [models.Customer]
    }).then((orders) => {
        const arr = [];

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
            arr.push(order);
        });

        res.render('all-tasks', {orders: arr});
    });
});
  
  
module.exports = router;