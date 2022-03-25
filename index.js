const { Telegraf, Markup } = require('telegraf')

const bot = new Telegraf('5120141410:AAGP29nhiwlRus-Nz3b8Z5V-eo3Fz8ko_cE')
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('Стикер'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.on('text', (ctx) => {
  // Explicit usage
  console.log(ctx.message)
  ctx.telegram.sendMessage(ctx.message.chat.id, `Копирую ${ctx.message.text}`)})

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))