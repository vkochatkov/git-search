import React from 'react';
import { configure } from 'enzyme';
import { render } from '@testing-library/react';
import { App } from './App';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { BrowserRouter, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

configure({ adapter: new Adapter() });

const setUp = ({ store }) => {
  return render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  );
};

describe('App component', () => {
  const initialState = { users: [{ id: 1 }] };
  const mockStore = configureStore();
  let store;

  it('should render App', () => {
    store = mockStore(initialState);
    const wrapper = setUp({ store });
    expect(wrapper).toMatchSnapshot();
  });
});
