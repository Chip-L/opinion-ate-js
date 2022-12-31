import { useState } from 'react';
import { connect } from 'react-redux';
import { Button, TextField } from '@mui/material';
import { createRestaurant } from '../store/restaurants/actions';

export function NewRestaurantFrom({ createRestaurant }) {
  const [name, setName] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();
    await createRestaurant(name);
    setName('');
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

const mapStateToProps = null;
const mapDispatchToProps = { createRestaurant };

export default connect(mapStateToProps, mapDispatchToProps)(NewRestaurantFrom);
