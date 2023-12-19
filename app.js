  const { Telegraf } = require('telegraf');
  const jwt = require('jsonwebtoken');

  const bot = new Telegraf('<telebot-token>');

  bot.command('start', (ctx) => {
    const userId = ctx.from.id;

    const token = jwt.sign({ userId }, 'EWGRWWNSAR', { expiresIn: '24h' });

    ctx.reply(`Here is your JWT token: ${token}`);
  });

  bot.launch().then(() => {
    console.log('Bot is running!');
  });
