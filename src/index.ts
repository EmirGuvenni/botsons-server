import { config } from 'dotenv';
import { fork } from 'child_process';

config({path: './.env'});
register('message.worker');

function register(file: string) {
	fork(`${__dirname}/workers/${file}`);
}