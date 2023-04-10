import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {

    const filteredExpenses = props.filteredExpenses;

    let expensesContent = <h2 className={'expenses-list__fallback'}>no expenses found</h2>

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.length > 0 && filteredExpenses.map((ex) => <ExpenseItem key={ex.id}
                                                                                                   expense={ex}/>)
    }

    return (
        <ul className={'expenses-list'}>
            {expensesContent}
        </ul>
    );
}

export default ExpensesList;