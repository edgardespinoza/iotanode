const Iota = require('@iota/core')
const Converter = require('@iota/converter')

const iota = Iota.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})

/*
"https://nodes.devnet.thetangle.org:443"  OK ,
"https://testnet140.tangle.works:443"   OK,
"http://p103.iotaledger.net:14700"  OK,


    http://p101.iotaledger.net:14700    X
    "https://nodes.devnet.iota.org:443"   X,
    "https://node.tangle.works:443"      x,
    "http://iota.bitfinex.com:80"    X,
    "http://eugene.iota.community:14265" X,
    "http://wallets.iotamexico.com:80" X,
  "http://mainnet.necropaz.com:14500"  X
*/

//const seedOrigin ="RXJMNCXBVNNWEWUGSVNJDCZDDXDEYJGDMOKSVAKMM9MABPBWMQCRXVFRJIKYQRBVKBQWJTXVGGNFNWC9I"
//const addressDestination = 'RZWPNAJJRJCWKBORFZJCRUITVMUEUYBDUMFVLHFNYCJDUYCQLFEOEOWZJELYHZBJDYMSCRVMEEBTJWIOX'
//WALLET ORIGIN
const seedOrigin ="BSGVQYSDGLXPQFWXGTLZZBZTBKFB99ZQJWGCSHOLSUKFWCAPNEPLZUPHHZBU9J9MPDKBTEHHBICOKMLNY"
//DESTINATION ACCOUNT
const addressDestination = 'KWJVOHZHGWNEWDJNIGVZDYEDRUNAE9KJ9NMDUSSDQKCKDAHTSRBTUEQVOOMJWVZISTERFHZKEXRLXBMWD'


const message = Converter.asciiToTrytes('transferencia IOTA')

const transfers = [{value: 1,
                    address: addressDestination,
                    message: message}]
console.time('someFunction');
iota.prepareTransfers(seedOrigin, transfers)
.then(trytes => iota.sendTrytes(trytes, (depth = 3), (mwm = 9)))
.then(bundle => {
   console.timeEnd('someFunction');
    console.log(bundle)
}).catch(err => {
  console.log(err)
})
