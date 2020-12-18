import React from 'react';
import { configure, shallow } from 'enzyme';
import { render } from '@testing-library/react';
import { HomePage } from './HomePage';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { BrowserRouter, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

configure({ adapter: new Adapter() });

const setUp = ({ store }) => {
  return render(
    <Provider store={store}>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </Provider>,
  );
};

describe('HomePage component', () => {
  const initialState = { users: [{ id: 1 }] };
  const mockStore = configureStore();
  let store;

  it('should render HomePage', () => {
    store = mockStore(initialState);
    const wrapper = setUp({ store });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render HomePage', () => {
    store = mockStore(initialState);
    const wrapper = setUp({ store });

    expect(wrapper.find('p').hasClass('text-center').text()).toBe(
      'Загрузка...',
    );
  });
});
