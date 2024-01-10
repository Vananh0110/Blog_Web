const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get("/", controller.getBlogs);
router.get("/:id", controller.getBlogById);
router.post("/", controller.createBlog);
router.delete("/:id", controller.deleteBlogById);
router.put("/:id", controller.updateBlogById);

module.exports = router;
