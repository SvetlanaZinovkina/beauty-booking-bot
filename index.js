import 'dotenv/config';
import { Bot } from 'grammy';
import { I18n } from '@grammyjs/i18n';

const bot = new Bot(process.env.BOT_TOKEN);

const i18n = new I18n({
  defaultLocale: 'ru',
  directory: 'locales',
});

bot.use(i18n.middleware());

bot.command('start', async (ctx) => {
  await ctx.reply('Hi! I can only read messages that explicitly reply to me!', {
    reply_markup: { force_reply: true },
  });
});

bot.start();
