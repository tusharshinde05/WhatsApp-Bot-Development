# WhatsApp-Bot-Development
Project Overview
This project focuses on automating WhatsApp messages using the whatsapp-web.js library. The bot can send predefined responses to specific messages, ignore group messages, and maintain a persistent login session for continuous operation.

Features
1. Automated Replies: Responds to predefined messages such as "hi," "good morning," and "where are you" with set responses. If the message is not recognized, it replies with a default response.
2. Personal Chat Handling: The bot processes only personal messages and ignores group chats.
3. Persistent Login: Uses LocalAuth to save session data, eliminating the need to scan the QR code every time.
4. QR Code Authentication: Displays a QR code for login upon starting the bot.
5. Console Logging: Logs received messages and bot status updates for debugging and monitoring.

Tech Stack
Node.js: Runtime environment for executing JavaScript code.
whatsapp-web.js: Library for interacting with WhatsApp Web API.
qrcode-terminal: Displays QR codes in the terminal for authentication.
