export function convertMilliseconds(milliseconds: number) {
    const seconds = Math.floor((milliseconds / (1000)) % 60);
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

    return `${days}д ${hours}ч ${minutes}м ${seconds}c`
}