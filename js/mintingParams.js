// Configure minting params

// Wallet Connect projectId
const projectId = "ee25137ab77cffa284900841206a8e8f";

// Url of the API server
const urlApiServer = "https://api.pepi.cash";

// Contract Params mint
const tokenId = "77a95410a07c2392c340384aef323aea902ebfa698a35815c4ef100062c6d8ac";
const collectionSize = 7_777;
const numberOfThreads = 25;
const mintPriceSats = 1_450_000;
const payoutAddress = "bitcoincash:qqds0h006djrnast7ktvf7y3lrmvu0d7yqzhuzgvaa"; // with bitcoincash: or bchtest: prefix
const network = "mainnet";

// Wallet Connect Metadata
const wcMetadata = {
  name: 'Pepi Cash Token',
  description: 'CashTokens NFT Collection',
  url: 'https://pepi.cash/',
  icons: ['https://pepi.cash/images/logo.png']
};

export { projectId, urlApiServer, tokenId, collectionSize, mintPriceSats, payoutAddress, numberOfThreads, network, wcMetadata };
