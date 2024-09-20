const ADDRESSES = require('../helper/coreAssets.json');
const { sumTokens } = require('../helper/sumTokens');

const bridge = "0xAB13B8eecf5AA2460841d75da5d5D861fD5B8A39";

async function tvl(api) {
    const balances = {};
    await sumTokens({
        api,
        balances,
        owners: [bridge],
        tokens: [ADDRESSES.ethereum.tBTC, ADDRESSES.ethereum.WBTC, ADDRESSES.ethereum.CRVUSD, '0x7A56E1C57C7475CCf742a1832B028F0456652F97', ADDRESSES.ethereum.USDe, '0xCFC5bD99915aAa815401C5a41A927aB7a38d29cf', ADDRESSES.ethereum.USDC, ADDRESSES.ethereum.USDT, ADDRESSES.ethereum.DAI, '0xC96dE26018A54D51c097160568752c4E3BD6C364', '0x8db2350d78abc13f5673a411d4700bcf87864dde', '0xf7AcA11437476649663493aAa863AE047f94139F']
    })
    return balances
}

module.exports = {
    ethereum: { tvl }
}
