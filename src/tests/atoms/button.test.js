import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../../components/atoms/Button';

configure({ adapter: new Adapter() });
const mockFn = jest.fn();

describe('Button', () => {
    it('should be defined', () => {
      expect(Button).toBeDefined();
    });

    it('should render correctly', () => {
      const tree = shallow(
        <Button name='button test' />
      );
      expect(tree).toMatchSnapshot();
    });
    it('should call click handler when button is clicked', () => {
        const tree = shallow(
          <Button text="button" type="button" handler={ mockFn } />
        );
        tree.simulate('click');
        expect(mockFn).toHaveBeenCalled();
    });
    it('should have a button class', () => {
        const tree = shallow(
          <Button text='button test' classes='button' />
        );
        expect(typeof(tree.find('.button').getElement().props.children)).toBe('object');
        expect(tree.find('.button').getElement().props.className).toEqual('button');
    });
});