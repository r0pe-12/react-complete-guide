import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../ui/Card";

function Expenses(props) {

    const expenses = props.expenses;

    return (
        <Card className={'expenses'}>
            <ExpenseItem expense={expenses[0]}/>
            <ExpenseItem expense={expenses[1]}/>
            <ExpenseItem expense={expenses[2]}/>
            <ExpenseItem expense={expenses[3]}/>
        </Card>
    );
}

export default Expenses;