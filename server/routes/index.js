const express = require('express');
const router = express.Router();
const catchallRoute = require('./catchall.routes');
const apiRouter = express.Router();
const chefRoutes = require('./chef.routes');
apiRouter.use('/chefs', chefRoutes);
router.use('/api', apiRouter)
  .use(catchallRoute);
module.exports = router;
