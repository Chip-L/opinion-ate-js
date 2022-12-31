import { useState } from 'react';
import { connect } from 'react-redux';
import { Alert, Button, TextField } from '@mui/material';
import { createRestaurant } from '../store/restaurants/actions';

export function NewRestaurantFrom({ createRestaurant }) {
  const [name, setName] = useState('');
  const [validationError, setValidationError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (name) {
      setValidationError(false);
      await createRestaurant(name);
    } else {
      setValidationError(true);
    }
    setName('');
  }

  return (
    <form onSubmit={handleSubmit}>
      {validationError && <Alert severity="error">Name is required</Alert>}
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
