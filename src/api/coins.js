import { $authHost, $host } from './index';

export const getCoins = async () => {
    const { data } = await $host.get('/coins');
    return data;
}

export const getCoinOHLCY = async (coin) => {
    const { data } = await $host.get(`/coins/${ coin }/ohlcv/latest`);
    return data;
}
