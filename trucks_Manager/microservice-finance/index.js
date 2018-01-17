const yahooFinance = require('yahoo-finance');
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.Promise = require('bluebird');
const {createOrUpdateStock} = require('./app/controllers/stocks');
const rp = require('request-promise');

mongoose.connect(process.env.DB, {useMongoClient: true});
const stocks = [
    'BNP.PA',
    'FP.PA',
    'TSLA',
    'AAPL',
    'GOOG',
    'MSFT',
    'IBM',
    'AMZN',
    'ORCL',
    'INTC',
    'QCOM',
    'FB',
    'CSCO',
    'SAP',
    'TSM',
    'BIDU',
    'HPQ',
    'TXN',
    'ERIC',
    'ASML',
    'CAJ',
];

const getValue = async symbol => {
    const stock = await yahooFinance.quote({
        symbol,
        modules: ['financialData']
    });
    return stock.financialData.currentPrice;
};

const mainMicroServeFinance = async () => {
    try {
        const valuesPromises = stocks.map(a => getValue(a));
        const results = await Promise.all(valuesPromises);
        const formattedResults = stocks.map((a, idx) => {
            return {[a]: results[idx]};
        });

        stocks.map((a, idx) => {
            createOrUpdateStock(a, results[idx]);
        });
        const url = `${process.env.INIT_URL}`;
        rp(url);
        //console.log(formattedResults);
        setInterval(mainMicroServeFinance, 600000);
    } catch (err) {
        console.log(err);
    }
};
mainMicroServeFinance();
