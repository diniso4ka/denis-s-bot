import {IMessage} from "./shared/types/message";
import {
    MENU,
    manorLordTimerMenuItem,
    setGeoMenuItem,
    setTimeWeatherMessage,
    startMenuItem,
    yagptMenuItem
} from "./shared/consts/commands";
import {checkPermissionAction, yagptAction, startAction, setGeoAction, manorLordsTimerAction, sendWalletCourseAction, messageLogAction, setTimeWeatherMessageAction} from './actions'
import {denissBotResource} from './resources/deniss-server'
import {denissServerEndpoints} from "./resources/deniss-server/endpoints";

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
        await messageLogAction(msg)

        // CHECK PERMISSION BLOCK
        const user = await denissBotResource({path: denissServerEndpoints.users.one, params: {username: msg.from.username}})
        await checkPermissionAction(msg, user)

        if(msg.text.includes('/yagpt') || msg.text === yagptMenuItem.command){
            await yagptAction(msg)
        }

        // SIMPLE COMMANDS
        switch (msg.text){
            case startMenuItem.command:
                await startAction(msg)
                break
            case manorLordTimerMenuItem.command:
                await manorLordsTimerAction(msg)
                break
            case setGeoMenuItem.command:
                await setGeoAction(msg)
                break
            case setTimeWeatherMessage.command:
                await setTimeWeatherMessageAction(msg)
                break
        }
    }catch (err){
        console.log(err)
    }

})

bot.on('location', async (msg: IMessage) => {
    try{
        await setGeoAction(msg)
    }catch (err){
        console.log(err)
    }
})