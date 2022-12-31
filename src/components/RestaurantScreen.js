import { Card, CardContent, Typography } from '@mui/material';
import NewRestaurantFrom from './NewRestaurantFrom';
import RestaurantList from './RestaurantList';

export default function RestaurantScreen() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Restaurants</Typography>
        <NewRestaurantFrom />
        <RestaurantList />
      </CardContent>
    </Card>
  );
}
