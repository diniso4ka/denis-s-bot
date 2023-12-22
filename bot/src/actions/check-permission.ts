import {IMessage} from "../shared/types/message";
import {bot} from "../index";
import {IUser} from "../shared/types/user";

export const checkPermissionAction = async (msg: IMessage, user: IUser)=>{
    if(!user){
        bot.sendMessage(msg.chat.id, `Permission denied, для получения доступа отправьте @penaplast3104 {chatId: ${msg.chat.id}, username: ${msg.from.username}}`)
        throw new Error('permission denied')
    }
}