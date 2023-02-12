import React, {memo, useEffect} from 'react';
import './style.css';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Input from '../Input';

const FormContact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        setValue,
    } = useForm();

    useEffect(() => {
        setValue('commission', '12')
    }, [])

    const onSubmit = (data) => {
        console.log (data);
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
