const express = require('express');
const models = require('../models');

//Put in uncommitted config file
const stripe = require('stripe')('sk_test_X2jJzGZf8uK3hJBplsh9MkaO00SiYmsoEz');
const endpointSecret = 'whsec_cpWiiVywFKXMN3KfR4nFVzws1Kc1dLst';

const router = express.Router();

router.post('/', function (req, res, next) {
    const sig = request.headers['stripe-signature'];

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
    const {address, pickuptime, deliverytime, washdry, dryclean} = JSON.parse(session.client_reference_id);
    console.log(JSON.parse(session.client_reference_id));
    models.Order.create({StatusName: 'New', CustomerEmail: session.customer_email, address, pickuptime, deliverytime, washdry, dryclean})
        .then(console.log);
}

module.exports = router;
