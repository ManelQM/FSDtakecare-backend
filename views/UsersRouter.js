

    const express = require('express');
    const router = express.Router();

    router.post('/signin', AuthController.signIn);
    router.post('/signup', AuthController.signUp);
    
    module.exports = router;