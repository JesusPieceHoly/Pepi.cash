// Configure minting params

// Wallet Connect projectId
const projectId = "ee25137ab77cffa284900841206a8e8f";

// Url of the API server
const urlApiServer = "https://api.pepi.cash";

// Contract Params mint
const tokenId = "cd10870dab23ac5451e23381b35c1691049f77091463a1f98995d2551a052184";
const collectionSize = 7_777;
const numberOfThreads = 20;
const mintPriceSats = 1_450_000;
const payoutAddress = "bitcoincash:qzm5qumtmmdf49tx4gwn85yyv6wm4efyqqlzhyd8sg"; // with bitcoincash: or bchtest: prefix
const network = "mainnet";

// Wallet Connect Metadata
const wcMetadata = {
  name: 'Pepi Cash Token',
  description: 'CashTokens NFT Collection',
  url: 'https://pepi.cash/',
  icons: ['https://pepi.cash/images/logo.png']
};

export { projectId, urlApiServer, tokenId, collectionSize, mintPriceSats, payoutAddress, numberOfThreads, network, wcMetadata };
