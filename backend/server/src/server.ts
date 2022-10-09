import express from 'express';
import bodyParser from 'body-parser';

import rootRouter from './app/app.routes';

import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/', rootRouter);

app.listen(6300, () => {
    console.log('Listening');
});