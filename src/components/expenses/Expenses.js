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

    const filteredExpenses = expenses.filter(ex => ex.date.getFullYear().toString() === filteredY);

    return (
        <div>
            <Card className={'expenses'}>
                <ExpensesFilter selected={filteredY} onFilterChange={filterChangeHandler}/>
            </Card>
            <Card className={'expenses'}>

                {filteredExpenses.map((ex) => <ExpenseItem key={ex.id} expense={ex}/>)}
            </Card>
        </div>
    );
}

export default Expenses;