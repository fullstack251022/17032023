import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const [isVisible, setIsible] = useState(true);
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ])

  const setVisibleHanlder = () => {
    setIsible((prevState) => {
      setIsible(!prevState)
    });
  }


  const onNewItemCreatedHandler = (newItem) => {
    // const newExpenses = [...expenses, newItem]
    // console.log('newExpenses: ',newExpenses)
    setExpenses((prevState) => {
      return [...prevState, newItem]
    })

  }

  const notItemsFoundParagraph = <p>'Not Items found'</p>;

  const renderItems = () => {
    if (isVisible) {
      return (<Expenses
        items={expenses}
      />)
    } else {
      return notItemsFoundParagraph;
    }

  }


  return (
    <div>
      <NewExpense onNewItemCreated={onNewItemCreatedHandler} />
      <button onClick={setVisibleHanlder} style={{
        color: 'bl'
      }}>Toggle Display expenses</button>

      {/* {isVisible && <Expenses
        items={expenses}
      />}
      {!isVisible && <p> Not Items found</p>} */}

      {/* 
      {isVisible ? <Expenses
        items={expenses}
      /> : 'Not Items found'} */}


      {renderItems()}

    </div>
  );
}

export default App;
