import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import Input from 'react-autocomplete';
import { AppContext } from 'components/context';
import { Wrapper } from '../wrapper';

const AutocompleteInput = ({
    name,
    label,
    value,
    onChange = () => {},
    onSelect = () => {},
    source,
}) => {
    const context = useContext(AppContext);
    const itemsSource = context[source];

    const items = useMemo(() => {
        return value === ''
            ? itemsSource
            : itemsSource.filter(item => item.name.indexOf(value) !== -1);
    }, [itemsSource, value]);

    return (
        <Wrapper label={label}>
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
        </Wrapper>
    );
};

AutocompleteInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    source: PropTypes.string.isRequired,
};

export { AutocompleteInput };
