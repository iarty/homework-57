import React from 'react';
import Button from './Button/Button';
import Input from './Input/Input';
import Select from './Select/Select'

export default function InputGroup({ handleInputValue, addNewCost, selector }) {
  return (
    <div className="p-4" style={{
      background: 'white',
      border: '1px solid #ccc',
      borderRadius: 3
    }}>
      <form action="#" onSubmit={addNewCost}>
        <Input type="text" name="item" label="Item name" handleInputValue={handleInputValue} />
        <Input type="number" name="cost" label="Cost" handleInputValue={handleInputValue} />
        <Select selector={selector} />
        <Button />
      </form>
    </div>
  )
}
