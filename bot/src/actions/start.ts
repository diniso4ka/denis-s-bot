import {IMessage} from "../shared/types/message";
import {bot} from "../index";

export const startAction = async (msg: IMessage)=>{
        await bot.sendMessage(msg.chat.id, 'Здраствуй босс');
}