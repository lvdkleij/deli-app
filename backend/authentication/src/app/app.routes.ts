import { Router } from "express";

import user from './libs/user';

const rootRouter = Router();

rootRouter.use('/user', user);
// rootRouter.use('/', (req, res) => {res.send({ message: 'OK' })});

export default rootRouter;