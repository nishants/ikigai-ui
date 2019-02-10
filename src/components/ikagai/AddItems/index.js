import React from 'react';
import './AddIkagaiItems.scss';
import Button from 'components/Form/Button';
import Input from 'components/Form/Input';
import InputGroup from 'components/Form/InputGroup';
import Love from 'components/ikagai/types/Love';

class AddItems extends React.Component{
  constructor(props){
    super(props);
    this.state={
      input: ''
    }
  }

  onInputChange = (e) => {
    this.setState({
      input: e.target.value
    });
  };

  addItem = () => {
    this.props.addItem(this.state.input)
  };

  render(){
    const {items, addItem} = this.props;

    return (
        <div className='add-ikagai-items'>
          <InputGroup>
            <Input placeholder='Type here' onChange={this.onInputChange} value={this.state.input}></Input>
            <Button onClick={this.addItem} label='Add'/>
          </InputGroup>

          <ul className='undo-list'>
            {items.map(item => (
                <li key={item.label}>
                  <Love label={item.label}/>
                </li>
            ))}
          </ul>
        </div>
    );
  }
};

export default AddItems;
