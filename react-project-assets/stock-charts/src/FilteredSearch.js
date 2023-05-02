import { useState } from 'react';

const symbolNames = [
  ['AAPL', 'Apple Inc.'],
  ['GOOGL', 'Alphabet Inc.'],
  ['MSFT', 'Microsoft Corporation'],
  ['META', 'Meta'],
  ['AAPL', 'Apple'],
  ['AMZN', 'Amazon'],
  ['NFLX', 'Netflix'],
];

const FilteredSearch = () => {
  const [searchSymbol, setSearchSymbol] = useState('');

  const handleSearchChange = event => {
    setSearchSymbol(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Search: ${searchSymbol}`);
  };

  const filteredSymbols = symbolNames.filter(([symbol, name]) =>
    name.toLowerCase().includes(searchSymbol.toLowerCase())
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Filter by company name:
          <input
            type='text'
            value={searchSymbol}
            onChange={handleSearchChange}
          />
        </label>
        <button type='submit'>Search</button>
      </form>
      <ul>
        {filteredSymbols.map(([symbol, name]) => (
          <li key={symbol}>{`${name} (${symbol})`}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredSearch;
