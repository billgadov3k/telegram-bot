const { Telegraf, Markup } = require('telegraf')
const bot = new Telegraf('5120141410:AAGP29nhiwlRus-Nz3b8Z5V-eo3Fz8ko_cE')


bot.start((ctx) => ctx.reply('Welcome'))
bot.command('play', async (ctx) => {
  ctx.reply('Вы готовы учавствовать в испытании?', Markup.inlineKeyboard([
    [Markup.button.callback('Да', 'yes')],
    [Markup.button.callback('Нет','no')]
  ]))

})

bot.action('yes', (ctx) => {
  ctx.reply('Отлично! Тогда еще пару вопросов перед началом')
})

bot.action('no', (ctx) => {
  ctx.reply('Нужно еще прокачаться )))')
})

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))