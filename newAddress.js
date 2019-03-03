const Iota = require('@iota/core')
const Converter = require('@iota/converter')

const iota = Iota.composeAPI({
  provider: 'https://nodes.devnet.iota.org:443'
})

const seed ="ASHRQEC9EWQJIRUEDGJHXQAREYDRVXPTFNVOZTOFJN9YXCGIWSVEIPQCFNWSXTEVAPSOM9XEMJCWWNSDM"

iota.getNewAddress(seed, {
  index: 0,
  total: 1,
  security: 2})
  .then(address => {
    console.log(address)
  })
  .catch(err => {
    console.log(err)
  })
