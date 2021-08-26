const Command = require("../../base/Command.js"),
	Discord = require("discord.js"),
	Canvas = require("discord-canvas");

module.exports = class extends Command {
	constructor (client) {
		super(client, {
			name: "fortniteshop",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			
			memberPermissions: [],
			botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
			nsfw: false,
			ownerOnly: false,
			cooldown: 500
		});
	}

	async run(interaction, translate, data) {

		if(!data.config.apiKeys.fortniteFNBR || data.config.apiKeys.fortniteFNBR.length === "") {
			return message.error("misc:COMMAND_DISABLED");
		}

		const m = await message.sendT("misc:PLEASE_WAIT", null, {
			prefixEmoji: "loading"
		});

		const momentName = this.client.languages.find((language) => language.name === data.guild.language || language.aliases.includes(data.guild.language)).moment;
		const shop = new Canvas.FortniteShop();
		const image = await shop
			.setToken(data.config.apiKeys.fortniteFNBR)
			.setText("header", translate("general/fortniteshop:HEADER"))
			.setText("daily", translate("general/fortniteshop:DAILY"))
			.setText("featured", translate("general/fortniteshop:FEATURED"))
			.setText("date", translate("general/fortniteshop:DATE", {
				skipInterpolation: true
			}).replace("{{date}}", "{date}"))
			.setText("footer", translate("general/fortniteshop:FOOTER"))
			.lang(momentName)
			.toAttachment();
		const attachment = new Discord.MessageAttachment(image, "shop.png");

		const embed = new Discord.MessageEmbed()
			.setAuthor(translate("general/fortniteshop:HEADER", {
				date: message.printDate(new Date(Date.now()))
			}), this.client.user.displayAvatarURL({ size: 512, dynamic: true, format: "png" }))
			.attachFiles(attachment)
			.setImage("attachment://shop.png")
			.setColor(this.client.config.embed.color)
			.setFooter(this.client.config.embed.footer);
		await message.channel.send({ embeds: [embed] });
		await m.delete();
		return;
        
	}
};
