import {bot} from "../index";
import {IMessage} from "../shared/types/message";

require('dotenv').config();

const DENIS_SECOND_ACC_ID = process.env.DENIS_SECOND_ACC_ID

export const messageLogAction = async (msg: IMessage)=>{
    await bot.sendMessage(DENIS_SECOND_ACC_ID, `Пользователь @${msg.from.username} отправил сообщение:\n`+
        '\n' +
        `${msg.text}`)
}