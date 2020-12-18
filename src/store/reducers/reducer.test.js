// ./**tests**/reducer_test.js
import { initialState, reducer } from './reducer';

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it('should handle SET_LOADING', () => {
    expect(
      reducer(initialState, {
        type: 'SET_LOADING',
      }),
    ).toMatchSnapshot();
  });
});
