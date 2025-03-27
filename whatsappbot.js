const { Client, LocalAuth } = require("whatsapp-web.js");
// Initialize the bot
const client = new Client({
authStrategy: new LocalAuth(), // Saves session so you don't need to scan QR every time
});
client.on("qr", (qr) => {
const qrcode = require("qrcode-terminal");
qrcode.generate(qr, { small: true }); // Display QR code in the terminal
console.log("📌 Scan this QR Code to log in:");
});
client.on("ready", () => {
console.log("✅ Bot is ready!");
});

client.on("message", (message) => {
// Ignore messages from group chats
if (message.isGroupMsg) {
console.log("📢 Ignoring group message...");
return; // Stop execution if it's a group chat
}
console.log(📩 Received personal message: ${message.body});
// Automated responses for personal messages
if (message.body.toLowerCase() === "hi") {
message.reply("Hi there😊");
} else if (message.body.toLowerCase() === "good morning") {
message.reply("Good morning");
} else if (message.body.toLowerCase() === "where are you") {
message.reply("im in home");
} else {
message.reply("I did not understand that. Please try again!");
}
});
// Start the bot
client.initialize();
