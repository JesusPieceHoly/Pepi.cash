// Configure minting params

// Wallet Connect projectId
const projectId = "ee25137ab77cffa284900841206a8e8f";

// Url of the API server
const urlApiServer = "https://api.pepi.cash";

// Contract Params mint
const tokenId = "1a05bce0af8b57e27b11e9429fc534d0fc27230fc541928f38b3ca945c4bca11";
const collectionSize = 7_777;
const numberOfThreads = 20;
const mintPriceSats = 1_000_000;
const payoutAddress = "bitcoincash:qzm5qumtmmdf49tx4gwn85yyv6wm4efyqqlzhyd8sg"; // with bitcoincash: or bchtest: prefix
const network = "mainnet";

// Wallet Connect Metadata
const wcMetadata = {
  name: 'Pepi Cash Token',
  description: 'The original Meme frog on Cash Tokens BCH',
  url: 'https://pepi.cash/',
  icons: ['https://pepi.cash/images/logo.png']
};

export { projectId, urlApiServer, tokenId, collectionSize, mintPriceSats, payoutAddress, numberOfThreads, network, wcMetadata };
