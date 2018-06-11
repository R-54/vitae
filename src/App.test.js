import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import Vitae from './components/Vitae';
import NavBar from './components/NavBar';
import CollapsibleContent from './components/CollapsibleContent';
import Content from './components/Content';
import ContentElements from './components/ContentElements';
import ContentBody from './components/ContentBody';

const data = [
  {
    title: '1',
    body: [
      {
        subtitle: '1',
        info: '1',
      },
      {
        subtitle: '2',
        info: '2',
      },
      {
        subtitle: '3',
        info: '3',
      },
    ],
    title: '2',
    body: [
      {
        subtitle: '1',
        info: '1',
      },
      {
        subtitle: '2',
        info: '2',
      },
      {
        subtitle: '3',
        info: '3',
      },
    ],
    title: '3',
    body: [
      {
        subtitle: '1',
        info: '1',
      },
      {
        subtitle: '2',
        info: '2',
      },
      {
        subtitle: '3',
        info: '3',
      },
    ],
  },
];

configure({ adapter: new Adapter() });

describe('<App />', () => {
  test('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  test('should render a unique <Vitae /> component', () => {
    const app = shallow(<App />);
    expect(app.find(Vitae)).toHaveLength(1);
  });
});

describe('<Vitae />', () => {
  const vitae = shallow(<Vitae />);
  test('should render a unique <NavBar /> component', () => {
    expect(vitae.find(NavBar)).toHaveLength(1);
  });
  test('should render a unique <CollapsibleContent /> component', () => {
    expect(vitae.find(CollapsibleContent)).toHaveLength(1);
  });
  test('should render a unique <Content /> component', () => {
    expect(vitae.find(Content)).toHaveLength(1);
  });
});

describe('<NavBar />', () => {
  const navBar = shallow(<NavBar />);
  test('should render a name in the <NavBar /> component', () => {
    expect(navBar.find('.nav-bar__name')).toHaveLength(1);
  });
  test('should render a button in the <NavBar /> component', () => {
    expect(navBar.find('.nav-bar__button')).toHaveLength(1);
  });
});
