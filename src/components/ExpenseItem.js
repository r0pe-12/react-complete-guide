import "./ExpenseItem.css";

function ExpenseItem() {
    const expenseDate = new Date(2023, 1, 26);
    const expenseTitle = 'New Phone';
    const expenseAmount = 999.99;

    return (
        <div className={'expense-item'}>
            <div>{expenseDate.toISOString()}</div>
            <div className={'expense-item__description'}>
                <h2>{expenseTitle}</h2>
                <div className={'expense-item__price'}>${expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
