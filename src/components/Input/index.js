import React, { memo } from 'react';
import './style.css';

const Input = ({ name, label, register, errors, required, type, disabled }) => (
    <div className="form-control-input">
        <label htmlFor={name}>
            {label}
            {required && "*"}
        </label>
        <input
            id={name}
            name={name}
            type={type}
            disabled={disabled}
            {...register(name)}
        />
        {errors && errors[name]?.type === "required" && (
            <span className="error">{errors[name]?.message}</span>
        )}
        {errors && errors[name]?.type === "minLength" && (
            <span className="error">{errors[name]?.message}</span>
        )}
    </div>
);
export default memo(Input);