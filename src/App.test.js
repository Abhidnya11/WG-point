import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import About from '';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Products from './components/Products/Products';



describe("App Component", () => {
    let wrapper = null;

    const component = (path) => {
      return mount(
      <MemoryRouter initialEntries={[`${path}`]}>
      <App/>
      </MemoryRouter>
    )};

    beforeEach(() => {
      wrapper =component();
    });

    it('is Rendered', () => {
      const app = wrapper.find({'data-testid': 'App'});
      expect(app.length).toBe(1);
    });

    it('displays Navbar with brand name', () => {
      const navbar = wrapper.find({'data-testid': 'main_nav'});
      expect(navbar.length).toBe(1);

      const h1 = wrapper.find({'data-testid': 'brand_name'});
      expect(h1.length).toBe(1);
      expect(h1.text()).toBe('The Clothing Company')
      
    })

    it('display navlink with correct display name', () => {
      const navlink = wrapper.find('NavLink');
      expect(navlink.at(0).text()).toBe("Home");
      expect(navlink.at(1).text()).toBe("About");
      expect(navlink.at(2).text()).toBe("Products");
    });

    it('display navlink with correct path name', () => {
      const navlink = wrapper.find('NavLink');
      expect(navlink.at(0).prop('to')).toBe("/");
      expect(navlink.at(1).prop('to')).toBe("/about");
      expect(navlink.at(2).prop('to')).toBe("/products");
    });

    it('display navlink with correct button properties', () => {
      const button = wrapper.find('Button');
      expect(button.prop('isUserLoggedIn')).toBe(true);
      expect(button.prop('ifUserLoggedIn')).toBe('Logout');
      expect(button.prop('ifUserNotLoggedIn')).toBe("Login");
      expect(button.prop('isLoading')).toBe(false);
      expect(typeof button.prop('handleLogin')).toBe('function');
    });

    it('renders home correctly', () => {
      wrapper = component('/');  
      expect(wrapper.find(Home)).toHaveLength(1);
      expect(wrapper.find(About)).toHaveLength(0);
      expect(wrapper.find(Products)).toHaveLength(0);
      expect(wrapper.find(ProductDetails)).toHaveLength(0);
    });

    it('renders home correctly', () => {
      wrapper = component('/about');  
      expect(wrapper.find(About)).toHaveLength(1);
      expect(wrapper.find(Home)).toHaveLength(0);
      expect(wrapper.find(Products)).toHaveLength(0);
      expect(wrapper.find(ProductDetails)).toHaveLength(0);
    });

    it('renders home correctly', () => {
      wrapper = component('/products');  
      expect(wrapper.find(Products)).toHaveLength(1);
      expect(wrapper.find(Home)).toHaveLength(0);
      expect(wrapper.find(About)).toHaveLength(0);
      expect(wrapper.find(ProductDetails)).toHaveLength(0);
    });

    it('renders home correctly', () => {
      wrapper = component('/products');  
      expect(wrapper.find(Products)).toHaveLength(1);
      expect(wrapper.find(Products).prop('isLoading')).toBe(false);
      // expect(wrapper.find(Products).props('isUserLoggedIn')).toBe(false);
      
    });
  })