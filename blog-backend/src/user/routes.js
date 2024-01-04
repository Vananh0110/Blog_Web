const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.post("/login", controller.loginUser);
router.post("/register", controller.registerUser);

module.exports = router;