import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { config } from '../config/index.js';
import { router } from './api/index.js';

const { port } = config.http;

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/api', router);
app.use('/api/v1', router);

export const init = () => {
	app.listen(port, () => {
		// eslint-disable-next-line no-console
		console.log(`InstaYa Server running @ localhost:${port}`);
	});
};
