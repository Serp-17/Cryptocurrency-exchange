import React, { useEffect, useState, memo } from 'react';
import { getCoins } from '../../api/coins';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './style.css';
import CustomSelect from '../Select';

function Banner() {
    const [coins, setCoins] = useState([]);
    const [selectedCoins, setSelectedCoins] = useState({
        sendCoin: null,
        getCoin: null
    });

    const navigate = useNavigate();

    useEffect(()=> {
        getCoins().then(data => {
            setCoins(data.slice(0, 25))
        })
    }, [])

    const handleChangeSelect = (value, name) => {
        console.log(selectedCoins)
        setSelectedCoins({
            ...selectedCoins,
            [name]: value
        })
    }

    const handleSubmit = () => {
        navigate(`/change/?getCoin=${selectedCoins.getCoin}&sendCoin=${selectedCoins.sendCoin}`);
    }

    const coinsArray = () => {
        if (coins.length) {
            return coins.map((item) => ({
                label: `${item.symbol} - ${item.name}`,
                name: item.id
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
                <div className="d-flex justify-content-center align-items-center pt-5 pb-5">
                    <div className="wrapperSelect">
                        <CustomSelect
                            options={coinsArray()}
                            handleChange={handleChangeSelect}
                            name="sendCoin"
                        />
                    </div>
                    <div className="wrapperSelect">
                        <CustomSelect
                            options={coinsArray()}
                            handleChange={handleChangeSelect}
                            name="getCoin"
                        />
                    </div>
                    <Button variant="success" className="text-uppercase" onClick={handleSubmit}>
                        Exchange
                    </Button>
                </div>
            </Container>
        </div>
    );
}

export default memo(Banner);
