import { useState } from 'react';
import { Items } from '../items/items.component';
import './section.styles';
import { SectionContainer } from './section.styles';

const handleRemove = (setter, id) =>
  setter((state) => state.filter((section) => section.id !== id));

export const Section = (props) => {
  const { setter, id } = props;
  const [toggleItems, setToggleItems] = useState(false);

  return (
    <SectionContainer>
      <h1>Section container</h1>
      <button onClick={() => setToggleItems(() => !toggleItems)}>
        Toggle item
      </button>
      {toggleItems ? <Items /> : ' '}
      <button onClick={() => handleRemove(setter, id)}>Delete</button>
    </SectionContainer>
  );
};
