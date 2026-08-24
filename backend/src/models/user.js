const db = require('../config/database');

const User = {
    async findAll() {
        try {
            const result = await db.query(
                `SELECT id, username, email, role_id FROM users ORDER BY id ASC`
            );
            return result.rows;
        } catch (err) {
            throw new Error(`Error fetching users: ${err.message}`);
        }
    },

    async findById(id) {
        try {
            const result = await db.query(
                `SELECT id, username, email, role_id FROM users WHERE id=$1`,
                [id]
            );
            return result.rows[0] || null;
        } catch (err) {
            throw new Error(`Error fetching user by ID: ${err.message}`);
        }
    },

    async findByEmail(email) {
        try {
            const result = await db.query(
                `SELECT id, username, email, role_id, password FROM users WHERE email=$1`,
                [email]
            );
            return result.rows[0] || null;
        } catch (err) {
            throw new Error(`Error fetching user by email: ${err.message}`);
        }
    }
};

module.exports = User;
