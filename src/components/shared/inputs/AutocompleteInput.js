import React, { useContext } from 'react';
import Input from 'react-autocomplete';
import { AppContext } from '../../AppContext';
import { InputWrapper } from '..';

const AutocompleteInput = ({
    name,
    label,
    value,
    onChange = e => {},
    onSelect = e => {},
    source,
}) => {
    const context = useContext(AppContext);
    const items = context[source];

    return (
        <InputWrapper label={label}>
            <Input
                inputProps={{
                    name,
                }}
                wrapperStyle={{ width: '100%' }}
                items={items}
                getItemValue={item => item.name}
                renderItem={(item, highlighted) => (
                    <div
                        key={item.id}
                        style={{
                            backgroundColor: highlighted
                                ? '#eee'
                                : 'transparent',
                        }}
                    >
                        {item.name}
                    </div>
                )}
                value={value}
                onChange={(e, value) => onChange({ target: { value, name } })}
                onSelect={(value, item) => onSelect(item)}
            />
        </InputWrapper>
    );
};

export { AutocompleteInput };
