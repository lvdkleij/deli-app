import { pgClient } from "../database"

export class UserService {
    static async getUserByEmail(email: string): Promise<any[] | null> {
        if (!email) { return null; }
        return await pgClient.query(`SELECT * FROM app_user WHERE email=$1`, [email])
            .then(result => (result.rows && result.rows.length) ? result.rows : null)
    }
    
    static async insertUser(email: string, name: string, jwt_token: string): Promise<any[] | null> {
        if (!email || !name || !jwt_token) { return null; }
        return await pgClient.query('INSERT INTO app_user(name, email, jwt_token) VALUES($1, $2, $3)', [name, email, jwt_token])
            .then(result => result.rows);
    }
    
    static async insertVerificationByUserId(userId: number): Promise<any[] | null> {
        if (!userId) { return null; }
        return await pgClient.query(
            'INSERT INTO user_verification(user_id, code, valid_until) VALUES($1, $2, $3)',
            [userId, 1234, new Date(Date.now() + 60000)])
            .then(result => result.rows)
    }
    
    static async getVerificationByUserEmail(email: string): Promise<any[] | null> {
        if (!email) { return null; }
        return await pgClient.query(`SELECT * FROM user_verification WHERE user_id in (SELECT id FROM app_user where email=$1)`, [email])
            .then(result => result.rows)
    }
    

}

