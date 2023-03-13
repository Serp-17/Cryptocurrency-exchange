import React, {memo, useEffect} from 'react';
import './style.css';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Input from '../Input';

import { getDatabase, ref, set } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import {useLocation} from "react-router-dom";

const firebaseConfig = {
    apiKey: "AIzaSyDByeEmZeVnZ8L0aFojH8RdnE1KVjFPFAU",
    authDomain: "rrerere-716bf.firebaseapp.com",
    databaseURL: "https://rrerere-716bf-default-rtdb.firebaseio.com/",
    projectId: "rrerere-716bf",
    storageBucket: "rrerere-716bf.appspot.com",
    messagingSenderId: "592597805017",
    appId: "1:592597805017:web:efc40e7f0a9fc79a125bc8",
    measurementId: "G-ML42SXN0Z8"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

const FormContact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        setValue,
    } = useForm();
    const location = useLocation();
    const search = location.search;
    const params = new URLSearchParams(search);


    useEffect(() => {
        setValue('commission', '12')
    }, [])

    const onSubmit = (data) => {
        set(ref(db, 'lead/' + new Date().getTime()), {
            give: data.give,
            get: data.get,
            email: data.email,
            getWallet: data.getWallet,
            giveWallet: data.giveWallet,
            commission: data.commission || 0,
            getCoin: params.get('getCoin'),
            sendCoin: params.get('sendCoin'),
        });
        reset();
    };

    return (
        <div className="FormContactWrapper">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup className="mb-3">
                    <Input
                        label="You give USD ADV"
                        name="give"
                        type="number"
                        errors={errors}
                        register={register}
                        required
                    />
                    <Input
                        label="You get BTC BitCoin"
                        name="get"
                        type="number"
                        errors={errors}
                        register={register}
                        required
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <Input
                        label="Your BitCoin wallet"
                        name="getWallet"
                        type="text"
                        errors={errors}
                        register={register}
                        required
                    />
                    <Input
                        label="Your Wallet Number"
                        name="giveWallet"
                        type="text"
                        errors={errors}
                        register={register}
                        required
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <Input
                        label="Your E-mail"
                        name="email"
                        type="email"
                        errors={errors}
                        register={register}
                        required
                    />
                    <Input
                        label="Commission"
                        name="commission"
                        type="number"
                        errors={errors}
                        register={register}
                        required
                        disabled
                    />
                </InputGroup>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default memo(FormContact);
