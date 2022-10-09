
export const keys: KeysData = {
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT ? +process.env.PGPORT : 5432
};

interface KeysData {
    user?: string;
    host?: string;
    database?: string;
    password?: string;
    port?: number;
}