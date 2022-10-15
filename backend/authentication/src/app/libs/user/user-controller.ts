import { pgClient } from "../database";
import { UserService } from "./user-service";
import nodemailer from 'nodemailer';

export class UserController {
    static async signUpUser(req: any, res: any) {
        console.log(req);
        const newUser: User = { ...req.body }
        
        let existingUser: any;
        await UserService.getUserByEmail(newUser.email)
            .then(_existingUser => _existingUser.length ? existingUser = _existingUser[0] : null)
            .catch(x => console.log(x));
        if (existingUser) {
            res.status(200).send({ type: 'ERROR', message: 'USER ALREADY EXISTS', description: 'User already exists in database', result: []});
            return;
        }

        let createdUser: any;
        await UserService.insertUser(newUser.email, newUser.name)
            .then(_createdUser => createdUser = _createdUser)
            .catch(x => console.log(x))
        if (!createdUser) { 
            res.status(200).send({ type: 'ERROR', message: 'COULD NOT CREATE USER VERIFICATION', description: 'Something went wrong while trying to create user verification', result: []});
            return;
        }
        let createdUserVerification: any;
        await UserService.insertVerificationByUserId(createdUser.id)
            .then(_createdUserVerification => createdUserVerification = _createdUserVerification)
            .catch(x => console.log(x));
        if (!createdUserVerification) { 
            res.status(200).send({ type: 'ERROR', message: 'COULD NOT CREATE USER VERIFICATION', description: 'Something went wrong while trying to create user verification', result: []});
            return;
        }
        
        UserController.generateVerificationEmail(createdUser.email, createdUserVerification.code);
        
        res.send({ type: 'SUCCESS', message: 'USER INSERTED', description: `User ${newUser.email} stored`, results: [{ validation_code__valid_until: createdUserVerification.valid_until }]})
    };

    static async signInUser(req: any, res: any) {
        const userEmail = req.body.email;
        const createNewValidationCode = req.body.createNewValidationCode;

        let existingUser: any;
        await UserService.getUserByEmail(userEmail)
            .then(_existingUser => _existingUser.length ? existingUser = _existingUser[0] : null)
            .catch(x => console.log(x));
        if (!existingUser) {
            res.status(200).send({ type: 'ERROR', message: 'USER DOES NOT EXIST', description: 'User does not exists in database', result: []});
            return;
        }


        let userVerification: any;
        await UserService.getVerificationByUserEmail(userEmail)
            .then(_userVerification => _userVerification.length ? userVerification = _userVerification[0] : null)
            .catch(x => console.log(x));
        if (!userVerification) {
            res.status(200).send({ type: 'ERROR', message: 'USER .......', description: 'User does exists in database', result: []});
            return;
        }

        if (createNewValidationCode || Date.now() >= userVerification.valid_until.getTime()) {

            let newUserVerification: any;
            await UserService.updateVerificationByUserId(existingUser.id)
                .then(_newUserVerification => newUserVerification = _newUserVerification)
                .catch(x => console.log(x));
            if (!newUserVerification) {
                res.status(200).send({ type: 'ERROR', message: 'USER .......', description: 'User does exists in database', result: []});
                return;
            }
        
            UserController.generateVerificationEmail(existingUser.email, newUserVerification.code);

            res.status(200).send({ results: [{ validation_code__valid_until: newUserVerification.valid_until }]});
            return;
        }

        res.status(200).send({ results: [{ validation_code__valid_until: userVerification.valid_until }]});
    }

    static async validateUser(req: any, res: any) {
        const userEmail = req.body.email;
        const validationCodeAttempt = req.body.validationCodeAttempt;

        let userVerification: any;
        await UserService.getVerificationByUserEmail(userEmail)
            .then(_userVerification => _userVerification.length ? userVerification = _userVerification[0] : null)
            .catch(x => console.log(x));
        if (!userVerification) {
            res.status(200).send({ type: 'ERROR', message: 'INVALID USER', description: 'User does not exists in database', result: []});
            return;
        }

        if (userVerification.code === validationCodeAttempt && Date.now() <= userVerification.valid_until.getTime()) {
            return res.status(200).send({ value: 'okey' })
        } else {
            res.status(200).send({ type: 'ERROR', message: 'INVALID VALIDATION CODE', description: 'Wrong validation code', result: []});
            return;
        }

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


    static generateVerificationEmail(to: string, verificationCode: string) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'testMailerLucas@gmail.com',
                pass: 'zjwjbwqkqqbyglis' // google account password'cZ8FvVg5YnJabWf'
            }
        })
        const mailOptions = {
            from: 'testMailerLucas@gmail.com',
            to,
            subject: "Verify sign in",
            text: `Hello there, please insert the below verification code in the app ${verificationCode}`
        }
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) { console.log(err); }
            console.log(info);
        });
    }

}

interface User {
    email: string;
    name: string;
    jwt_token: string;
}
