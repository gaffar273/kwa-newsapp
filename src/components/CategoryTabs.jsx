import React from 'react';
import './CategoryTabs.css';

const categories = ['business', 'technology', 'sports', 'health', 'science', 'entertainment'];

const CategoryTabs = ({ setCategory }) => (
  <div className="tabs">
    {categories.map(cat => (
      <button key={cat} onClick={() => setCategory(cat)} >
        {cat.toUpperCase()}
      </button>
    ))}
  </div>
);

export default CategoryTabs;