import { Router } from "express";
import { UserController } from "./user-controller";

const router = Router();

router.post('/', UserController.storeUser)
router.get('/', UserController.getAllUsers)

export { router };