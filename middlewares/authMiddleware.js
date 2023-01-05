
    const jsonwebtoken = require("jsonwebtoken");

    //Here is  how the middleware authenticate the User


    const authBearerMiddleware = (req, res, next) => {
      const authentication = req.headers["authorization"];
      const token = authentication && authentication.split(" ")[1];
      if (token == null) {
        return res
          .status(401)
          .json({ message: "Not logged, please try to log correctly." });
      }
    
      try {
        jsonwebtoken.verify(token, process.env.JWT_TOKEN_SECRET);
        if (token.exp < Date.now()) {
          return res
            .status(401)
            .json({ message: "Log in timed out, please log in again" });
        }
        next();
      } catch (error) {
        res.status(400).send({ message: "Invalid token!" });
      }
    };
      // Middleware for roles
      const isValidRole = (role) => (req,res,next) => {

        if(req.auth?.role === role) {
            next();
        }else {
            res.status(403).json({message:"Not Authorized :("})
        }

      }

      //Middleware works here giving permissions and access to some areas

      const isValidUser = (email) => async (req,res,next) => {
        
        email = req.params.email || req.body.email;
        console.log(email);
        console.log(req.auth.email);
        
        if(req.auth?.email === email) {
            next();

        } else {
            res.status(403).json({message: "ACCESS DENIED. NOT AUTHORIZED"});
        }
      };


      const isValidUserId = (id) => async (req,res,next) => {
        id = req.params.id || req.body.id;
        console.log (id);
        console.log (req.auth.id);
        if (req.auth?.id == id) {
            next();
        } else {
            res.status(403).json({message: "Not authorized"})
        }
      };

      module.exports = {
        authBearerMiddleware,
        isValidRole,
        isValidUser,
        isValidUserId
      };

