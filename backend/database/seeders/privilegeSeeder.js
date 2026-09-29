const db = require('../../src/config/database');

async function run() {
    const privileges=['create_user', 'create_employee', 'view_reports', 'request_leave', 'grant_leave', 'revoke_leave'];
    for (const name of privileges){
        await db.query('INSERT IGNORE INTO privileges (name) VALUES (?)', [name]);
    }
    console.log('Privileges seeded');
}

module.exports = { run };