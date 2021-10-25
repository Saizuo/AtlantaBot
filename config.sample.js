module.exports = {
	/* The token of your Discord Bot */
	token: "ODUxNDU1NzEwOTE5MjYyMzA4.YL4h7A.uqq3B08a34fke1R1PUh3u01YexQ",
	/* For the support server */
	support: {
		id: "876113814314164256", // The ID of the support server
		logs: "877818945464336404", // And the ID of the logs channel of your server (new servers for example)
	},
	/* Dashboard configuration */
	dashboard: {
		enabled: false, // whether the dashboard is enabled or not
		secret: "XXXXXXXXXXX", // Your discord client secret
		baseURL: "https://mikuni.gq", // The base URl of the dashboard
		logs: "XXXXXXXXXXX", // The channel ID of logs
		port: 8080, // Dashboard port
		expressSessionPassword: "XXXXXXXXXXX", // Express session password (it can be what you want)
		failureURL: "https://mikuni.gq" // url on which users will be redirected if they click the cancel button (discord authentication)
	},
	mongoDB: "mongodb+srv://Saizuo:U8DBoSbkCMA88o3p@rpbot.jvt2y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", // The URl of the mongodb database
	prefix: ">", // The default prefix for the bot
	/* For the embeds (embeded messages) */
	embed: {
		color: "#fc5dea", // The default color for the embeds
		footer: "Sakura" // And the default footer for the embeds
	},
	/* Bot's owner informations */
	owner: {
		id: "892415353773232129", // The ID of the bot's owner
		name: "Saizuo" // And the name of the bot's owner
	},
	/* DBL votes webhook (optional) */
	votes: {
		port: 5000, // The port for the server
		password: "XXXXXXXXXXX", // The webhook auth that you have defined on discordbots.org
		channel: "XXXXXXXXXXX" // The ID of the channel that in you want the votes logs
	},
	/* The API keys that are required for certain commands */
	apiKeys: {
		// BLAGUE.XYZ: https://blague.xyz/
		blagueXYZ: "XXXXXXXXXXX",
		// FORTNITE TRN: https://fortnitetracker.com/site-api
		fortniteTRN: "XXXXXXXXXXX",
		// FORTNITE FNBR: https://fnbr.co/api/docs
		fortniteFNBR: "XXXXXXXXXXX",
		// DBL: https://discordbots.org/api/docs#mybots
		dbl: "XXXXXXXXXXX",
		// AMETHYSTE: https://api.amethyste.moe
		amethyste: "XXXXXXXXXXX",
		// SENTRY: https://sentry.io (this is not required and not recommended - you can delete the field)
		sentryDSN: "XXXXXXXXXXX"
	},
	/* The others utils links */
	others: {
		github: "https://github.com/Saizuo", // Founder's github account
		donate: "https://patreon.com/Mikuni" // Donate link
	},
	/* The Bot status */
	status: [
		{
			name: "@Sakura In Anime Universe",
			type: "LISTENING"
		},
		{
			name: "With Anime Universe",
			type: "PLAYING"
		}
	]
};
