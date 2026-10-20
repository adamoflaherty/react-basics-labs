

import { useState } from 'react';
import './App.css';
import Task from './components/Task';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import AddTaskForm from './components/AddTaskForm';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Dishes',
      description: 'Empty dishwasher',
      deadline: 'Today',
      done: false
    },
    {
      id: 2,
      title: 'Laundry',
      description: 'Fold clothes and put away',
      deadline: 'Tomorrow',
      done: false
    },
    {
      id: 3,
      title: 'Tidy up',
      description: 'Pick up clothes',
      deadline: 'Today',
      done: false
    }
  ]);

  const doneHandler = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id
          ? { ...task, done: true }
          : task
      )
    );
  };

  const deleteHandler = (id) => {
    setTasks(prevTasks =>
      prevTasks.filter(task => task.id !== id)
    );
  };

  const addTaskHandler = (newTask) => {
    setTasks(prevTasks => [
      ...prevTasks,
      {
        ...newTask,
        id: crypto.randomUUID(),
        done: false
      }
    ]);
  };

  return (
    <div className="container">
      {/* App Header */}
      <Container component="main">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            backgroundColor: 'gray',
            textAlign: 'center',
            color: 'white',
            padding: '20px',
            margin: '20px 0 40px 0',
            borderRadius: '4px'
          }}
        >
          Tasky
        </Typography>
      </Container>
      {/* End App Header */}

      {/* Task Card Grid */}
      <Container maxWidth="md" component="main">
        <Grid
          container
          spacing={5}
          sx={{
            justifyContent: 'center'
          }}
        >
          {tasks.map(task => (
            <Task
              key={task.id}
              title={task.title}
              description={task.description}
              deadline={task.deadline}
              done={task.done}
              markDone={() => doneHandler(task.id)}
              deleteTask={() => deleteHandler(task.id)}
            />
          ))}
        </Grid>
      </Container>
      {/* End Task Card Grid */}

      {/* Footer - Add Task Form */}
      <Container
        component="footer"
        sx={{
          borderTop: (theme) =>
            `1px solid ${theme.palette.divider}`,
          my: 6,
          py: 6
        }}
      >
        <Grid
          container
          sx={{
            justifyContent: 'center'
          }}
        >
          <AddTaskForm submit={addTaskHandler} />
        </Grid>
      </Container>
      {/* End Footer */}
    </div>
  );
}

export default App;
