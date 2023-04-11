function getStockSymbols(stocks) {
  /*const bols = [];
  stocks.forEach(function (stock) {
    bols.push(stock.symbol);
  });
  return bols;*/

  Array.prototype.map = function (projection) {
    var results = [];
    this.forEach(function (item) {
      results.push(projection(item));
    });
    return results;
  };

  return stocks.map(function (stock) {
    return stock.vol;
  });
}

const symbols = getStockSymbols([
  { symbol: 'TATA', price: 750, vol: 500 },
  { symbol: 'ADANI', price: 1000, vol: 250 },
  { symbol: 'REL', price: 600, vol: 350 },
]);

// array.prototype.filter = function (predicate) {
//   var results = [];
//   this.forEach(function (item) {
//     if (predicate(item)) {
//       results.push(item);
//     }
//   });
//   return results;
// };

function getStocksOver(stocks, minprice) {
  // const results = [];
  // stocks.forEach(function (stock) {
  //   if (stock.price >= minprice) {
  //     results.push(stock);
  //   }
  // });
  // return results;
  return stocks.filter(function (stock) {
    return stock.price >= minprice;
  });
}

const expensiveStocks = getStocksOver(
  [
    { symbol: 'TATA', price: 750, vol: 500 },
    { symbol: 'ADANI', price: 1000, vol: 250 },
    { symbol: 'REL', price: 600, vol: 350 },
  ],
  650.0
);

// console.log(JSON.stringify(expensiveStocks));

const stocks = [
  { symbol: 'TATA', price: 750, vol: 500 },
  { symbol: 'ADANI', price: 1000, vol: 250 },
  { symbol: 'REL', price: 600, vol: 350 },
];

const filteredStocksSymbols = stocks
  .filter((stock) => {
    return stock.price >= 650.0;
  })
  .map((stock) => {
    return stock.symbol;
  })
  .forEach((symbol) => {
    // console.log(symbol);
  });

const exchanges = [
  [
    { symbol: 'TATA', price: 750, vol: 500 },
    { symbol: 'ADANI', price: 1000, vol: 250 },
    { symbol: 'KUN', price: 600, vol: 350 },
  ],
  [
    { symbol: 'GOX', price: 750, vol: 500 },
    { symbol: 'DEL', price: 1000, vol: 250 },
    { symbol: 'PUN', price: 600, vol: 350 },
  ],
];

// flatten a 2D array in 1D array
Array.prototype.concatAll = function () {
  var results = [];

  this.forEach(function (subArray) {
    subArray.forEach(function (item) {
      results.push(item);
    });
  });

  return results;
};

const flattenStocks = exchanges.concatAll();

console.log(JSON.stringify(flattenStocks));

/*exchanges.forEach(function (exchange) {
  exchange.forEach(function (stock) {
    console.log(JSON.stringify(stock));
  });
});*/
