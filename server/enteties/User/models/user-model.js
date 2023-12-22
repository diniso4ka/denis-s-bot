const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    chatId: { type: String, unique: true, required: true },
    username: { type: String, unique: true, required: true },
    weatherSendTime: { type: String },
    walletCourseSendTime: { type: String },
});

module.exports = model('User', UserSchema);