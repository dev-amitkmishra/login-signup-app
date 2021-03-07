import React from 'react';
import renderer from 'react-test-renderer';
import Text from '../../components/atoms/Text';

describe('Text', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Text text='test' />).toJSON();
        expect(tree).toMatchSnapshot();
    });
})
