import { Router } from "express";
import { UserController } from "./user-controller";

const router = Router();

router.post('/signUp', UserController.signUpUser)
router.get('/', UserController.getAllUsers)
router.post('/signIn', UserController.signInUser)
router.post('/validateCode', UserController.validateUser)

export { router };