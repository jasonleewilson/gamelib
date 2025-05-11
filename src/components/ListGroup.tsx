interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

import { useState } from "react";

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   const [name, setName] = useState("");

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className='list'>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "py-4 border-b-2 active"
                : "py-4 border-b-2"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
