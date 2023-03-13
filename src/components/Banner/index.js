import React, { useEffect, useState, memo } from 'react';
import { getCoins } from '../../api/coins';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './style.css';
import CustomSelect from '../Select';

function Banner() {
    const [coins, setCoins] = useState([]);
    const navigate = useNavigate();
    const [selectedCoins, setSelectedCoins] = useState({
        sendCoin: null,
        getCoin: null
    });

    useEffect(()=> {
        getCoins().then(data => {
            const coins = data.Data.map((coin) => {
                const obj = {
                    name: coin.CoinInfo.Name,
                    fullName: coin.CoinInfo.FullName,
                    imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
                    price: coin.RAW.USD.PRICE.toFixed(3),
                    volume24Hour: parseInt(coin.RAW.USD.VOLUME24HOUR),
                };
                return obj;
            });
            setCoins(coins);
        })
    }, [])

    const handleChange = (value, name) => {
        setSelectedCoins({
            ...selectedCoins,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        navigate(`/change/?getCoin=${selectedCoins.getCoin}&sendCoin=${selectedCoins.sendCoin}`);
    }

    const coinsArray = () => {
        console.log(coins)
        if (coins.length) {
            return coins.map((item) => ({
                label: `${item.name} - ${item.fullName}`,
                name: item.name
            }))
        }
        return [];
    }

    return (
        <div className="bannerWrapper">
            <Container>
                <div className="bannerText">
                    24/7 automatic cryptocurrency exchanger
                </div>
                <form onSubmit={onSubmit}>
                    <div className="d-flex justify-content-center align-items-center pt-5 pb-5">
                        <div className="wrapperSelect">
                            <CustomSelect
                                options={coinsArray()}
                                name="sendCoin"
                                handleChangeCoin={handleChange}
                            />
                        </div>
                        <div className="wrapperSelect">
                            <CustomSelect
                                options={coinsArray()}
                                name="getCoin"
                                handleChangeCoin={handleChange}
                            />
                        </div>
                        <Button variant="success" className="text-uppercase" type="submit">
                            Exchange
                        </Button>
                    </div>
                </form>
            </Container>
        </div>
    );
}

export default memo(Banner);
