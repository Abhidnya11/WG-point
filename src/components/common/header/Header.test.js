import Header  from "./Header"
import {mount} from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { MemoryRouter } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

// describe("App Component", () => {
//     let wrapper = null;

//     const component = (path) => {
//       return mount(
//       <MemoryRouter initialEntries={[`${path}`]}>
//       <App/>
//       </MemoryRouter>
//     )};

const component = (path) => {
    return mount (
    <MemoryRouter initialEntries={[`${path}`]}>
        <Header />
    </MemoryRouter>)
}

describe('Header Component', () => {

    let wrapper = null;

    beforeEach(() => {
        wrapper = component();
    });

    it('render button with text login', () => {
        const loginText = wrapper.find({'data-testid': 'login-btn'}).text();
        expect(loginText).toContain('Login');
    })

    it('render h1 logo text', () => {
        const logoText = wrapper.find({'data-testid': 'logo'}).text();
        expect(logoText).toContain('WG-point');
    })
})