import React from 'react';
import Select from 'react-select';

function CustomSelect ({ options }) {
    return (
        <Select
            options={options}
            defaultValue={options[0]}
            components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
        />
    )
}

export default CustomSelect;
