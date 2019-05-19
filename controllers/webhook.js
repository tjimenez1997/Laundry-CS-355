const express = require('express');
const models = require('../models');
const bodyParser = require('body-parser');

//Put in uncommitted config file
const stripe = require('stripe')('sk_test_X2jJzGZf8uK3hJBplsh9MkaO00SiYmsoEz');
const endpointSecret = 'whsec_cpWiiVywFKXMN3KfR4nFVzws1Kc1dLst';

const router = express.Router();

var SKUS = {
    sku_F52EIL87Rolnuo: {
        type: 'Wash & Dry',
        size: 'Small'
    },
    sku_F51b2eo6RGP8YD: {
        type: 'Wash & Dry',
        size: 'Medium'
    },
    sku_F52Egq34K8LKws: {
        type: 'Wash & Dry',
        size: 'Large'
    },
    sku_F52Egq34K8LKw: {
        type: 'Dry Clean',
        item: 'Sweater'
    }
};

router.post('/', bodyParser.raw({type: 'application/json'}), function (req, res, next) {
    const sig = req.headers['stripe-signature'];

    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;

        // Fulfill the purchase...
        handleCheckoutSession(session);
    }

    // Return a response to acknowledge receipt of the event
    res.json({received: true});
});

function handleCheckoutSession(session) {
    const {address, pickuptime, washdrydeliverytime, drycleandeliverytime} = JSON.parse(session.client_reference_id);
    const order = {
        StatusName: 'New',
        CustomerEmail: session.customer_email,
        address,
        pickuptime: new Date(pickuptime)
    };

    if (washdrydeliverytime) {
        order[washdrydeliverytime] = new Date(washdrydeliverytime);
    }

    if (drycleandeliverytime) {
        order[drycleandeliverytime] = new Date(drycleandeliverytime);
    }

    session.display_items.forEach(function (item) {
        const sku = SKUS[item.sku.id];

        if (sku.type === 'Wash & Dry') {
            order['washdry'] = {
                [sku.size]: {
                    quantity: item.quantity
                }
            }
        }

        if (sku.type === 'Dry Clean') {
            order['dryclean'] = {
                [sku.item]: {
                    quantity: item.quantity
                }
            }
        }
    });

    models.Order.create(order)
        .then(console.log);
}

module.exports = router;
