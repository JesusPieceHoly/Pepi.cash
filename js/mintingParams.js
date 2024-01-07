// Configure minting params

// Wallet Connect projectId
const projectId = "ee25137ab77cffa284900841206a8e8f";

// Url of the API server
const urlApiServer = "https://api.pepi.cash";

// Contract Params mint
const tokenId = "5deaf71fcce24212949e0d5120adb242ad826ade9169c57ebd0970812cd3a598";
const collectionSize = 7_777;
const numberOfThreads = 10;
const mintPriceSats = 1_450_000;
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
