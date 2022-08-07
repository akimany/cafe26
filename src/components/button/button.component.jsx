import './button.styles';

import { Button } from './button.styles';

export const GenericButton = ({ cta, handleClick }) => {
  return (
    <Button type="button" onClick={handleClick}>
      {cta}
    </Button>
  );
};
