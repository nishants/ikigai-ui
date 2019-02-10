import React from 'react';
import './AddIkagaiItems.scss';
import Button from 'components/Form/Button';
import Input from 'components/Form/Input';
import InputGroup from 'components/Form/InputGroup';
import Love from 'components/ikagai/types/Love';

const AddItems = () => (
    <div className='add-ikagai-items'>
      <InputGroup>
        <Input placeholder='Type here'></Input>
        <Button label='Add'/>
      </InputGroup>

      <ul className='undo-list'>
        <li>
          <Love label='learning'/>
        </li>
      </ul>
    </div>
);

export default AddItems;
