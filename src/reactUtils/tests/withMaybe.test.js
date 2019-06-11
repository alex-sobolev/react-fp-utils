import React from 'react';
import { shallow } from 'enzyme';
import { withMaybe } from '../withMaybe';

const TestComponent = props => <div>User name: {props.user.name}</div>;
const noUserName = props => !props.user.name;

describe('withMaybe monadic HOC helper', () => {
  it('should return null if a predicate function is evaluated to true', () => {
    const props = {
      user: {}
    };

    const ComponentWithConditions = withMaybe(noUserName)(TestComponent);

    expect(shallow(<ComponentWithConditions {...props} />).get(0)).toEqual(null);
  });

  it('should return a React component if a predicate function is evaluated to false', () => {
    const props = {
      user: {
        name: 'John Doe'
      }
    };

    const ComponentWithConditions = withMaybe(noUserName)(TestComponent);

    const Test = shallow(<ComponentWithConditions {...props} />).get(0);
    const Expected = <TestComponent {...props} />;

    expect(Test).toEqual(Expected);
  });
});
