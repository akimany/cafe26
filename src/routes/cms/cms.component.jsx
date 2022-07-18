import { useState } from 'react';
import './cms.styles';
import { Section } from './section/section.compnent';

export const CMS = () => {
  const [toggleSection, setToggleSection] = useState({ isopen: false });

  const addSection = () =>
    setToggleSection((state) => {
      return { isopen: !state.isopen };
    });

  return (
    <div>
      <h1>CMS</h1>
      {toggleSection.isopen && <Section toggle />}
      <button onClick={addSection}>Add Section</button>
    </div>
  );
};
