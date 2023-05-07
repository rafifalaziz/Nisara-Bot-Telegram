const { Telegraf, Markup } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.TELEGRAM);

bot.command('start', ctx => {
    ctx.reply('hello! Welcome to Nisara, '
        + ctx.from.first_name
        + ' \nWhat can i help you?',
        Markup.inlineKeyboard(
            [
                [Markup.button.callback('Hotline Kekerasan Rumah Tangga', 'rumahtangga')],[
                Markup.button.callback('Hotline Kekerasan Seksual', 'seksual')],[
                Markup.button.callback('Konsultasi Dokter', 'dokter')],[
                Markup.button.callback('Konsultasi Peer Counselor', 'counselor')],[
                Markup.button.callback('Tentang Nisara', 'aboutus')]
            ]
        )
    )
})

bot.telegram.sendMessage(process.env.IDUSER,"tes");

bot.action('rumahtangga', (ctx) => {
    ctx.reply('Hotline kekerasan rumah tangga');
});

bot.action('seksual', (ctx) => {
    ctx.reply('Hotline kekerasan seksual');
});

bot.action('dokter', (ctx) => {
    ctx.reply('Konsultasi dokter');
});

bot.action('counselor', (ctx) => {
    ctx.reply('Konsultasi peer counselor');
});

bot.action('aboutus', (ctx) => {
    ctx.reply('Tentang Nisara');
});

bot.launch();