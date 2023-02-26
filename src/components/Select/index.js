import React, { memo } from 'react';
import Select from 'react-select';

function CustomSelect (props) {
    const { options, handleChange, name, defaultVal } = props;
    const defaultValue = options.find(item => item.value === defaultVal);

    return (
        <Select
            options={options}
            name={name}
            onChange={handleChange}
            components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
            defaultValue={defaultValue ?  defaultValue : null}
        />
    )
}

export default memo(CustomSelect);
