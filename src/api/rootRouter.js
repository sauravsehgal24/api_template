// Root router 
const express = require('express');

// Sub-Routes import
const mockRouter1 = require('./mockRouter1/mockRouter1');
const mockRouter2 = require('./mockRouter2/mockRouter2');

// Initialize root Router
const rootRouter = express.Router();

// Enable all sub-routes
rootRouter.use('/mock1', mockRouter1);
rootRouter.use('/mock2', mockRouter2);

module.exports = rootRouter;