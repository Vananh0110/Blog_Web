const getBlogs = "SELECT * FROM blogs";

const getBlogById = "SELECT * FROM blogs WHERE blog_id = $1";

const deleteBlogById = "DELETE FROM blogs WHERE blog_id = $1";

const createBlog = "INSERT INTO blogs (user_id, title, description, information, category_id, imageUrl) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";

const updateBlogById = "UPDATE blogs SET title = $1, decription= $2, content = $3, category_id=$4, imageUrl = $5 WHERE blog_id = $6";

module.exports = {
    getBlogs, getBlogById, deleteBlogById, createBlog, updateBlogById
}
