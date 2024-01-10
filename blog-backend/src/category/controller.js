const pool = require('../../db');
const queries = require('./queries')
const getCategories = (req, res) => {
    pool.query(queries.getCategories, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
}

const getCategoryById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getCategoryById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const deleteCategoryById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.deleteCategoryById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const createCategory = (req, res) => {
    const {category_name} = req.body;

    pool.query(queries.createCategory, [category_name], (error, results) => {
        if (error) throw error;
        res.status(201).json(results.rows[0]);

    })
}

module.exports = {
    getCategories, getCategoryById, deleteCategoryById, createCategory
}
