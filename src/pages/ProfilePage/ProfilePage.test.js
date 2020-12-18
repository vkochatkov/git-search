import React from 'react';
import { configure } from 'enzyme';
import { render } from '@testing-library/react';
import { ProfilePage } from './ProfilePage';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { BrowserRouter, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

configure({ adapter: new Adapter() });

const setUp = ({ store }) => {
  return render(
    <Provider store={store}>
      <BrowserRouter>
        <ProfilePage />
      </BrowserRouter>
    </Provider>,
  );
};

describe('ProfilePage component', () => {
  const initialState = {
    user: { id: 1 },
    repos: [
      {
        id: 2,
        html_url: 'https://avatars2.githubusercontent.com/u/39588133?v=4',
        name: '"fafaf"',
      },
    ],
  };
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  let store;

  it('should render ProfilePage', () => {
    store = mockStore(initialState);
    const wrapper = setUp({ store });
    expect(wrapper).toMatchSnapshot();
  });
});
