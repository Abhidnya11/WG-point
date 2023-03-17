import About from "./About"
import {mount} from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });


const component = () => {
    return mount (<About />)
}

describe('About Component', () => {

    let wrapper = null;

    beforeEach(() => {
        wrapper = component();
    });

    it('is rendered', () => {
        const about = wrapper.find('.about');
        expect(about.length).toBe(1);
    })

    it('is text rendered', () => {
        const aboutText = wrapper.find({'data-testid': 'p1'}).text();
        expect(aboutText).toContain('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
    })

})