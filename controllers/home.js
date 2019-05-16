const express = require('express');
const models = require('../models');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const passport = require('passport');
require('../config/passport.js')(passport); 

const router = express.Router();


router.get('/', (req, res, next) => {
    passport.authenticate('jwt', {session: false}, function (err, user, info, status) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.render('home');
        }
        res.redirect('/order-history');
    })(req, res, next);
});

//Protected Sign Out Get Route (You can only access if you are signed in)
router.get('/signout', passport.authenticate('jwt', { session: false }),
    //Everything in this function only occurs if user token is valid
    function(req, res) {
        res.clearCookie('authToken'); //In the future use refresh token?
        res.redirect('/');
    }
);

//Homepage Sign In POST Route (Future todo: Change route after signin to proper page, As well as failure pages. Also, allow login for both workers to occur) emailAddress/userPassword
router.post('/', (req, res) => {
  let input = req.body;
  let customerLogin = true;

  models.Worker.findOne({
    where:{
        email: input.emailAddress
    }
  })
  .then((workers) => {
    if(workers){
       customerLogin = false;
    }

    if(customerLogin) {
          models.Customer.findOne({
              where:{
                  email: input.emailAddress
              }
          })
          .then((customer) => {
              if(!customer){
                  return res.status(401).send({message: 'Authentication failed. User not found.'});
              }
              customer.comparePassword(req.body.userPassword, (err, isMatch) => {
                  console.log("Password: "+req.body.userPassword + "Matched Password: "+isMatch);
                  let pk = 'MIIBOAIBAAJAVPfYwkIYRZ6CUtRQFefcPD9p9GXn8e/capeB6RWkZtE0HTJpAms/Fa6TC8sUIYfC+hlD5Le1ORiL9VPKtydk0wIDAQABAkBU8OB0cnapQmiuPSlCfOOiJxLZC/bv2gXTWVq5lLUhQuOIXEqeQcxcTdNru0ki9C/tRmhcnaT5hlbr/7WDM2EhAiEAl0u3dpB+Y+QK8jp7iGlFPYA2COV0v9n8twfdv2ufBEUCIQCPxTYqF7lkjkStrMH7ysak6uG5PhnckgB+WFvDuwgyNwIgFjONM3/WnC/tj0gXspfIClNTGpEZRcHmPLGRz7IqPoUCIDvIkgFm5BzAXCasE+4UIA4r7bkN7csemz3umBoICBx5AiBzB9RHgQCGx4C4S3eaGI6dmor/A1j/Q4fsHkPs3KSCHQ==';
                  if(isMatch && !err) {
                        var token = jwt.sign(JSON.parse(JSON.stringify({firstname:customer.firstname, lastname:customer.lastname, email:customer.email, phone:customer.phone, address: customer.address})), pk, {expiresIn: 86400 * 30});
                    
                        //Store jwt with client side cookie
                        //Redirect to debug for now (should be changed to first customer route later)
                        res.cookie('authToken',token);
                        res.redirect('/debug');
                  } else {
                    res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
                  }
                })
              }).catch((error) => res.status(400).send(error));
    } else {
           models.Worker.findOne({
              where:{
                  email: input.emailAddress
              }
          })
          .then((workers) => {
              if(!workers){
                  return res.status(401).send({message: 'Authentication failed. User not found.'});
              }
              workers.comparePassword(req.body.userPassword, (err, isMatch) => {
                  console.log("Password: "+req.body.userPassword + "Matched Password: "+isMatch);
                  let pk = 'MIIBOAIBAAJAVPfYwkIYRZ6CUtRQFefcPD9p9GXn8e/capeB6RWkZtE0HTJpAms/Fa6TC8sUIYfC+hlD5Le1ORiL9VPKtydk0wIDAQABAkBU8OB0cnapQmiuPSlCfOOiJxLZC/bv2gXTWVq5lLUhQuOIXEqeQcxcTdNru0ki9C/tRmhcnaT5hlbr/7WDM2EhAiEAl0u3dpB+Y+QK8jp7iGlFPYA2COV0v9n8twfdv2ufBEUCIQCPxTYqF7lkjkStrMH7ysak6uG5PhnckgB+WFvDuwgyNwIgFjONM3/WnC/tj0gXspfIClNTGpEZRcHmPLGRz7IqPoUCIDvIkgFm5BzAXCasE+4UIA4r7bkN7csemz3umBoICBx5AiBzB9RHgQCGx4C4S3eaGI6dmor/A1j/Q4fsHkPs3KSCHQ==';
                  if(isMatch && !err) {
                        var token = jwt.sign(JSON.parse(JSON.stringify({firstname:workers.firstname, lastname:workers.lastname, email:workers.email, phone:workers.phone, address: workers.address})), pk, {expiresIn: 86400 * 30});
                    
                        //Store jwt with client side cookie
                        //Redirect to debug for now (should be changed to first customer route later)
                        res.cookie('authToken',token);
                        res.redirect('/debug');
                  } else {
                    res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
                  }
                })
              }).catch((error) => res.status(400).send(error));
     }
   })
});


module.exports = router;
