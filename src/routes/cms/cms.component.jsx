import { useState } from 'react';
import './cms.styles';
import { Section } from './section/section.compnent';

export const CMS = () => {
  const [toggleSection, setToggleSection] = useState([]);

  const handleClick = () =>
    setToggleSection((state) => [
      ...state,
      { isOpen: true, id: Math.random() },
    ]);

  return (
    <div>
      <h1>CMS</h1>
      <button onClick={handleClick}>Add Section</button>
      {toggleSection.length > 0 &&
        toggleSection.map((section) => (
          <Section
            getter={toggleSection}
            setter={setToggleSection}
            id={section.id}
            key={section.id}
          />
        ))}
    </div>
  );
};
