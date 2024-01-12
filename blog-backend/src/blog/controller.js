const pool = require('../../db');
const queries = require('./queries')
const getBlogs = (req, res) => {
    pool.query(queries.getBlogs, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
}

const getBlogById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getBlogById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows[0]);
    })
}

const deleteBlogById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.deleteBlogById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).send(`Blog deleted with id :${id}`);
    })
}

const createBlog = (req, res) => {
    const {user_id, title, description, information, category_id, imageUrl} = req.body;

    pool.query(queries.createBlog, [user_id, title, description, information, category_id, imageUrl], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows[0]);
    });
}


const updateBlogById = (req, res) => {
    const id = req.params.id;
    const {title, description, information, category_id, imageUrl} = req.body;

    pool.query(queries.updateBlogById, [title, description, information, category_id, imageUrl, id], (error, results) => {
        if(error) throw error;
        res.status(200).send(`Blog was updated with id: ${id}`);
    })


}
module.exports = {
    getBlogs, getBlogById, deleteBlogById, createBlog, updateBlogById
}
