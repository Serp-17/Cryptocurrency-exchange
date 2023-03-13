import { $host } from './index';

export const getCoins = async () => {
    const { data } = await $host.get('/data/top/totalvolfull?limit=10&tsym=USD');
    return data;
}

export const getCoinOHLCY = async (coin) => {
    const { data } = await $host.get(`/coins/${ coin }/ohlcv/latest`);
    return data;
}
