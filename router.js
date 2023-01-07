        
        const router = require('express').Router();

        // Middlewares
        const {authBearerMiddleware} = require("./middlewares/authMiddleware");

        //Views 
        const UsersRouter = require('./views/UsersRouter');
        const PublicationsRouter = require('./views/PublicationsRouter');
        // const ContractsRouter = require('./views/ContractsRouter');
        const ServicesRouter = require('./views/ServicesRouter');
        const AuthRouter = require('./views/AuthRouter');

        //Routers
        router.use('/auth',AuthRouter);
        router.use(authBearerMiddleware);
        router.use('/users', UsersRouter); //User Routers
        router.use('/publications', PublicationsRouter); // Publications Routers
        // router.use('/contracts', ContractsRouter);
        router.use('/services',ServicesRouter);
       

        module.exports = router;