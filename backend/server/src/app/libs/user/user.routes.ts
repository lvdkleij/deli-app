import { sayHi } from "./user-controller";
import { Router } from "express";

const router = Router();

router.get('/all', sayHi)

export { router };