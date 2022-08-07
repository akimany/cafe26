import { useState } from 'react';

import './form-elements.styles';

const addFood = () => {
  //
};

export const FormElements = () => {
  const [food, setFood] = useState([]);

  return (
    <div className="items">
      <label htmlFor="food">
        Food
        <input type="text" id="food" />
      </label>
      <label htmlFor="price">
        Price
        <input type="text" id="price" />
      </label>
      <button onClick={addFood}>Add</button>
    </div>
  );
};
