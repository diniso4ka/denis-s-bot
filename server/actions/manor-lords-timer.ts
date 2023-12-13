import {IMessage} from "../shared/types/message";
import {convertMilliseconds} from "../shared/helpers/convertMilliseconds";
import {bot} from "../index";
import {manorLordTimerMenuItem} from "../shared/consts/commands";

export const ManorLordsTimerAction = async (msg: IMessage)=>{
    if(msg.text === manorLordTimerMenuItem.command){
        const releaseDate = new Date('April 26, 2024')
        const releaseDateInSeconds = releaseDate.getTime()
        const currentDateInSeconds = new Date().getTime()
        const difference = releaseDateInSeconds- currentDateInSeconds
        await bot.sendMessage(msg.chat.id, convertMilliseconds(difference));
    }
}