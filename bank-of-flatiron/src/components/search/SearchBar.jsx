function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search Transactions..." />
  );
}
