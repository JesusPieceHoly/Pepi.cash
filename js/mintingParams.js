// Configure minting params

// Wallet Connect projectId
const projectId = "ee25137ab77cffa284900841206a8e8f";

// Url of the API server
const urlApiServer = "https://api.pepi.cash";

// Contract Params mint
const tokenId = "a7eeb5b9d3e0e16891d2c2e751454b25e8871fd6b51471660cee496cd7434bec";
const collectionSize = 7_777;
const numberOfThreads = 15;
const mintPriceSats = 1_000_000;
const payoutAddress = "bitcoincash:qzpwqfv9pkycyqxu4ugq5pfe54ufzuadlgp63hh88m"; // with bitcoincash: or bchtest: prefix
const network = "mainnet";

// Wallet Connect Metadata
const wcMetadata = {
  name: 'Pepi Cash Token',
  description: 'The original Meme frog on Cash Tokens BCH',
  url: 'https://pepi.cash/',
  icons: ['https://pepi.cash/images/logo.png']
};

export { projectId, urlApiServer, tokenId, collectionSize, mintPriceSats, payoutAddress, numberOfThreads, network, wcMetadata };
