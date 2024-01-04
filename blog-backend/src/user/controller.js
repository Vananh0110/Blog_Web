const bcrypt = require('bcrypt');
const pool = require('../../db');
const { registerQuery, loginQuery } = require('./queries');

const registerUser = async (req, res) => {
    try {
        const { user_name, user_email, user_password } = req.body;

        // Kiểm tra xem user đã tồn tại hay không
        const existingUser = await pool.query(loginQuery, [user_email]);
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ message: 'User already exists with this email' });
        }

        // Hash mật khẩu trước khi lưu vào cơ sở dữ liệu
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(user_password, saltRounds);

        // Tạo user mới
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

        // Kiểm tra xem user có tồn tại không
        const user = await pool.query(loginQuery, [user_email]);
        if (user.rows.length === 0) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Kiểm tra mật khẩu
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

module.exports = { registerUser, loginUser };
