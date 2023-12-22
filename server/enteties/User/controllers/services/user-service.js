
const UserModel = require('../../models/user-model');


class UserService {
    async getAllUsers() {
        const usersData = await UserModel.find();
        if (!usersData) {
            throw ApiError.BadRequest('Произошла ошибка');
        }
        return usersData;
    }

    async getOneUser(username) {
        const userData = await UserModel.findOne({username});

        return userData;
    }

    async setWeatherSendTime({time, username}){
        const userData = await UserModel.findOne({ username });

        if (!userData) {
            throw ApiError.BadRequest();
        }

        await UserModel.updateOne({ accessLink }, { $set: { weatherSendTime: time } });
    }
}

module.exports = new UserService();