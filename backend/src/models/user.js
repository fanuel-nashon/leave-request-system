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
    },

    async setResetToken(id, tokenHash, expiresAt){
        try {
            await db.query(
                `UPDATE users SET reset_token_hash=?, reset_token_expires=? WHERE id=?`,
                [tokenHash, expiresAt, id]
            );
        } catch (err) {
            throw new Error(`Error setting reset token: ${err.message}`);
        }
    },

    async findByResetToken(tokenHash){
        try {
            const [rows] = await db.query(
                `SELECT id, email FROM users WHERE reset_token_hash=? AND reset_token_expires > NOW()`,
                [tokenHash]
            );
            return rows[0] || null;
        } catch(err){
            throw new Error(`Error fetching user by reset token: ${err.message}`);
        }
    },

    async updatePassword(id, hashedhPassword){
        try {
            await db.query(
                `UPDATE users SET password=?, reset_token_hash=NULL, reset_token_expires=NULL WHERE id=?`,
                [hashedhPassword, id]
            );
        } catch (err){
            throw new Error(`Error updating user password: ${err.message}`);
        }
    }

};

