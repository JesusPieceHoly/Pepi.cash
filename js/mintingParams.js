// Configure minting params

// Wallet Connect projectId
const projectId = "ee25137ab77cffa284900841206a8e8f";

// Url of the API server
const urlApiServer = "https://api.pepi.cash";

// Contract Params mint
const tokenId = "f3eb5028ceff56b2c9a4ac6f56d12655f540426504ec8ff3ab23b9ed0e19a9b3";
const collectionSize = 7_777;
const numberOfThreads = 25;
const mintPriceSats = 1_450_000;
const payoutAddress = "bitcoincash:qrxsmt820w5lm4ep5zckesrq9zz6cpn7dq8mvrennl"; // with bitcoincash: or bchtest: prefix
const network = "mainnet";

// Wallet Connect Metadata
const wcMetadata = {
  name: 'Pepi Cash Token',
  description: 'CashTokens NFT Collection',
  url: 'https://pepi.cash/',
  icons: ['https://pepi.cash/images/logo.png']
};

export { projectId, urlApiServer, tokenId, collectionSize, mintPriceSats, payoutAddress, numberOfThreads, network, wcMetadata };
