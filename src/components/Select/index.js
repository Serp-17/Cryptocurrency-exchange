import React, { memo } from 'react';
import Select from 'react-select';

function CustomSelect (props) {
    const { options,
        handleChange,
        handleChangeCoin,
        name,
        defaultVal,
    } = props;

    const onChange = (e) => {
        if (handleChangeCoin) {
            handleChangeCoin(e.name, name)
        } else {
            handleChange(e);
        }
    }

    return (
        <Select
            id={name}
            options={options}
            name={name}
            onChange={onChange}
            components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
            defaultValue={defaultVal ?  options.find(item => item.value === defaultVal) : null}
        />
    )
}

export default memo(CustomSelect);
