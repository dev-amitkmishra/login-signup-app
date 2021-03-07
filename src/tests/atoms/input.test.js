import React from 'react';
import renderer from 'react-test-renderer';
import Input from '../../components/atoms/Input';

describe('Input', () => {
    it('renders correctly', () => {
        const mockfn = jest.fn();
        const tree = renderer.create(<Input classes='test' handler={mockfn} text='test' />).toJSON();
        expect(tree).toMatchSnapshot();
    });
})