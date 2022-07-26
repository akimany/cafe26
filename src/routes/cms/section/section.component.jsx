import { useState } from 'react';
import { GenericButton } from '../../../components/button/button.component';
import { Items } from '../items/items.component';
import './section.styles';
import { Section, SectionContainer } from './section.styles';

const handleRemove = (setter, id) => {
  console.log('here');
  return setter((state) => state.filter((section) => section.id !== id));
};

export const SectionComp = (props) => {
  const { setter, id } = props;
  const [toggleItems, setToggleItems] = useState(false);
  const [sectionTitle, setSectionTitle] = useState('');
  const handleChange = (element) => setSectionTitle(element.target.value);

  // TODO: Turn the Section heading into an editable input that saves to 'sectionName'.
  return (
    <SectionContainer>
      <Section>
        <h1>
          <form>
            <label htmlFor="sectionTitle">
              <input
                type="text"
                value={sectionTitle}
                id="sectionTitle"
                onChange={handleChange}
              />
            </label>
          </form>
        </h1>
        <button onClick={() => setToggleItems(() => !toggleItems)}>
          Toggle item
        </button>
        {toggleItems ? <Items /> : ' '}
        <GenericButton onClick={() => console.log('hello')} cta="Delete" />
        <button onClick={() => handleRemove(setter, id)}>Delete</button>
      </Section>
    </SectionContainer>
  );
};
