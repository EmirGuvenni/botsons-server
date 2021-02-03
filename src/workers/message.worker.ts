import MessageModel from '../models/message.model';
import mongoose from 'mongoose';

(async () => {
	try {
		await mongoose.connect(process.env.DB_URL!, {
			useNewUrlParser: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});

		console.log('[index] Connected to the database');
	}
	catch (err) {
		console.log(err);
	}
})()

let cycleCount = 0;

setInterval(async () => {
	cycleCount++;
	console.log(`Message cycle count: ${cycleCount}`);

	let messages = await MessageModel.find();

	messages.forEach((message: any) => {
		if (message.interval === 0) MessageModel.deleteOne({ id: message.id });
		else {
			message.interval--;
			message.save();
		}
	});
}, 60000);
