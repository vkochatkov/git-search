import React from 'react';
import { Repos } from './Repos';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

const setUp = () => {
  const props = {
    repos: [
      {
        id: 2,
        html_url: 'https://avatars2.githubusercontent.com/u/39588133?v=4',
        name: '"fafaf"',
      },
    ],
  };
  const wrapper = shallow(<Repos {...props} />);

  return { props, wrapper };
};

describe('Repos component', () => {
  it('should render Repos component', () => {
    const component = setUp();
    expect(component).toMatchSnapshot();
  });
});
