const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getCategories)
router.get('/:id', controller.getCategoryById);
router.delete('/:id', controller.deleteCategoryById);
router.post('/', controller.createCategory);

module.exports = router;
