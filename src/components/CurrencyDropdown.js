import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

const CurrencyDropdown = () => {
  const { dispatch } = useContext(AppContext);
  const [curr, setCurrency] = useState('$ Dollar');
  const symbols = [
    { value: '$', text: '$ Dollar' },
    { value: '£', text: '£ Pound' },
    { value: '€', text: '€ Euro' },
    { value: '₹', text: '₹ Ruppee' },
  ];

  const handleCurrencyChange = (val, text) => {
    setCurrency(text);

    dispatch({
      type: 'CHG_CURRENCY',
      payload: val,
    })
  }


  return (
    <Dropdown>
      <Dropdown.Toggle style={{ backgroundColor: '#94e494', borderColor: 'transparent' }} id="dropdown-basic">
        Currency ({curr})
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ backgroundColor: '#94e494' }}>
        {symbols.map((sym) => (
          <DropdownItem
            as="button"
            id={sym.value}
            value={sym.value}
            onClick={(e) => handleCurrencyChange(e.target.value, e.target.innerHTML)}>
            {sym.text}
          </DropdownItem>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CurrencyDropdown;
