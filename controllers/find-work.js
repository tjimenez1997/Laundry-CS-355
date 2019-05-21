const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
    models.Order.findAll({
        where: {
            WorkerEmail: null
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

        res.render('find-work', {orders: arr});
    });
});

router.post('/', function (req, res) {
    var id = req.body.id;
    models.Order.update({WorkerEmail: req.user.email, StatusName: 'In Progress'}, {
        where: {
            id
        }
    }).then(function () {
        res.send('OK');
    });
});


module.exports = router;