import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { loadRestaurants } from './restaurants/actions';
import restaurantReducer from './restaurants/reducers';

describe('restaurants', () => {
  describe('loadRestaurants action', () => {
    let store;

    describe('initially', () => {
      beforeEach(() => {
        const initialState = {};
        store = createStore(
          restaurantReducer,
          initialState,
          applyMiddleware(thunk)
        );
      });

      it('does not have the loading flag set', () => {
        expect(store.getState().loading).toEqual(false);
      });

      it('does not have the loadError flag set', async () => {
        expect(store.getState().loadError).toEqual(false);
      });
    });

    describe('while loading', () => {
      beforeEach(() => {
        const api = {
          loadRestaurants: () => new Promise(() => {}),
        };
        const initialState = { loadError: true };

        store = createStore(
          restaurantReducer,
          initialState,
          applyMiddleware(thunk.withExtraArgument(api))
        );

        store.dispatch(loadRestaurants());
      });

      it('sets a loading flag', () => {
        expect(store.getState().loading).toEqual(true);
      });

      it('clears the error flag', () => {
        expect(store.getState().loadError).toEqual(false);
      });
    });

    describe('when loading succeeds', () => {
      const records = [
        { id: 1, name: 'Sushi Place' },
        { id: 2, name: 'Pizza Place' },
      ];

      beforeEach(() => {
        const api = { loadRestaurants: () => Promise.resolve(records) };

        const initialState = {
          records: [],
        };

        store = createStore(
          restaurantReducer,
          initialState,
          applyMiddleware(thunk.withExtraArgument(api))
        );

        return store.dispatch(loadRestaurants());
      });

      it('stores the restaurants', () => {
        expect(store.getState().records).toEqual(records);
      });

      it('clears the loading flag', () => {
        expect(store.getState().loading).toEqual(false);
      });
    });

    describe('when loading fails', () => {
      beforeEach(() => {
        const api = { loadRestaurants: () => Promise.reject() };

        const initialState = {};

        store = createStore(
          restaurantReducer,
          initialState,
          applyMiddleware(thunk.withExtraArgument(api))
        );

        return store.dispatch(loadRestaurants());
      });

      it('sets the error flag', async () => {
        expect(store.getState().loadError).toEqual(true);
      });

      it('clears the loading flag', () => {
        expect(store.getState().loading).toEqual(false);
      });
    });
  });
});
