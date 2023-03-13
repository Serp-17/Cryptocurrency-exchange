import React, {
    memo,
    useEffect,
    useState
} from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import FormContact from '../../components/ContactForm';

const ChangePage = () => {
    const location = useLocation();
    const search = location.search;
    const params = new URLSearchParams(search);
    const [getCoin, setGetCoin] = useState(0);
    const [sendCoin, setSendCoin] = useState(0);

    useEffect(() => {
        // getCoinOHLCY(params.get('getCoin')).then(res => {
        //     setGetCoin(res[0].high);
        // });
        // getCoinOHLCY(params.get('sendCoin')).then(res => {
        //     setSendCoin(res[0].high);
        // });
    }, [])

    return (
        <Container>
            <FormContact />
        </Container>
    )
}

export default memo(ChangePage);
