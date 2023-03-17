import { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [bgColor, setBgColor] = useState('red');


  const changeTitleHandler = () => {
    setTitle('Sarah Conor')
    console.log('title: ', title)
  }

  const changeColorHandler = () => {
    setBgColor('blue');
  }


  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div style={{
        backgroundColor: bgColor
      }} className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={changeTitleHandler}>Change title</button>
        <button onClick={changeColorHandler}>Change color to blue</button>
      </div>
    </Card >
  );
}

export default ExpenseItem;
