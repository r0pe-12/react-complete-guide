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

    let expensesContent = <p>no expenses found</p>

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.length > 0 && filteredExpenses.map((ex) => <ExpenseItem key={ex.id}
                                                                                                   expense={ex}/>)
    }

    return (
        <div>
            <Card className={'expenses'}>
                <ExpensesFilter selected={filteredY} onFilterChange={filterChangeHandler}/>
            </Card>
            <Card className={'expenses'}>

                {/*{filteredExpenses.length !== 0 ?*/}
                {/*    (filteredExpenses.map((ex) => <ExpenseItem key={ex.id} expense={ex}/>)) :*/}
                {/*    (<p>no expenses found</p>)}*/}

                {/*{filteredExpenses.length === 0 && <p>no expenses found</p>}*/}
                {/*{filteredExpenses.length > 0 && filteredExpenses.map((ex) => <ExpenseItem key={ex.id} expense={ex}/>)}*/}

                {expensesContent}

            </Card>
        </div>
    );
}

export default Expenses;