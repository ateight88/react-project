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
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Submit with search term: ${searchTerm}`);
  };

  const filteredSymbols = symbolNames.filter(([symbol, name]) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Filter by company name:
          <input type='text' value={searchTerm} onChange={handleSearchChange} />
        </label>
        <button type='submit'>Search</button>

        {!showModal ? (
          <button type='button' onClick={handleShowModal}>
            Show List
          </button>
        ) : (
          <button type='button' onClick={handleCloseModal}>
            Close
          </button>
        )}
      </form>
      {showModal && (
        <div className='modal'>
          <div className='modal-content'>
            <ul>
              {filteredSymbols.map(([symbol, name]) => (
                <li key={symbol}>{`${name} (${symbol})`}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

<style>{`
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}

.modal-content button {
  float: right;
}
`}</style>;

export default FilteredSearch;

// import { useState } from 'react';

// const symbolNames = [
//   ['AAPL', 'Apple Inc.'],
//   ['GOOGL', 'Alphabet Inc.'],
//   ['MSFT', 'Microsoft Corporation'],
//   ['META', 'Meta'],
//   ['AAPL', 'Apple'],
//   ['AMZN', 'Amazon'],
//   ['NFLX', 'Netflix'],
// ];

// const FilteredSearch = () => {
//   const [searchSymbol, setSearchSymbol] = useState('');

//   const handleSearchChange = event => {
//     setSearchSymbol(event.target.value);
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     console.log(`Search: ${searchSymbol}`);
//   };

//   const filteredSymbols = symbolNames.filter(([symbol, name]) =>
//     name.toLowerCase().includes(searchSymbol.toLowerCase())
//   );

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Filter by company name:
//           <input
//             type='text'
//             value={searchSymbol}
//             onChange={handleSearchChange}
//           />
//         </label>
//         <button type='submit'>Search</button>
//       </form>
//       <ul>
//         {filteredSymbols.map(([symbol, name]) => (
//           <li key={symbol}>{`${name} (${symbol})`}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FilteredSearch;
