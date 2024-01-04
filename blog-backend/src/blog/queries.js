const getBlogs = "SELECT * FROM blogs";

const getBlogById = "SELECT * FROM blogs WHERE blog_id = $1";

const deleteBlogById = "DELETE FROM blogs WHERE blog_id = $1";

module.exports = {
    getBlogs, getBlogById, deleteBlogById
}