import {IMessage} from "../shared/types/message";
import {bot} from "../index";
import {startMenuItem} from "../shared/consts/commands";

export const StartAction = async (msg: IMessage)=>{
    if(msg.text===startMenuItem.command){
        await bot.sendMessage(msg.chat.id, 'Здраствуй босс');
    }
}