const db = require('../config/database');

const User = {
    async findAll(){
        const result = await db.query(
            `SELECT id, username, email, role_id FROM users ORDER BY id ASC`
        );
        return result.rows;
    },

    async findById(id){
        const result = await db.query(
            `SELECT id, username, email, role_id FROM users WHERE id=$1`,
            [id]
        );
        return result.rows[0] || null;
    }
}

module.exports=User;