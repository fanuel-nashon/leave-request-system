const db = require('../config/database');

const User = {
    async findAll() {
        try {
            const [rows] = await db.query(
                `SELECT id, email, role_id FROM users ORDER BY id ASC`
            );
            return rows;
        } catch (err) {
            throw new Error(`Error fetching users: ${err.message}`);
        }
    },

    async findById(id) {
        try {
            const [rows] = await db.query(
                `SELECT id, email, role_id FROM users WHERE id=?`,
                [id]
            );
            return rows[0] || null;
        } catch (err) {
            throw new Error(`Error fetching user by ID: ${err.message}`);
        }
    },

    async findByEmail(email) {
        try {
            const [rows] = await db.query(
                `SELECT id, email, role_id, password FROM users WHERE email=?`,
                [email]
            );
            return rows[0] || null;
        } catch (err) {
            throw new Error(`Error fetching user by email: ${err.message}`);
        }
    },

    async create(email, password){
        try{
            const [result] = await db.query(
                `INSERT INTO users (email, password) VALUES (?, ?)`,
                [email, password]
            );
            return { id: result.insertId, email };
        } catch (err) {
            throw new Error(`Error inserting user: ${err.message}`);
        }
    }
};

module.exports = User;
