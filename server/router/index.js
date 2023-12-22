const Router = require('express').Router;
const userController = require('../enteties/User/controllers/user-controller');

const router = new Router();

router.get('/users/all', userController.getAllUsers);
router.post('/users/one', userController.getOneUser);

module.exports = router;