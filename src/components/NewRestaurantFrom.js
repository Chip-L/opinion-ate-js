import { useState } from 'react';
import { connect } from 'react-redux';
import { Alert, Button, TextField } from '@mui/material';
import { createRestaurant } from '../store/restaurants/actions';

export function NewRestaurantFrom({ createRestaurant }) {
  const [name, setName] = useState('');
  const [validationError, setValidationError] = useState(false);
  const [serverError, setServerError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (name) {
      setServerError(false);
      setValidationError(false);
      try {
        await createRestaurant(name);
        setName('');
      } catch (error) {
        setServerError(true);
      }
    } else {
      setValidationError(true);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {serverError && (
        <Alert severity="error">
          The restaurant could not be saved. Please try again.
        </Alert>
      )}
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
