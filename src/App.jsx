import './App.css'
import ActualBalance from './components/actualbalance/actualbalance.component';
import History from './components/history/history.component';
import Transaction from './components/transaction/transaction.component';
function App() {
  return (
    <div className="App">
      <div className=" paddings flexColCenter a-wrapper">
         <div className='primaryText'>Expense Tracker</div>
         <ActualBalance/>
         <History/>
         <Transaction/>
      </div>
    </div>
  );
}

export default App;
