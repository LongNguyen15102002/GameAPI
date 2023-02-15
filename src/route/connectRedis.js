const redis = require("redis");
const redisclient = redis.createClient({
	socket: {
		host: '13.212.164.36',
		port: 6379
	},
	password: 'gami@2023',
	username: 'gcsdev' 	
});

(async () => {
	await redisclient.connect();
})();

console.log("Connecting to the Redis");

redisclient.on("ready", () => {
	console.log("Connected!");
});

redisclient.on("error", (err) => {
	console.log("Error in the Connection");
});


