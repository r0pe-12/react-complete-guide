import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {

    const saveHandler = expenseData => {
        const data = {
            ...expenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(data);
    }

    return (
        <div className={'new-expense'}>
            <ExpenseForm onSave={saveHandler}/>
        </div>
    )
}

export default NewExpense;