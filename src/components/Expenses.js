import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Expenses(props) {

    const expenses = props.expenses;

    return (
        <div className={'expenses'}>
            <ExpenseItem expense={expenses[0]}/>
            <ExpenseItem expense={expenses[1]}/>
            <ExpenseItem expense={expenses[2]}/>
            <ExpenseItem expense={expenses[3]}/>
        </div>
    );
}

export default Expenses;