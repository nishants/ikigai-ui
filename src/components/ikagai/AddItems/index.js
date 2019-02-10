import React from 'react';
import './AddIkagaiItems.scss';
import Button from 'components/Form/Button';
import Input from 'components/Form/Input';
import InputGroup from 'components/Form/InputGroup';

const AddItems = () => (
    <div className='add-ikagai-items'>
      <InputGroup>
        <Input placeholder='Type here'></Input>
        <Button label='Add'/>
      </InputGroup>
    </div>
);

export default AddItems;
