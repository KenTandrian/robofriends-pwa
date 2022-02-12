import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Card from './Card';

// shallow only test render one thing at a time.
// mount will do full DOM render, renders on a dom, e.g., JSDOM
// render will render all children in the specific component.
it('expect to render Card component', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
});