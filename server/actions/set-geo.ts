import {IMessage} from "../shared/types/message";
import {bot} from "../index";
import {setGeoMenuItem} from "../shared/consts/commands";

export const SetGeoAction = async (msg: IMessage)=>{
    if(msg.text === setGeoMenuItem.command){
        bot.sendMessage(msg.chat.id, 'Отправьте вашу геолокацию')
    }

    if(msg.location){
        console.info(msg.location)
        bot.sendMessage(msg.chat.id, `Ваши координаты: latitude: ${msg.location.latitude}, longitude: ${msg.location.longitude}`)
        bot.sendMessage(msg.chat.id, `WIP`)
    }
}