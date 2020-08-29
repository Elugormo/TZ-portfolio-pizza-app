import React from "react";
import { useState } from "react";


function Categories({ items }) {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleClick = (idx) => {
    setSelectedItem(idx);
  };

  return (
    <div className="categories">
      <ul>
        {items &&
          items.map((item, idx) => (
            <li
              className={selectedItem === idx ? "active" : ""}
              onClick={() => handleClick(idx)}
              key={idx}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
