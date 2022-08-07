import { useState } from 'react';
import './cms.styles';
import { CMSContainer } from './cms.styles';
import { SectionComponent } from './section/section.component';

// const sections = [
//   // {
//   //   sectionTitle: '',
//   //   sectionFoods: [
//   //     {
//   //       food: '',
//   //       price: '',
//   //     },
//   //   ],
//   // },
// ];

export const CMS = () => {
  const [toggleThisSection, setToggleThisSection] = useState([]);

  const handleAddSection = () => {
    setToggleThisSection((state) => [
      ...state,
      { isOpen: true, id: Math.random() },
    ]);
  };

  return (
    <CMSContainer>
      <h1>CMS</h1>
      <button onClick={handleAddSection}>Add Section</button>
      {toggleThisSection.length > 0 &&
        toggleThisSection.map((section) => (
          <SectionComponent
            toggleThisSection={toggleThisSection}
            setToggleThisSection={setToggleThisSection}
            id={section.id}
            key={section.id}
          />
        ))}
    </CMSContainer>
  );
};
