import React, { useState } from 'react';
import PortfolioStocksService from '../PortfolioStocksServices';

const BuyPanel = ( { selectedStock }) => {

    const newStock = {
        name: "Gamestop",
        symbol: "GME",
        date_purchased: "2022-03-05",
        holdings: "500"
    }

    PortfolioStocksService.addPortfolioStock(newStock)

//         PortfolioStocksService.addPortfolioStock(holdingsPurchasedToSubmit)
//         .then((response) => {
//             setHoldingsPurchased("");
//             setShowHoldingsPurchased({ show:true, holdings: response.holdings });
//         })
//         .catch((error) => {
//             console.log(error);
//         });

    return (

        <>
        <p>Buy Panel</p>
        <form id="buy_form" onSubmit={handleFormSubmit}>
            <label>Amount to buy:
                <input 
                type="text" 
                placeholder="0" 
                name="holdings" 
                value={newStock.holdings}
                onChange={handleHoldingsPurchasedChange}
                /> 
            </label>
            <button type="submit">Buy</button>
        </form>
        </>
    );
    
}


// const BuyPanel = ( { addHolding }) => {

//     const [holdingsPurchased, setHoldingsPurchased] = useState({
//         name: "",
//         symbol: "",
//         date_purchased: "",
//         holdings: "",
//     });
//     const [showHoldingsPurchased, setShowHoldingsPurchased] = useState({show: false, holdings: ""});



//     const handleFormSubmit = (event) => {
//         event.preventDefault();
//         console.log(event.target.holdings.value);
//         const holdingsPurchasedToSubmit = holdingsPurchased.holdings.trim();
//         if (!holdingsPurchasedToSubmit) {
//             return;
//         }

//         PortfolioStocksService.addPortfolioStock(holdingsPurchasedToSubmit)
//         .then((response) => {
//             setHoldingsPurchased("");
//             setShowHoldingsPurchased({ show:true, holdings: response.holdings });
//         })
//         .catch((error) => {
//             console.log(error);
//         });
    
//     };


//   // This doesn't work properly from constHoldingsPurchasedToSubmit to here.

//         // TODO: Update Text in StockBox -- ?? or in Buy Panel
  


//     const handleHoldingsPurchasedChange = (event) => {
//         const newHoldingsPurchased = Object.assign({}, holdingsPurchased);
//         newHoldingsPurchased[event.target.name] = event.target.value;
//         setHoldingsPurchased(newHoldingsPurchased);

//     };


//     return (
//         <>
//         <p>Buy Panel</p>
//         <form id="buy_form" onSubmit={handleFormSubmit}>
//             <label>Amount to buy:
//                 <input 
//                 type="text" 
//                 placeholder="0" 
//                 name="holdings" 
//                 value={holdingsPurchased.holdings}
//                 onChange={handleHoldingsPurchasedChange}
//                 /> 
//             </label>
//             <button type="submit">Buy</button>
//         </form>
//         {showHoldingsPurchased.show && <p>You have purchased {showHoldingsPurchased.holdings} holdings of.</p>}
//         </>
//     );

// };


// // re-render once purchased. DONE
// // should input type be text?  number..?
// // add to db
// // update total holdings.  you purchased x of x stocks.  you now hold x of x stocks.
// // should this instead render in StockBox?
// // Figure out how to render name of stock

// // Speak to Paul about rendering of portfolio stocks details in StockBox.

// // Link to DB.

// // The number of stocks is not linked to the name of the stock - how do we link these?




export default BuyPanel
;