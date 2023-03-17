import React from 'react';
import Propertyview from "./Propertyview"
import {mount,shallow} from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { BrowserRouter } from 'react-router-dom';


Enzyme.configure({ adapter: new Adapter() });

const state = {
    propertyName: "propertyName",
    image: "image",
    date: "date",
  };
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({
      state: {state}
    })
  }));
const component = () => {
    return mount (<BrowserRouter initialEntries={[`/`]}>
        <Propertyview />
    </BrowserRouter>)
}

describe('Propertyview Component', () => {

    let wrapper = null;

    beforeEach(() => {
        wrapper = component();
    });

    it('is rendered', () => {
        const about = wrapper.find('.properties-out');
        expect(about.length).toBe(1);
    })


})