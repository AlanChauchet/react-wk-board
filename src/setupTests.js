import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  createShallow,
  createMount,
  createRender,
} from '@material-ui/core/test-utils';
import 'jest-enzyme';

// React 16 Enzyme adapter

Enzyme.configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing
global.shallow = createShallow();
global.render = createRender();
global.mount = createMount();
