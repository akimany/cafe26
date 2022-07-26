import { useState } from 'react';
import './cms.styles';
import { CMSContainer } from './cms.styles';
import { SectionComp } from './section/section.component';

const sections = [
  // {
  //   sectionTitle: '',
  //   sectionFoods: [
  //     {
  //       food: '',
  //       price: '',
  //     },
  //   ],
  // },
];

export const CMS = () => {
  const [toggleSection, setToggleSection] = useState([]);

  const handleClick = () => {
    sections.push({
      sectionTitle: '',
      sectionFoods: [],
    });
    setToggleSection((state) => [
      ...state,
      { isOpen: true, id: Math.random() },
    ]);
  };
  // TODO: onClick add section to 'sections' array.

  return (
    <CMSContainer>
      <h1>CMS</h1>
      <button onClick={handleClick}>Add Section</button>
      {toggleSection.length > 0 &&
        toggleSection.map((section) => (
          <SectionComp
            getter={toggleSection}
            setter={setToggleSection}
            id={section.id}
            key={section.id}
            sections={sections}
            style={{ width: '100%', border: '10px solid red' }}
          />
        ))}
    </CMSContainer>
  );
};
