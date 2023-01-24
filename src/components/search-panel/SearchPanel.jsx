import React from 'react';
import './search-panel.css'

const SearchPanel = () => {
  return (
    <div>
      <input type="text" className='form-control search-input' placeholder='Kinorlarni qidirish' />
    </div>
  );
};

export default SearchPanel;