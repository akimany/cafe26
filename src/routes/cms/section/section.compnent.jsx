import './section.styles';
import { SectionContainer } from './section.styles';

const handleRemove = (setter, id) =>
  setter((state) => {
    console.log(
      state.filter((section) => {
        return section.id !== id;
      })
    );
    return state.filter((section) => section.id !== id);
  });

export const Section = (props) => {
  const { setter, id } = props;
  return (
    <SectionContainer>
      <h1>Section container</h1>
      <button onClick={() => handleRemove(setter, id)}>Delete</button>
    </SectionContainer>
  );
};
