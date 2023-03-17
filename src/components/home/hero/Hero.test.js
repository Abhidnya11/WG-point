import React from 'react';
import Hero from "./Hero"
import {mount} from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });


const component = () => {
    return mount (<Hero />)
}

describe('About Component', () => {

    let wrapper = null;

    beforeEach(() => {
        wrapper = component();
    });

    it('is rendered', () => {
        const hero = wrapper.find('.hero');
        expect(hero.length).toBe(1);
    })

    it('render button with text search', () => {
        const searchText = wrapper.find({'data-testid': 'button-cl'}).text();
        expect(searchText).toContain('Search');
    })


})