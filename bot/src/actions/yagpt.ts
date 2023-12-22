import {IMessage} from "../shared/types/message";
import {yagptResource} from "../resources/yagpt";
import {bot} from "../index";
import {yagptMenuItem} from "../shared/consts/commands";
import {yagptEndpoints} from "../resources/yagpt/endpoints";

export const yagptAction = async (msg: IMessage)=>{
    if(msg.text===yagptMenuItem.command){
        await bot.sendMessage(msg.chat.id, 'Для сообщения в Yandex GPT, напишите свой вопрос с припиской /yagpt')
    }

    if(msg.text.includes('/yagpt')){
        const text = msg.text.replace('/yagpt', '')
        if(!text){
            return await bot.sendMessage(msg.chat.id, 'Осел вопрос напиши с припиской /yagpt (example: /yagpt Почему я не ты?)')
        }

        const res = await yagptResource({path: yagptEndpoints.v1.completion, params: {text}})
        console.info(res.data)
        await bot.sendMessage(msg.chat.id, res.result?.alternatives[0].message.text)
    }
}