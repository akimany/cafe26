import { useState } from 'react';
import { GenericButton } from '../../../components/button/button.component';
import { FormElements } from '../form-elements/form-elements';

import './section.styles';
import { Section, SectionContainer } from './section.styles';

const handleRemove = (setToggleThisSection, id) => {
  return setToggleThisSection((state) =>
    state.filter((section) => section.id !== id)
  );
};

export const SectionComponent = ({ setToggleThisSection, id }) => {
  const [toggleFormElements, setToggleFormElements] = useState(false);
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
        <button
          onClick={() => setToggleFormElements(() => !toggleFormElements)}
        >
          Toggle item
        </button>
        {toggleFormElements ? <FormElements /> : ' '}
        <GenericButton
          handleClick={() => handleRemove(setToggleThisSection, id)}
          cta="Custom button Delete"
        />
        <button onClick={() => handleRemove(setToggleThisSection, id)}>
          Delete
        </button>
      </Section>
    </SectionContainer>
  );
};
