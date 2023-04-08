import "./ExpenseItem.css";

function ExpenseItem(props) {

    const expense = props.expense;

    const expenseDate = expense.date;
    const month = expenseDate.toLocaleString('en-US', {month: "long"});
    const year = expenseDate.getFullYear();
    const date = expenseDate.toLocaleString('en-US', {day: "2-digit"});

    const expenseTitle = expense.title;
    const expenseAmount = expense.amount;

    return (
        <div className={'expense-item'}>
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{date}</div>
            </div>
            <div className={'expense-item__description'}>
                <h2>{expenseTitle}</h2>
                <div className={'expense-item__price'}>${expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
