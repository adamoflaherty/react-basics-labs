
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function AddTaskForm({ submit }) {
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim() || !deadline) {
      return;
    }

    submit({
      title,
      deadline,
      description
    });

    setTitle('');
    setDeadline('');
    setDescription('');
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiOutlinedInput-root': {
          m: 1,
          width: '30ch'
        }
      }}
      onSubmit={handleSubmit}
    >
      <div>
        <TextField
          required
          name="title"
          label="Task Title"
          slotProps={{ inputLabel: { shrink: true } }}
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>

      <div>
        <TextField
          required
          name="deadline"
          label="Deadline"
          type="date"
          slotProps={{ inputLabel: { shrink: true } }}
          value={deadline}
          onChange={(event) => setDeadline(event.target.value)}
        />
      </div>

      <div>
        <TextField
          name="description"
          label="Task Details"
          multiline
          rows={4}
          slotProps={{ inputLabel: { shrink: true } }}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>

      <div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            m: 1,
            p: 1,
            width: '95%'
          }}
        >
          Add Task
        </Button>
      </div>
    </Box>
  );
}

export default AddTaskForm;
