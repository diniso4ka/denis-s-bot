export interface IMessage {
    message_id: string,
    from: {
        id: string,
        is_bot: boolean,
        first_name: string,
        username: string,
        language_code: string
    },
    chat: {
        id: string,
        first_name: string,
        username: string,
        type: string //TODO typing
    },
    date: number,
    text: string,
    location?:{
        latitude: number
        longitude: number
    }
}