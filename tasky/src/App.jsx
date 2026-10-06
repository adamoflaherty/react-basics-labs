import './App.css';
import Task from './components/Task';

function App() {
  return (
        <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" >
          Clean dishes in dishwasher
          </Task>
          <Task title="Laundry" deadline="Tomorrow">
        Fold laundry and put away
    </Task>
    <Task title="Tidy" deadline="Today" >
    Pick up clothes
    </Task>
    </div>
  );
}

export default App;
