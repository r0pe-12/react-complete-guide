import {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {

    const expenses = props.expenses;

    const [filteredY, setFilteredY] = useState('2023');
    console.log(filteredY);

    const filterChangeHandler = selectedY => {
        setFilteredY(selectedY);
    }

    return (
        <Card className={'expenses'}>
            <ExpensesFilter selected={filteredY} onFilterChange={filterChangeHandler}/>
            <ExpenseItem expense={expenses[0]}/>
            <ExpenseItem expense={expenses[1]}/>
            <ExpenseItem expense={expenses[2]}/>
            <ExpenseItem expense={expenses[3]}/>
        </Card>
    );
}

export default Expenses;