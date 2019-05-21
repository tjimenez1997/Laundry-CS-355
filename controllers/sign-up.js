const express = require('express');
const models = require('../models');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get('/', (req, res, next) => {
    passport.authenticate('jwt', {session: false}, function (err, user, info, status) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.render('sign-up');
        }
        res.redirect('/order-history');
    })(req, res, next);
});

//Register Page POST Route
router.post('/', (req, res) => {
  let input = req.body;
  let taskerSignup = input.taskerFirstName;
  if(taskerSignup){
      models.Worker.findOne({
        where:{
          email: input.taskerEmailAddress
        }
      }).then((tasker) => {
        if(!tasker){
            models.Worker.create({firstname: input.taskerFirstName, lastname: input.taskerLastName, email: input.taskerEmailAddress, phone: input.taskerPhoneNumber, password: input.taskerPassword, address: input.taskerAddress})
            .then(function(){
              //Signs in Worker Automatically after registration
              //res.json({ msg: "Successfully added worker account to database." });
              let pk = 'MIIBOAIBAAJAVPfYwkIYRZ6CUtRQFefcPD9p9GXn8e/capeB6RWkZtE0HTJpAms/Fa6TC8sUIYfC+hlD5Le1ORiL9VPKtydk0wIDAQABAkBU8OB0cnapQmiuPSlCfOOiJxLZC/bv2gXTWVq5lLUhQuOIXEqeQcxcTdNru0ki9C/tRmhcnaT5hlbr/7WDM2EhAiEAl0u3dpB+Y+QK8jp7iGlFPYA2COV0v9n8twfdv2ufBEUCIQCPxTYqF7lkjkStrMH7ysak6uG5PhnckgB+WFvDuwgyNwIgFjONM3/WnC/tj0gXspfIClNTGpEZRcHmPLGRz7IqPoUCIDvIkgFm5BzAXCasE+4UIA4r7bkN7csemz3umBoICBx5AiBzB9RHgQCGx4C4S3eaGI6dmor/A1j/Q4fsHkPs3KSCHQ==';
              var token = jwt.sign(JSON.parse(JSON.stringify({firstname: input.taskerFirstName, lastname: input.taskerLastName, email: input.taskerEmailAddress, phone: input.taskerPhoneNumber, password: input.taskerPassword, address: input.taskerAddress})), pk, {expiresIn: 86400 * 30});
                          
              //Store jwt with client side cookie
              //Redirect to debug for now (should be changed to first customer route later)
              res.cookie('authToken',token);
              res.redirect('find-work');
            });
        } else {
          let errorCode = 2;
          res.cookie('warningMessage',errorCode, {maxAge: 3000});
          return  res.redirect('back');
        }

      })

  		
  } else { 
      models.Customer.findOne({
        where:{
          email: input.emailAddress
        }
      }).then((customer) => {
        if(!customer){
           models.Customer.create({firstname: input.firstName, lastname: input.lastName, email: input.emailAddress, phone: input.phoneNumber, password: input.password, address: input.address})
            .then(function(){
              //Signs in Customer Automatically after registration
               let pk = 'MIIBOAIBAAJAVPfYwkIYRZ6CUtRQFefcPD9p9GXn8e/capeB6RWkZtE0HTJpAms/Fa6TC8sUIYfC+hlD5Le1ORiL9VPKtydk0wIDAQABAkBU8OB0cnapQmiuPSlCfOOiJxLZC/bv2gXTWVq5lLUhQuOIXEqeQcxcTdNru0ki9C/tRmhcnaT5hlbr/7WDM2EhAiEAl0u3dpB+Y+QK8jp7iGlFPYA2COV0v9n8twfdv2ufBEUCIQCPxTYqF7lkjkStrMH7ysak6uG5PhnckgB+WFvDuwgyNwIgFjONM3/WnC/tj0gXspfIClNTGpEZRcHmPLGRz7IqPoUCIDvIkgFm5BzAXCasE+4UIA4r7bkN7csemz3umBoICBx5AiBzB9RHgQCGx4C4S3eaGI6dmor/A1j/Q4fsHkPs3KSCHQ==';
               var token = jwt.sign(JSON.parse(JSON.stringify({firstname: input.firstName, lastname: input.lastName, email: input.emailAddress, phone: input.phoneNumber, password: input.password, address: input.address})), pk, {expiresIn: 86400 * 30});
              //Store jwt with client side cookie
              //Redirect to debug for now (should be changed to first customer route later)
              res.cookie('authToken',token);
              res.redirect('order-history');
            });
        } else {
          let errorCode = 3;
          res.cookie('warningMessage',errorCode, {maxAge: 3000});
          return  res.redirect('back');
        }

      })



  		
  }



 
});


module.exports = router;