import React from 'react';
import Stock from './Stock';
import StockChart from './StockChart';
import HighChartsStock from './HighChartsStock';
import './App.css';

/*
To see the Ploty chart uncomment <Stock /> component
To see the HightChart  uncomment <StockChart /> component
To see the different chart types  uncomment     <HighChartsStock />  component
*/

function App() {
  return (
    <div className='App'>
      <StockChart />
      {/* <Stock /> */}
      {/* <HighChartsStock /> */}
    </div>
  );
}

export default App;
