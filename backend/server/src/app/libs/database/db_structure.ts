export const db_structure = {
    app_user: 
    `CREATE TABLE IF NOT EXISTS app_user (
        id SERIAL,
        email varchar(60) NOT NULL, 
        name varchar(70) NOT NULL, 
        date_of_creation DATE NOT NULL,
        verified boolean NOT NULL,
        unused_period DATE NOT NULL,
        jwt_token text,
        PRIMARY KEY (id)
    )`,
    user_verification:
    `CREATE TABLE IF NOT EXISTS user_verification (
        user_id integer REFERENCES app_user(id),
        code varchar(4) NOT NULL,
        valid_until DATE NOT NULL,
        PRIMARY KEY (user_id)
    )`,
    list: 
    `CREATE TABLE IF NOT EXISTS list (
        id SERIAL, 
        original_name varchar(30) NOT NULL,
        original_type varchar(30) NOT NULL,
        unused_period DATE NOT NULL,
        PRIMARY KEY (id)
    )`,
    user__list: 
    `CREATE TABLE IF NOT EXISTS user__list (
        user_id integer REFERENCES app_user(id), 
        list_id integer REFERENCES list(id), 
        list_overwrite_name varchar(30) NOT NULL,
        list_overwrite_type varchar(30) NOT NULL,
        PRIMARY KEY (user_id, list_id)
    )`,
    language:
    `CREATE TABLE IF NOT EXISTS language (
        code char(2) PRIMARY KEY,
        icon text
    )`,
    category:
    `CREATE TABLE IF NOT EXISTS category (
        id SERIAL PRIMARY KEY,
        icon text
    )`,
    language__category:
    `CREATE TABLE IF NOT EXISTS language__category (
        language_code char(2) REFERENCES language(code),
        category_id integer REFERENCES category(id),
        name varchar(30) NOT NULL,
        PRIMARY KEY (language_code, category_id)
    )`,
    sub_category:
    `CREATE TABLE IF NOT EXISTS sub_category (
        id SERIAL PRIMARY KEY,
        icon text
    )`,
    language__sub_category:
    `CREATE TABLE IF NOT EXISTS language__sub_category (
        language_code char(2) REFERENCES language(code),
        sub_category_id integer REFERENCES sub_category(id),
        name varchar(30) NOT NULL,
        PRIMARY KEY (language_code, sub_category_id)
    )`,
    product:
    `CREATE TABLE IF NOT EXISTS product (
        id SERIAL PRIMARY KEY,
        icon text
    )`,
    language__product:
    `CREATE TABLE IF NOT EXISTS language__product (
        language_code char(2) REFERENCES language(code),
        product_id integer REFERENCES product(id),
        name varchar(30) NOT NULL,
        PRIMARY KEY (language_code, product_id)
    )`,
    list__product:
    `CREATE TABLE IF NOT EXISTS list__product (
        list_id integer REFERENCES list(id),
        product_id integer REFERENCES product(id),
        description varchar(128),
        price real,
        amount smallint NOT NULL DEFAULT 1,
        quantity smallint,
        qunatity_type varchar(3),
        currency char(1),
        checked boolean NOT NULL DEFAULT false,
        PRIMARY KEY (list_id, product_id)
    )`
}