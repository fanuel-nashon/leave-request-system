const db = require('../../src/config/database');

async function run() {
    const roles=['manager','admin','superadmin', 'employee', 'hod'];
    for(const name of roles){
        await db.query('INSERT IGNORE INTO roles (name) VALUES (?)', [name]);
    }
    console.log('Roles seeded');
}

module.exports = { run };