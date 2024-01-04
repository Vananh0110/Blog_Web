const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get("/", controller.getBlogs);
router.get("/:id", controller.getBlogById);
router.delete("/:id", controller.deleteBlogById);

module.exports = router;