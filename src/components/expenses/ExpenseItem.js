import {useState} from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";

function ExpenseItem(props) {

    const expense = props.expense;

    const expenseDate = expense.date;
    const [expenseTitle, setExpenseTitle] = useState(expense.title);
    const expenseAmount = expense.amount;
    
    function clickHandler() {
        setExpenseTitle('Updated');
    }

    return (
        <Card className={'expense-item'}>
            <ExpenseDate date={expenseDate}></ExpenseDate>
            <div className={'expense-item__description'}>
                <h2>{expenseTitle}</h2>
                <div className={'expense-item__price'}>${expenseAmount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );
}

export default ExpenseItem;
