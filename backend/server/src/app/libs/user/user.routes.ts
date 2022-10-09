import { Router } from "express";
import { UserController } from "./user-controller";

const router = Router();

router.post('/', UserController.insertUser)
router.get('/', UserController.getAllUsers)
router.post('/signIn', UserController.sendUserValidationToEmail)

export { router };