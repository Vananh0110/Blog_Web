const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.post("/login", controller.loginUser);
router.post("/register", controller.registerUser);
router.get("/users", controller.getUsers);

module.exports = router;
