const Currencies = require('./currencies/currencies');
const airtableCredentials = require('./airtableCredentials');


const config = {
    airtableCredentials: airtableCredentials,
    airtableCurrenciesTable: {
        name: 'Currencies',
        priceFieldName: 'Price',
        symbolFieldName: 'Symbol',
        marketCapFieldName: 'Market Cap',
        volumeFieldName: '24h Volume',
    },
    airtableAssetsTable: {
        name: 'Assets',
        fundsFieldName: 'Funds',
        amountFieldName: 'Amount',
    },
    openExchangeCredentials: {
        apiKey: process.env.OPEN_EXCHANGE_API_KEY,
    },
    plaidCredentials: {
        clientId: process.env.PLAID_CLIENT_ID,
        secret: process.env.PLAID_SECRET,
        // Maps the identifying 'Name' field value in the 'Assets' table in Airtable
        // with the Plaid accessToken associated with the asset bank account
        airtableAssetNameToAccessToken: {
            'Chase Bank Balance': process.env.PLAID_ACCESS_TOKEN_FOR_CHASE_ACCOUNT,
        },
    },
    // Add to this list the crypto-assets you wish to update
    // All possible assets listed in: crypto_assets.js
    cryptoAssetsToUpdate: [
        Currencies['eos'],
        Currencies['omisego'],
        Currencies['rchain'],
        Currencies['vechain'],
        Currencies['waltonchain'],
        Currencies['0x'],
        Currencies['icon'],
        Currencies['golem-network-tokens'],
        Currencies['civic'],
        Currencies['augur'],
        Currencies['gnosis-gno'],
        Currencies['aragon'],
        Currencies['basic-attention-token'],
    ],
    // Add to this list the fiat currencies you wish to update
    // All possible Fiat Currencies listed in: fiat_currencies.js
    fiatCurrenciesToUpdate: [
        Currencies['CHF'],
    ],
};

module.exports = config;
