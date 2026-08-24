const db = require('../config/database');

const User = {
    async findAll() {
        try {
            const result = await db.query(
                `SELECT id, email, role_id FROM users ORDER BY id ASC`
            );
            return result.rows;
        } catch (err) {
            throw new Error(`Error fetching users: ${err.message}`);
        }
    },

    async findById(id) {
        try {
            const result = await db.query(
                `SELECT id, email, role_id FROM users WHERE id=$1`,
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
                `SELECT id, email, role_id, password FROM users WHERE email=$1`,
                [email]
            );
            return result.rows[0] || null;
        } catch (err) {
            throw new Error(`Error fetching user by email: ${err.message}`);
        }
    },

    async create(email, password){
        try{
            const insertUser = await db.query(
                `INSERT INTO users (email, password) VALUES ($1,$2) RETURNING id, email`,
                [email, password]
            );
            return insertUser.rows[0];
        } catch (err) {
            throw new Error(`Error inserting user: ${err.message}`);
        }
    }
};

module.exports = User;
