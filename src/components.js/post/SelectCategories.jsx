import React from 'react';

function SelectCategories() {
  return (
    <div>
      <select class='form-select' aria-label='Default select example'>
        <option selected></option>
        <option value='1'>Events</option>
        <option value='2'>Missed Connections</option>
      </select>
    </div>
  );
}

export default SelectCategories;
