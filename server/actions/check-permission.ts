import {IMessage} from "../shared/types/message";
import {bot} from "../index";
import {USERS_WITH_PERMISSIONS} from "../shared/consts/users-with-permissions";

export const CheckPermissionAction = async (msg: IMessage)=>{
    if( USERS_WITH_PERMISSIONS.indexOf(msg.from.username)===-1){
        bot.sendMessage(msg.chat.id, 'У вас нет доступа, для получения обратитесь к @penaplast3104')
        throw new Error('permission denied')
    }
}