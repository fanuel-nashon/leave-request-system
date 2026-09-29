require('dotenv').config();

const seeders = [
    require('./roleSeeder'),
    require('./privilegeSeeder'),
    require('./userSeeder'),
];

async function main() {
    for (const seeder of seeders) {
        await seeder.run();
    }
    console.log('All seeders completed');
    process.exit(0);
}

main().catch((err)=>{
    console.error('Seeding failed:', err);
    process.exit(1);
});