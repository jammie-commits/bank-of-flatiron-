import React, {useState} from 'react'

function SearchBar({ onSearch}) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
      };

  return (
    <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search Transactions..." />  
  );
}

export default SearchBar