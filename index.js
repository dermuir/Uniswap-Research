const UNISWAP = require('@uniswap/sdk')

console.log(`Price pair ETH/DAI`)

//Tokens
const USDC = new UNISWAP.Token(UNISWAP.ChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 18,'USDC','USD Coin')
const DAI = new UNISWAP.Token(UNISWAP.ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18,'DAI','Dai')

//Get Price
async function f() {
    const pair = await UNISWAP.Fetcher.fetchPairData(DAI, UNISWAP.WETH[DAI.chainId])
    const route = new UNISWAP.Route([pair], UNISWAP.WETH[DAI.chainId])
    const price = new UNISWAP.Price( DAI, UNISWAP.WETH[DAI.chainId] , route.midPrice.denominator, route.midPrice.numerator)
    console.log('Price route: ' ,route.midPrice.toSignificant(6)) // 201.306
    console.log('Price calculated: ' ,price.toSignificant(6))
}
f().then();

