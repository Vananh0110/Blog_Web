const getBlogs = "SELECT * FROM blogs";

const getBlogById = "SELECT * FROM blogs WHERE blog_id = $1";

const deleteBlogById = "DELETE FROM blogs WHERE blog_id = $1";

const createBlog = "INSERT INTO blogs (user_id, title, content, category_id, imageUrl) VALUES ($1, $2, $3, $4, $5) RETURNING *";

const updateBlogById = "UPDATE blogs SET title = $1, content = $2, category_id=$3, imageUrl = $4 WHERE blog_id = $5";

module.exports = {
    getBlogs, getBlogById, deleteBlogById, createBlog, updateBlogById
}
