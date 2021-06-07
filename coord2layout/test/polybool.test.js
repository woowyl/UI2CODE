const Polybool = require('../utils/polybool')
const mockData = require('../demo/demo.json')

function main() {
  const polyBool = new Polybool(mockData.compos)
  polyBool.createDomTree()
}

main()