import React from 'react';
import { Search } from './Search';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

configure({ adapter: new Adapter() });

const setUp = ({ store }) => {
  return render(
    <Provider store={store}>
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    </Provider>,
  );
};

describe('Render Search', () => {
  const initialState = { users: [{ id: 1 }] };
  const mockStore = configureStore();
  let store;

  it('should render Search component', () => {
    store = mockStore(initialState);
    const wrapper = setUp({ store });

    expect(wrapper).toMatchSnapshot();
  });
});
