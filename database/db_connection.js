import 'dotenv/config';
import pg from 'pg';

const { Pool } = pg;

export const pool = new Pool({
    allowExitOnIdle: true,
    connectionString: process.env.CONNECTION_STRING
})

try {
    const response = await pool.query("SELECT NOW()");
    console.log("Database Connection successful!")
} catch (error) {
    console.log(`ERROR: ${error}`);
}