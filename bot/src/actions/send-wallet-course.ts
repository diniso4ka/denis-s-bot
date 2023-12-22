import {bot} from "../index";
import {format} from "date-fns";
import {USERS_WITH_PERMISSIONS} from "../shared/consts/users-with-permissions";
import {cbrResource} from "../resources/cbr";
import {cbrEndpoints} from "../resources/cbr/endpoints";

const MESSAGE_TIME = '21:33'

export const sendWalletCourseAction = async ()=>{
    let wasSend = false
    setInterval(()=>{
        USERS_WITH_PERMISSIONS.forEach(async (user)=>{
            if(MESSAGE_TIME === format(new Date(),'HH:mm') && !wasSend){
                const response = await cbrResource({path: cbrEndpoints.daily})
                bot.sendMessage('', response.Valute.USD)
                wasSend = true

            } else if(MESSAGE_TIME !== format(new Date(),'HH:mm')){
                wasSend = false
            }
        })
    },1000)
}