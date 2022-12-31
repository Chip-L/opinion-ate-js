import { Button, TextField } from '@mui/material';
import { useState } from 'react';

export function NewRestaurantFrom({ createRestaurant }) {
  const [name, setName] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    createRestaurant(name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        placeholder="Add Restaurant"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        variant="filled"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
      >
        Add
      </Button>
    </form>
  );
}

export default NewRestaurantFrom;
