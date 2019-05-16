var stripe = Stripe('pk_test_sTVQBOT4YAcQUzM5JRZU4urJ00OuHksBLO');
var WASHDRY = {
    SMALL: {sku: 'sku_F52EIL87Rolnuo', el: $('#small-size')},
    MEDIUM: {sku:'sku_F51b2eo6RGP8YD', el: $('#med-size')},
    LARGE: {sku:'sku_F52Egq34K8LKws', el: $('#large-size')}
};

var pickUpDate = $('#pickupdate');
var pickUpTime = $('#pickuptime');
var dropOffDate = $('#dropoffdate');
var dropOffTime = $('#dropofftime');

function checkout() {
    var items = [];

    for (var key in WASHDRY) {
        var load = WASHDRY[key];
        if (load.el.val() !== '0') {
            items.push({sku: load.sku, quantity: Number.parseInt(load.el.val())})
        }
    }

    var metadata = {
        unique: Date.now() + window.userInfo.email,
        address: $('#address').val(),
        pickuptime: Date.parse(pickUpDate.val() + ' ' + pickUpTime.val()),
        deliverytime: Date.parse(dropOffDate.val() + ' ' + dropOffTime.val())
    };

    stripe.redirectToCheckout({
        items: items,
        successUrl: 'http://localhost:8000/schedule?thankyou',
        cancelUrl: 'http://localhost:8000/schedule?cancel',
        customerEmail: window.userInfo.email,
        clientReferenceId: JSON.stringify(metadata)
    }).then(function (result) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
        console.log(result);
    });
}