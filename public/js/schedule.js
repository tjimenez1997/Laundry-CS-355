var stripe = Stripe('pk_test_sTVQBOT4YAcQUzM5JRZU4urJ00OuHksBLO');
var WASHDRY = {
    SMALL: {sku: 'sku_F52EIL87Rolnuo', el: $('#small-size')},
    MEDIUM: {sku:'sku_F51b2eo6RGP8YD', el: $('#medium-size')},
    LARGE: {sku:'sku_F52Egq34K8LKws', el: $('#large-size')}
};

var DRYCLEAN = {
    Skirt: 'sku_F6r6kYmM66fnhk',
    Pants: 'sku_F6r6SVjWR9Dr35',
    Blanket: 'sku_F6r6rP7Fycqvyg',
    Dress: 'sku_F6r4paBJiphP50',
    Suit: 'sku_F6r38v1i64Foe6',
    Coat: 'sku_F6r30XhPECezYL',
    Sweater: 'sku_F6r3ThfDzQc0DJ',
    Jacket: 'sku_F51VTXGCfrWj7c'
};

var pickUpDate = $('#pickupDate');
var pickUpTime = $('#pickupTime');
var washDryDropOffDate = $('#washDryDropoffDate');
var washDryDropOffTime = $('#washDryDropoffTime');
var dryCleanDropoffDate = $('#dryCleanDropoffDate');
var dryCleanDropoffTime = $('#dryCleanDropoffTime');

function checkout() {
    var items = [];

    for (var key in WASHDRY) {
        var load = WASHDRY[key];
        if (load.el.val() !== '0') {
            items.push({sku: load.sku, quantity: Number.parseInt(load.el.val())});
        }
    }

    var categories = $('select[name=dryCleanCategories]');
    var nums = $('select[name=dryCleanNum]');

    for (var i = 0; i < categories.length; i++) {
        if ($(nums[i]).val() !== '0') {
            items.push({sku: DRYCLEAN[$(categories[i]).val()], quantity: Number.parseInt($(nums[i]).val())})
        }
    }

    var metadata = {
        unique: Date.now() + window.userInfo.email,
        address: $('#address').val(),
        pickuptime: Date.parse(pickUpDate.val() + ' ' + pickUpTime.val()),
        washdrydeliverytime: Date.parse(washDryDropOffDate.val() + ' ' + washDryDropOffTime.val()),
        drycleandeliverytime: Date.parse(dryCleanDropoffDate.val() + ' ' + dryCleanDropoffTime.val())
    };

    stripe.redirectToCheckout({
        items: items,
        successUrl: window.location.origin + '/thank-you',
        cancelUrl: window.location.origin + '/schedule',
        customerEmail: window.userInfo.email,
        clientReferenceId: JSON.stringify(metadata)
    }).then(function (result) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
        console.log(result);
    });
}