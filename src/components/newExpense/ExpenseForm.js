import {useState} from "react";
import './ExpenseForm.css';

function ExpenseForm(props) {
    const [eTitle, setETitle] = useState('');
    const [eAmount, setEAmount] = useState('');
    const [eDate, setEDate] = useState('');

    // const [userInput, setUserInput] = useState({eTitle: '', eAmount: '', eDate: '',})


    function titleChangeHandler(e) {
        setETitle(e.target.value);

        // // setUserInput({
        // //     ...userInput,
        // //     eTitle: e.target.value
        // // });
        //
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState, eTitle: e.target.value
        //     };
        // })
    }

    function amountChangeHandler(e) {
        setEAmount(e.target.value);

        // // setUserInput({
        // //     ...userInput, eAmount: e.target.value
        // // })
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState, eAmount: e.target.value
        //     };
        // })
    }

    function dateChangeHandler(e) {
        setEDate(e.target.value);

        // // setUserInput({
        // //     ...userInput, eDate: e.target.date
        // // })
        //
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState, eDate: e.target.value
        //     };
        // })
    }

    function formSubmitHandler(e) {
        e.preventDefault();
        // console.log(e.target[0].value); // i dont know why are we working with state when we can read data like this

        const userInput = {
            title: eTitle,
            amount: +eAmount,
            date: new Date(eDate)
        };
        props.onSave(userInput);
        props.onCancel();

        setETitle('');
        setEAmount('');
        setEDate('');

        // console.log(userInput);
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={'new-expense__controls'}>
                <div className={'new-expense__control'}>
                    <label>Title</label>
                    <input type="text" value={eTitle} onChange={titleChangeHandler}/>
                </div>
                <div className={'new-expense__control'}>
                    <label>Amount</label>
                    <input type="number" min={'0.01'} step={'0.01'} value={eAmount} onChange={amountChangeHandler}/>
                </div>
                <div className={'new-expense__control'}>
                    <label>Date</label>
                    <input type="date" min={'2020-01-01'} max={'2023-12-31'} value={eDate}
                           onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className={'new-expense__actions'}>
                <button onClick={props.onCancel}>Cancel</button>
                <button type={'submit'}>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;