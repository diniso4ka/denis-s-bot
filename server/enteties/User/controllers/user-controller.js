const userService = require('./services/user-service');

class UserController {

    async getOneUser(req, res, next) {
        try {
            console.info(req.body)
            const user = await userService.getOneUser(req.body.username);

            return res.json(user);
        } catch (err) {
            next(err);
        }
    }

    async getAllUsers(req, res, next) {
        try {
            console.info(req.url)
            const users = await userService.getAllUsers();

            return res.json(users);
        } catch (err) {
            next(err);
        }
    }

    async setWeatherSendTime(req, res, next) {
        try {
            const response = await userService.setWeatherSendTime(req.body);

            return res.json(response);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new UserController();