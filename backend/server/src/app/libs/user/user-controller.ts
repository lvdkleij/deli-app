import { pgClient } from "../database";
import { UserService } from "./user-service";
import nodemailer from 'nodemailer';

export class UserController {
    

    static async insertUser(req: any, res: any) {
        const newUser: User = {
            ...req.body,
            jwt_token: 1
        }
    
        const existingUser: any[] | null = await UserService.getUserByEmail(newUser.email);
        if (existingUser) {
            res.status(200).send({ type: 'ERROR', message: 'USER ALREADY EXISTS', description: 'User already exists in database', result: []});
            return;
        }
    
        const createdUserResponse: any[] | null = await UserService.insertUser(newUser.email, newUser.name, newUser.jwt_token);
        if (!createdUserResponse) {
            res.status(200).send({ type: 'ERROR', message: 'COULD NOT INSERT USER', description: 'Could not insert user', result: []});
            return;
        }
        const createdUser = createdUserResponse[0];
        const createdUserVerificationResponse: any[] | null = await UserService.insertVerificationByUserId(createdUser.id);
        if (!createdUserVerificationResponse) { 
            res.status(200).send({ type: 'ERROR', message: 'COULD ..... USER', description: 'Could not insert user', result: []});
            return;
         }
        const createdUserVerification = createdUserVerificationResponse[0];

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'testMailerLucas@gmail.com',
                pass: 'zjwjbwqkqqbyglis' // google account password'cZ8FvVg5YnJabWf'
            }
        })
        const mailOptions = {
            from: 'testMailerLucas@gmail.com',
            to: createdUser.email,
            subject: "Verify sign in",
            text: `Hello there, please insert the below verification code in the app ${createdUserVerification.code}`
        }
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) { console.log(err); }
            console.log(info);
        });
        
        res.send({ type: 'SUCCESS', message: 'USER INSERTED', description: `User ${newUser.email} stored`, results: [{ validation_code__valid_until: createdUserVerification.valid_until }]})
    };

    static async sendUserValidationToEmail(req: any, res: any) {
        const userEmail = req.body.email;

        const existingUserResponse: any[] | null = await UserService.getUserByEmail(userEmail);
        if (!existingUserResponse) {
            res.status(200).send({ type: 'ERROR', message: 'USER DOES NOT EXIST', description: 'User does exists in database', result: []});
            return;
        }
        const existingUser = existingUserResponse[0];
    
        const userVerificationResponse: { code: string, valid_until: Date}[] | null = await UserService.getVerificationByUserEmail(userEmail);
        if (!userVerificationResponse) {
            res.status(200).send({ type: 'ERROR', message: 'USER .......', description: 'User does exists in database', result: []});
            return;
        }
        const userVerification = userVerificationResponse[0];

        if (Date.now() >= userVerification.valid_until.getTime()) {
            console.log('not valid')
            await UserService.updateVerificationByUserId(existingUser.id);
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'testMailerLucas@gmail.com',
                    pass: 'zjwjbwqkqqbyglis' // google account password'cZ8FvVg5YnJabWf'
                }
            })
            const mailOptions = {
                from: 'testMailerLucas@gmail.com',
                to: existingUser.email,
                subject: "Verify sign in",
                text: `Hello there, please insert the below verification code in the app ${userVerification.code}`
            }
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) { console.log(err); }
                console.log(info);
            });
        }
        console.log('valid');

        res.status(200).send({ results: [{ validation_code__valid_until: userVerification.valid_until }]});

    }

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
