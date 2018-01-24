const footers = require('../data/footers.js');
let tFooter;

exports.action = (msg, args) => {
    tFooter = Math.floor(Math.random() * 15) == 0 ? {
        text: footers[Math.floor(Math.random() * footers.length)],
        icon_url: 'https://i.imgur.com/J18o0Vc.png'
    } : null;
    msg.channel.send("", {
        embed: {
            color: 35071,
            fields: [{
                    name: "m.help",
                    value: "Displays a list of helpful commands.",
                    inline: true
                },
                {
                    name: "m.dex",
                    value: "`m.dex mew`\n`m.dex 606`\nShows information about a Pokémon.",
                    inline: true
                },
                {
                    name: "m.ability",
                    value: "`m.ability static`\nShows information about an ability.",
                    inline: true
                },
                {
                    name: "m.item",
                    value: "`m.item soothe bell`\nShows information about an item.",
                    inline: true
                },
                {
                    name: "m.move",
                    value: "`m.move quick attack`\nShows information about a move.",
                    inline: true
                },
                {
                    name: "m.type",
                    value: "`m.type psychic`\nShows the damage modifiers for a set\nof types. Multiple types can be entered.",
                    inline: true
                },
                {
                    name: 'm.convert',
                    value: '`m.convert 5 km to mi`\nConvert a value between two units.',
                    inline: true
                },
                {
                    name: 'm.user-info',
                    value: '`m.user-info <mention>`\nDisplays information on a user.',
                    inline: true
                }
            ],
            footer: tFooter
        }
    })
}