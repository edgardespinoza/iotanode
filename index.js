// Require the use of IOTA library
const Iota = require('@iota/core')
const Converter = require('@iota/converter')

// Create a new instance of the IOTA class object.
// Use 'provider' variable to specify which Full Node to talk to
const iota = Iota.composeAPI({
  provider: 'https://nodes.devnet.iota.org:443'
})

// Call the 'getNodeInfo call to check that the node is working
iota.getNodeInfo()
    .then(info => console.log(info))
    .catch(err => {})

    const address = 'RZWPNAJJRJCWKBORFZJCRUITVMUEUYBDUMFVLHFNYCJDUYCQLFEOEOWZJELYHZBJDYMSCRVMEEBTJWIOX'
    const seed ='RXJMNCXBVNNWEWUGSVNJDCZDDXDEYJGDMOKSVAKMM9MABPBWMQCRXVFRJIKYQRBVKBQWJTXVGGNFNWC9I'

    const message = Converter.asciiToTrytes('Hello World!')

    const transfers = [
      {
        value: 1,
        address: address,
        message: message
      }
    ]

iota.prepareTransfers(seed, transfers)
  .then(trytes => iota.sendTrytes(trytes, 3, 9))
  .then(bundle => {
    console.log(bundle)
  })
  .catch(err => {
    console.log(err)
  })
