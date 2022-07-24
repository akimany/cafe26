import { useState } from 'react';

import './items.styles';

const addFood = () => {
  //
};

export const Items = () => {
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
