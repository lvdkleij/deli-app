import { keys } from './keys';
import { db_structure } from './db_structure';
import { Pool } from 'pg';

export const pgClient = new Pool({...keys});
pgClient.on('error', () => console.log('Lost PG connection'));

export async function setupDatabase() {
    async function createTable(tableName: string) {
        return pgClient
            .query(db_structure[tableName as keyof typeof db_structure])
            .catch((err: any) => console.log(err));
    }
    for (const tableName in db_structure) {
        const _ = await createTable(tableName)
    }
}


