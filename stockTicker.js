// The stockTicker input will be a normal array where every two values are a [stock ticker, stock value] pair.
// var stockTicker = ['YHOO', 34.4, 'GOOG', 724.03, 'AMZN', 651.23, 'AAPL', 120.44];
// There can be an unlimited number of stock value pairs specified in the stockTicker array.

// The portfolio argument will be an array of arrays. For example, if you had 100 shares of AAPL and 200 shares of YHOO, the portfolio variable will look like this:
// var portfolio = [['AAPL', 100], ['YHOO', 200]]
// Notice that unlike stockTicker, these pairs each are grouped within their own subarray.

function totalPortfolioValue(stockTicker, portfolio) {
	let sum = 0;
	let myObj = {};
	for (let i = 0; i< stockTicker.length - 1; i++) {
		if (i % 2 !== 1) {
			myObj[stockTicker[i]] = stockTicker[i+1];
		}
	}	
	for (let j = 0; j<portfolio.length; j++) {

		sum += myObj[portfolio[j][0]] * portfolio[j][1];
	}
	return sum;
}



var ticker = ['ABC', 10, 'XYZ', 200, 'BBB', 5];
var portfolio = [['XYZ', 20], ['BBB', 10]];

console.log(totalPortfolioValue(ticker, portfolio));
//OUTPUT: 4050