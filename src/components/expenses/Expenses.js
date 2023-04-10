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

            {expenses.map((ex) => <ExpenseItem expense={ex}/>)}
        </Card>
    );
}

export default Expenses;