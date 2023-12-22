import {IMessage} from "../shared/types/message";
import {convertMilliseconds} from "../shared/helpers/convertMilliseconds";
import {bot} from "../index";

export const manorLordsTimerAction = async (msg: IMessage)=>{
        const releaseDate = new Date('April 26, 2024')
        const releaseDateInSeconds = releaseDate.getTime()
        const currentDateInSeconds = new Date().getTime()
        const difference = releaseDateInSeconds- currentDateInSeconds
        await bot.sendMessage(msg.chat.id, convertMilliseconds(difference));
}