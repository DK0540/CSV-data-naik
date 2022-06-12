const { body, validationResult } = require("express-validator");
exports.userValidatesignUp = [
  
    body("name")
      .isLength({
        min: 2
      })
      .withMessage("must be at least 2 charachers")
      .trim()
      .escape(),
 
    body("email")
      .isEmail()
      .withMessage("please enter valid email address")
      .trim()
      .escape(),
  
    body("password")
      .isLength({
        min: 5
      })
      .withMessage("Password must be atleast 5 characters")
      .trim()
      .escape(),
  
   
    (req, res, next) => {
      const errors = validationResult(req);
     
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
      } else {
        next();
      }
    }
  ];

  exports.userValidatesignIn = [
  
   
    body("email")
      .isEmail()
      .withMessage("Enter a valid email")
      .trim()
      .escape(),
  
    body("password")
      .exists()
      .trim()
      .escape(),
  
   
    (req, res, next) => {
      const errors = validationResult(req);
     
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
      } else {
        next();
      }
    }
  ];