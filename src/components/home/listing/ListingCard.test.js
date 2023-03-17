import React from 'react';
import RecentCard from "./ListingCard"
import {mount} from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { BrowserRouter } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() });


const component = () => {
    return mount (<BrowserRouter initialEntries={[`/`]}>
        <RecentCard />
    </BrowserRouter>)
}

describe('ListingCard Component', () => {

    let wrapper = null;

    beforeEach(() => {
        wrapper = component();
    });

    it('is rendered', () => {
        const recentCard = wrapper.find('.content');
        expect(recentCard.length).toBe(1);
    })

    it('render button with text price', () => {
        const priceText = wrapper.find({'data-testid': 'btn-price'}).first().text();
        expect(priceText).toContain('€ 750');
    })

    it('render button with text price', () => {
        const priceText = wrapper.find({'data-testid': 'btn-VR'}).first().text();
        expect(priceText).toContain('VR View');
    })
})