import React from 'react';
import CustomSelect from '../Select';
import { Button } from 'react-bootstrap';

function Banner() {
    return (
        <div className="bannerWrapper">
            <div>
                24/7 automatic cryptocurrency exchanger
            </div>
            <div className="d-flex justify-content-center align-items-center pt-5 pb-5">
                <CustomSelect options={[]}/>
                <CustomSelect options={[]}/>
                <Button variant="success" className="text-uppercase">
                    Exchange
                </Button>
            </div>
        </div>
    );
}

export default Banner;
