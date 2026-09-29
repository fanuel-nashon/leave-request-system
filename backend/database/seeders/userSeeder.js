const db=require('../../src/config/database');
const { hashPassword } = require('../../src/helpers/hash');

async function run() {
    const hashedPassword = await hashPassword('ChangeMe123!');
    await db.query(
        'INSERT IGNORE INTO users (email, password, role_id) VALUES (?,?, (SELECT id FROM roles WHERE name="superadmin"))',
        ['admin@example.com', hashedPassword]
    );
    console.log('Users seeded');
}

module.exports = { run };