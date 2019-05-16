var stripe = Stripe('pk_test_sTVQBOT4YAcQUzM5JRZU4urJ00OuHksBLO');
var WASHDRY = {
    SMALL: {sku: 'sku_F52EIL87Rolnuo', el: $('#small-size')},
    MEDIUM: {sku:'sku_F51b2eo6RGP8YD', el: $('#med-size')},
    LARGE: {sku:'sku_F52Egq34K8LKws', el: $('#large-size')}
};

function checkout() {
    var items = [];

    for (var key in WASHDRY) {
        var load = WASHDRY[key];
        if (load.el.val() !== '0') {
            items.push({sku: load.sku, quantity: Number.parseInt(load.el.val())})
        }
    }


    stripe.redirectToCheckout({
        items: items,
        successUrl: 'http://localhost:8000/success',
        cancelUrl: 'http://localhost:8000/cancel',
    }).then(function (result) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
        console.log(result);
    });
}