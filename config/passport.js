var passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy;
const Customer = require('../models').Customer;



module.exports = function(passport){
    let opts = {
       secretOrKey: 'MIIBOAIBAAJAVPfYwkIYRZ6CUtRQFefcPD9p9GXn8e/capeB6RWkZtE0HTJpAms/Fa6TC8sUIYfC+hlD5Le1ORiL9VPKtydk0wIDAQABAkBU8OB0cnapQmiuPSlCfOOiJxLZC/bv2gXTWVq5lLUhQuOIXEqeQcxcTdNru0ki9C/tRmhcnaT5hlbr/7WDM2EhAiEAl0u3dpB+Y+QK8jp7iGlFPYA2COV0v9n8twfdv2ufBEUCIQCPxTYqF7lkjkStrMH7ysak6uG5PhnckgB+WFvDuwgyNwIgFjONM3/WnC/tj0gXspfIClNTGpEZRcHmPLGRz7IqPoUCIDvIkgFm5BzAXCasE+4UIA4r7bkN7csemz3umBoICBx5AiBzB9RHgQCGx4C4S3eaGI6dmor/A1j/Q4fsHkPs3KSCHQ==',
       jwtFromRequest: req => cookieExtractor(req, 'authToken')
    };

    let strategy = new JwtStrategy(opts, function(jwt_payload, next) {
      if (jwt_payload) {
        next(null, jwt_payload);
      } else {
        next(null, false);
      }
    });
    passport.use(strategy);
}

var cookieExtractor = function (req,tokenName) {
    var token = null;
    if (req && req.cookies) {
        token = req.cookies[tokenName];
    } else {
        console.log('no cookie found');
    }
    return token;
}