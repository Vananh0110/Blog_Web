const getCategories= "SELECT * FROM categories";

const getCategoryById = "SELECT * FROM categories WHERE category_id = $1";

const deleteCategoryById = "DELETE FROM categories WHERE category_id = $1";

const createCategory = "INSERT INTO categories (category_name) VALUES ($1) RETURNING *"

module.exports = {
    getCategories, getCategoryById, deleteCategoryById, createCategory
}
