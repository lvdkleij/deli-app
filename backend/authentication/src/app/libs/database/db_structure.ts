export const db_structure = {
    app_user: 
    `CREATE TABLE IF NOT EXISTS app_user (
        id integer generated always as identity,
        email varchar(60) not null unique, 
        name varchar(70) not null, 
        date_of_creation TIMESTAMP not null default CURRENT_TIMESTAMP,
        verified boolean not null default false,
        PRIMARY KEY (id)
    )`,
    user_verification:
    `CREATE TABLE IF NOT EXISTS user_verification (
        user_id integer REFERENCES app_user(id),
        code varchar(4) not null,
        valid_until TIMESTAMP not null,
        PRIMARY KEY (user_id)
    )`,
    user_token:
    `CREATE TABLE IF NOT EXISTS user_token (
        user_id integer REFERENCES app_user(id),
        token varchar(128) not null,
        PRIMARY KEY (user_id, token)
    )`,
}