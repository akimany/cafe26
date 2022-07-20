import { useState } from 'react';
import './cms.styles';
import { Section } from './section/section.compnent';

export const CMS = () => {
  const [toggleSection, setToggleSection] = useState({ isopen: false });
  const handleClick = () => setToggleSection({ isopen: true });

  return (
    <div>
      <h1>CMS</h1>
      {toggleSection.isopen && (
        <Section getter={toggleSection} setter={setToggleSection} />
      )}
      <button onClick={handleClick}>Add Section</button>
    </div>
  );
};
