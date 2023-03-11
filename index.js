const {Telegraf} = require('telegraf');

const bot = new Telegraf(process.env.TELEGRAM);

bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'hello! Welcome to Nisara, ' + ctx.from.first_name, {
    })
})

bot.launch();