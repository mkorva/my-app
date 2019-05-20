const User = require('../../models/User');
const UserSession = require('../../models/UserSession');

module.exports = app => {
  app.post("api/accounts/signup", (req, res, next) => {
    const { body } = req;
    const { firstName, lastName,  password } = body;
    let {email} = body;
    if (!firstName) {
        return res.send({
        success: false,
        message: "Error:First name cannot be blank."
      });
    }

    if (!lastName) {
        return res.send({
        success: false,
        message: "Error:Last name cannot be blank."
      });
    }

    if (!email) {
        return res.send({
        success: false,
        message: "Error:email cannot be blank."
      });
    }

    if (!password) {
      return res.send({
        success: false,
        message: "Error:password cannot be blank."
      });
    }

    console.log('here')

    email = email.toLowerCase();
    // steps:
    // 1. Verify email doesnt exists
    // 2. Save
 User.find ({
     email:email

 }, (err,previousUsers) => {
 
  if(err) {
    return res.send({
          success:false,
          message: 'Error:Server error'
      });
  } else if (previousUsers.lenght > 0) {
    return res.send({
        success:false,
        message: 'Error:Account already exists'
    });
  }

  // Save the new user
  const newUser = new User();
  newUser.mail = email;
  newUser.firstName = firstName;
  newUser.firstName = lastName;
  newUser.password = newUser.generateHash(password);
  newUser.save((err,user) => {
      if (err) {
        return res.send({
            success:false,
            message: 'Error:Server error'
        });
    }
    return res.send({
            success:true,
            message: 'Signed up'
        });
    });
});

app.post("api/accounts/signin", (req, res, next) => {
    const { body } = req;
    const { password } = body;
    let {email} = body;
    email = email.toLowerCase();

    if (!email) {
        return res.send({
        success: false,
        message: "Error:Email name cannot be blank."
      });
    }
    if (!password) {
        return res.send({
        success: false,
        message: "Error:Password name cannot be blank."
      });
    }
      email = email.toLowerCase();
      email:email

      User.find ( {email:email },
        (err,users) => {
            if(err) {
                return res.send( {
                    success:false,
                    message:'Error:server error'
                });
            }
 if (users.lenght !=1)
 { return res.send( {
    success:false,
    message:'Error:Invalid'
});

 }

 const user = users[0];
 if (!user.validPassword(password))
 return res.send ({
     succes:false,
     message:'Error:Invalid'
 });
        }
 // Otherwise 
    });
});
};
       
  

