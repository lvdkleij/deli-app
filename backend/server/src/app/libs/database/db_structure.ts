export const db_structure = {
    app_user: 
    `CREATE TABLE IF NOT EXISTS app_user (
        id integer generated always as identity,
        email varchar(60) not null unique, 
        name varchar(70) not null, 
        date_of_creation DATE not null default CURRENT_DATE,
        verified boolean not null default false,
        jwt_token text not null,
        PRIMARY KEY (id)
    )`,
    user_verification:
    `CREATE TABLE IF NOT EXISTS user_verification (
        user_id integer REFERENCES app_user(id),
        code varchar(4) not null,
        valid_until DATE not null,
        PRIMARY KEY (user_id)
    )`,
    list: 
    `CREATE TABLE IF NOT EXISTS list (
        id integer generated always as identity, 
        original_name varchar(30) not null,
        original_type varchar(30) not null,
        unused_period DATE not null,
        PRIMARY KEY (id)
    )`,
    user__list: 
    `CREATE TABLE IF NOT EXISTS user__list (
        user_id integer REFERENCES app_user(id), 
        list_id integer REFERENCES list(id), 
        list_overwrite_name varchar(30) not null,
        list_overwrite_type varchar(30) not null,
        PRIMARY KEY (user_id, list_id)
    )`,
    language:
    `CREATE TABLE IF NOT EXISTS language (
        code char(2) PRIMARY KEY,
        icon text
    )`,
    category:
    `CREATE TABLE IF NOT EXISTS category (
        id integer generated always as identity PRIMARY KEY,
        icon text
    )`,
    language__category:
    `CREATE TABLE IF NOT EXISTS language__category (
        language_code char(2) REFERENCES language(code),
        category_id integer REFERENCES category(id),
        name varchar(30) not null,
        PRIMARY KEY (language_code, category_id)
    )`,
    sub_category:
    `CREATE TABLE IF NOT EXISTS sub_category (
        id integer generated always as identity PRIMARY KEY,
        icon text
    )`,
    language__sub_category:
    `CREATE TABLE IF NOT EXISTS language__sub_category (
        language_code char(2) REFERENCES language(code),
        sub_category_id integer REFERENCES sub_category(id),
        name varchar(30) not null,
        PRIMARY KEY (language_code, sub_category_id)
    )`,
    product:
    `CREATE TABLE IF NOT EXISTS product (
        id integer generated always as identity PRIMARY KEY,
        icon text
    )`,
    language__product:
    `CREATE TABLE IF NOT EXISTS language__product (
        language_code char(2) REFERENCES language(code),
        product_id integer REFERENCES product(id),
        name varchar(30) not null,
        PRIMARY KEY (language_code, product_id)
    )`,
    list__product:
    `CREATE TABLE IF NOT EXISTS list__product (
        list_id integer REFERENCES list(id),
        product_id integer REFERENCES product(id),
        description varchar(128),
        price real,
        amount smallint not null default 1,
        quantity smallint,
        qunatity_type varchar(3),
        currency char(1),
        checked boolean not null default false,
        PRIMARY KEY (list_id, product_id)
    )`
}