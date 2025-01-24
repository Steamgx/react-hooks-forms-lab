import React, { useState } from "react";
import Filter from './Filter';

function ShoppingList({ items }) {
  const [search, setSearch] = useState("");

  // Filter items based on the search term
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Filter search={search} onSearchChange={setSearch} />
      <ul className="Items">
        {filteredItems.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span> - <span>{item.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
