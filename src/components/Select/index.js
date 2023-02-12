import React, { memo } from 'react';
import Select from 'react-select';

function CustomSelect ({ options, handleChange, name }) {
    return (
        <Select
            options={options}
            name={name}
            onChange={e => handleChange(e.name, name)}
            components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
        />
    )
}

export default memo(CustomSelect);
