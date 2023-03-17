import React, { useState } from 'react';

const Form = (props) => {

    const [inputTitle, setInputTitle] = useState('');
    const [inputPrice, setInputPrice] = useState(0);
    const [inputDate, setinputDate] = useState('');

    const inputTitleHanlder = (event) => {
        setInputTitle(event.target.value)
    }

    const inputPriceHandler = (event) => {
        setInputPrice(event.target.value)
    }

    const inputDateHandler = (event) => {
        setinputDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const inputsObject = {
            title: inputTitle,
            amount: inputPrice,
            date: new Date(inputDate),
            id: Math.random()
        }

        setInputTitle('')
        setInputPrice(0)
        setinputDate('')


        // console.log(inputsObject)
        props.onInputSubmit(inputsObject);

    }

    // const [userInput, setUserInput] = useState({
    //     inputTitle: '',
    //     inputPrice: 0,
    //     inputDate: '',
    // });

    // const inputTitleHanlder = (event) => {
    //     setUserInput((prevState) => {
    //         return { ...prevState, inputTitle: event.target.value };
    //     })
    // }

    // const inputPriceHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return {
    //             ...prevState,
    //             inputPrice: event.target.value
    //         }
    //     })
    // }

    // const inputDateHandler = (event) => {
    //     setUserInput((prevState)=>{
    //         return {
    //             ...userInput,
    //             inputDate: event.target.value
    //         }
    //     })
    // }


    return (
        <form onSubmit={submitHandler} >
            <div>
                <label>title</label>
                <input onChange={inputTitleHanlder} value={inputTitle} type="text" />
                <p>{inputTitle}</p>
            </div>
            <div>
                <label>Price</label>
                <input onChange={inputPriceHandler} value={inputPrice} type="number" />
                <p>{inputPrice}</p>
            </div>
            <div>
                <label>Date</label>
                <input onChange={inputDateHandler} value={inputDate} type="date" />
                <p>{inputDate}</p>
            </div>
            <div>
                <input type="submit" value="Submit" />
            </div>
        </form>
    )



    // return (
    //     <form>
    //         <div>
    //             <label>title</label>
    //             <input onChange={inputTitleHanlder} value={userInput.inputTitle} type="text" />
    //             <p>{userInput.inputTitle}</p>
    //         </div>
    //         <div>
    //             <label>Price</label>
    //             <input onChange={inputPriceHandler} value={userInput.inputPrice} type="number" />
    //             <p>{userInput.inputPrice}</p>
    //         </div>
    //         <div>
    //             <label>Date</label>
    //             <input onChange={inputDateHandler} value={userInput.inputDate} type="date" />
    //             <p>{userInput.inputDate}</p>
    //         </div>
    //         <div>
    //             <input type="submit" value="Submit" />
    //         </div>
    //     </form>
    // )

}

export default Form