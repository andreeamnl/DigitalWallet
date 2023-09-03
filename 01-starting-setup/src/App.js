import ExpenseItem from "./components/ExpenseItem";


function App() {
  let expenses=[
    {
      id:'e1',
      title:"Car insurance",
      amount:234.98,
      date : new Date(2018, 11, 24),
    },
    {
      id:'e2',
      title:"Food",
      amount:23.98,
      date : new Date(2023,2,3),
    },
    {
      id:'e3',
      title:"Transport pass",
      amount:34.98,
      date : new Date(2023,2,3),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title= {expenses[0].title}
        amount = {expenses[0].amount}
        date = {expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title= {expenses[1].title}
        amount = {expenses[1].amount}
        date = {expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title= {expenses[2].title}
        amount = {expenses[2].amount}
        date = {expenses[2].date}
      ></ExpenseItem>
      
    </div>
  );
}

export default App;