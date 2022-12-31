import { Button, TextField } from '@mui/material';
import React from 'react';

export function NewRestaurantFrom() {
  return (
    <form>
      <TextField
        placeholder="Add Restaurant"
        fullWidth
        variant="filled"
      />
      <Button
        variant="contained"
        color="primary"
      >
        Add
      </Button>
    </form>
  );
}

export default NewRestaurantFrom;
