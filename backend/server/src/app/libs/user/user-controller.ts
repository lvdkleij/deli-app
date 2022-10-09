import { pgClient } from "../database";
import { UserService } from "./user-service";

export class UserController {
    static async storeUser(req: any, res: any) {
        const body = req.body;
    
        const newUser: User = {
            ...body,
            jwt_token: 1
        }
    
        const existingUser: any[] | null = await UserService.getUserByEmail(newUser.email);
        if (existingUser) {
            res.status(200).send({ message: 'User already exists', result: []});
            return;
        }
    
        await UserService.insertUser(newUser.email, newUser.name, newUser.jwt_token);
    
        const createdUser: any[] | null = await UserService.getUserByEmail(newUser.email);
        const createdUserId = createdUser![0].id;
        await UserService.insertVerificationByUserId(createdUserId);
    
        const createdUserVerification: { code: string, valid_until: Date}[] | null = await UserService.getVerificationByUserEmail(newUser.email);
    
        res.send({ message: `User ${newUser.email} stored`, results: [{ validation_code__valid_until: createdUserVerification![0].valid_until }]})
    };

    static async getAllUsers(req: any, res: any) {
        pgClient.query(
            'SELECT * FROM app_user',
            (err, results) => {
                if (err) { console.log(err); };
                res.status(200).json(results.rows);
            }
        )
    }

}

interface User {
    email: string;
    name: string;
    jwt_token: string;
}
