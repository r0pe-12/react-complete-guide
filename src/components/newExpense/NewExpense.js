import {useState} from "react";

import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {

    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing((prevState) => !prevState);
    }

    const saveHandler = expenseData => {
        const data = {
            ...expenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(data);
    }

    return (
        <div className={'new-expense'}>

            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button> }
            {isEditing && <ExpenseForm onSave={saveHandler} onCancel={startEditingHandler}/>}
        </div>
    )
}

export default NewExpense;