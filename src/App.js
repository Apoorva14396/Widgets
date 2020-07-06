import React, { useState, useEffect } from 'react';

import Accordion from './components/Accordion';
import Search from './components/Search';
import DropDown from './components/DropDown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  { title: 'What is React?', content: 'React is a JavaScript front-end library ' },
  { title: 'Why use React?', content: 'React is a favorite JS library among engineers' },
  { title: 'How do you use React?', content: 'You use React by creating component' }
];

const options = [
  { label: 'The Color Red', value: 'red' },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  }
];

// const showAccordion = () => {
//   if (window.location.pathname === '/') {
//     return <Accordion items={items} />;
//   }
// };

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <DropDown label='Select a Color' options={options} selected={selected} onSelectedChange={setSelected} />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
};
