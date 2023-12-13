import {IMessage} from "../shared/types/message";
import {bot} from "../index";
import {setTimeWeatherMessage} from "../shared/consts/commands";

export const SetTimeWeatherMessageAction = async (msg: IMessage)=>{
    if( msg.text===setTimeWeatherMessage.command ){
        bot.sendMessage(msg.chat.id, 'Напишите время в формате HH:mm (example- 12:00), для ежедневной рассылки прогноза погоды в вашем гео.')
        bot.sendMessage(msg.chat.id, 'WIP')
    }
}