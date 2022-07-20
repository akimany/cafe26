import './section.styles';
import { SectionContainer } from './section.styles';

export const Section = (props) => {
  const { getter, setter } = props;

  const handleClick = () => setter({ isOpen: false });

  return (
    <SectionContainer>
      <h1>Section container</h1>
      <button onClick={handleClick}>Delete</button>
    </SectionContainer>
  );
};
