const bcrypt = require('bcrypt');
const pool = require('../../db');
const { registerQuery, loginQuery, getUsersQuery } = require('./queries');

const registerUser = async (req, res) => {
    try {
        const { user_name, user_email, user_password } = req.body;

        const existingUser = await pool.query(loginQuery, [user_email]);
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ message: 'User already exists with this email' });
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(user_password, saltRounds);

        const newUser = await pool.query(registerQuery, [user_name, user_email, hashedPassword]);

        res.status(201).json({ message: 'User registered successfully', user: newUser.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const loginUser = async (req, res) => {
    try {
        const { user_email, user_password } = req.body;
        const user = await pool.query(loginQuery, [user_email]);
        if (user.rows.length === 0) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isPasswordMatch = await bcrypt.compare(user_password, user.rows[0].user_password);
        if (!isPasswordMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        res.status(200).json({ message: 'Login successful', user: user.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getUsers = (req, res) => {
    pool.query(getUsersQuery, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
}

module.exports = { registerUser, loginUser, getUsers };
