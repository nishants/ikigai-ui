import React from 'react';
import './AddIkagaiItems.scss';
import Button from 'components/Form/Button';
import Input from 'components/Form/Input';
import InputGroup from 'components/Form/InputGroup';
import IkigaiType from 'components/ikagai/types';

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
    this.props.addItem(this.state.input);
    this.setState({input: ''});
  };

  render(){
    const {items, removeItem, type} = this.props;
    const TypeComponent = IkigaiType(type);

    return (
        <div className='add-ikagai-items'>
          <InputGroup>
            <Input placeholder='Type here' onChange={this.onInputChange} value={this.state.input}></Input>
            <Button onClick={this.addItem} label='Add'/>
          </InputGroup>

          <ul className='undo-list'>
            {items.map(item => (
                <li key={item.label}>
                  <TypeComponent label={item.label} remove={() => removeItem(item)}/>
                </li>
            ))}
          </ul>
        </div>
    );
  }
};

export default AddItems;
