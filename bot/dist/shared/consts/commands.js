"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MENU = exports.setTimeWeatherMessage = exports.setGeoMenuItem = exports.manorLordTimerMenuItem = exports.yagptMenuItem = exports.startMenuItem = void 0;
exports.startMenuItem = {
    description: 'Запуск бота',
    command: '/start'
};
exports.yagptMenuItem = {
    description: 'Yandex GPT',
    command: '/yandex_gpt'
};
exports.manorLordTimerMenuItem = {
    description: 'Таймер до выхода Manor Lords',
    command: '/manor_lords_timer'
};
exports.setGeoMenuItem = {
    description: 'Закрепить геолокацию',
    command: '/set_geo'
};
exports.setTimeWeatherMessage = {
    description: 'Установить время сообщения прогноза погоды',
    command: '/set_time_weather_message'
};
exports.MENU = [
    exports.startMenuItem,
    exports.yagptMenuItem,
    exports.manorLordTimerMenuItem,
    exports.setGeoMenuItem,
    exports.setTimeWeatherMessage
];
//# sourceMappingURL=commands.js.map