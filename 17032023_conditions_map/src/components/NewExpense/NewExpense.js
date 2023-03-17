import Form from "./Form"

const NewExpense = (props) => {

    const onSubmitHandler = (userInputs) => {
        // console.log('in NewExpense')
        // console.log(userInputs)
        props.onNewItemCreated(userInputs)
    }

    return (
        <div>
            NewExpense
            <Form onInputSubmit={onSubmitHandler} />
        </div>
    )
}

export default NewExpense