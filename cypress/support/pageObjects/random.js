class RandomValues {
    randomString(length) {
        let result = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
export const randomValues = new RandomValues();
