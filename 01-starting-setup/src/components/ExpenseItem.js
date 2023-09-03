import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) =>{


    return <div className="expense-item">
        <ExpenseDate date = {props.date}></ExpenseDate>
        <div className="expense-item__description"><h2>{props.title}</h2></div>
        <div className="expense-item__price">{props.amount}</div>
        <button onClick={()=>{console.log("clicked!")}} >Change Title</button>
    </div>
}

export default ExpenseItem;