import {IMessage} from "./shared/types/message";
import {MENU} from "./shared/consts/commands";
import {ManorLordsTimerAction} from "./actions/manor-lords-timer";
import {StartAction} from "./actions/start";
import {SetGeoAction} from "./actions/set-geo";

const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

export const bot = new TelegramBot(process.env.API_KEY_BOT, {
    polling: {
        interval: 300,
        autoStart: true
    }
});

bot.setMyCommands(MENU)

bot.on("polling_error", (err: string) => console.log(err));

bot.on('text', async (msg: IMessage) => {
    try{
        await StartAction(msg)
        await ManorLordsTimerAction(msg)
        await SetGeoAction(msg)
    }catch (err){
        console.log(err)
    }

})

bot.on('location', async (msg: IMessage) => {
    try{
        await SetGeoAction(msg)
    }catch (err){
        console.log(err)
    }
})