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
        res.status(200).json(results.rows);
    })
}

const deleteBlogById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.deleteBlogById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).send(`Blog deleted with id :${id}`);
    })
}
module.exports = {
    getBlogs, getBlogById, deleteBlogById
}