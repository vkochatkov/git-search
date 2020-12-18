import React from 'react';
import { Card } from './Card';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { Link } from 'react-router-dom';

configure({ adapter: new Adapter() });

const setUp = () => {
  const props = {
    user: {
      avatar_url: 'https://avatars2.githubusercontent.com/u/39588133?v=4',
      login: '"fafaf"',
    },
  };
  const wrapper = shallow(<Card {...props} />);

  return { props, wrapper };
};

describe('Shallow rendered Card', () => {
  it('should render card with the details of Card', () => {
    const { wrapper, props } = setUp();

    expect(wrapper.find('img').hasClass('card-img-top')).toBe(true);
    expect(wrapper.find('h5').text()).toBe(props.user.login);
    expect(
      wrapper.containsMatchingElement(
        <Link to={'/profile/' + props.user.login}>Открыть</Link>,
      ),
    ).toBe(true);
  });
});
