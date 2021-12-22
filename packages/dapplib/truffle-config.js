require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift renew stick slow good clog metal gas'; 
let testAccounts = [
"0x9f85ea081db726cf74589fb6acda7a9b612b09124c3cab2767d6b2dd4e182def",
"0xb03c0d0af3d6d3a4df997ee728a7a6325990868351597ec3b6111d3557da4db7",
"0xb1d83e1da2414ff6635bdde2e197a031fa703d23c9a8c08c653218299f768d5a",
"0xc7b15c02be943413a7a351a814e2f30c61389b66568c7b5286251ee56c702400",
"0x7e5ed1e8302025949a310f8cf71dcb113a9411427df0eb9b5c2ccd9413ebd1f4",
"0xf53f8273f0e24388ecbe51a51a8f971b40b669bf99fc5c4bfb38bd4dc3bc3fe9",
"0x3420c2f7e15fb32de6bd34bbffa86bc573a6a3b4e01e85b40fb51c15abe58115",
"0x2b21948ad51b969915739ab010c069985ca21fdd4394ed2b47151f38d8b185ff",
"0x9df6d68697f571a2befbd60f318bbcf7e014090481c027404fd3336e7429232d",
"0x3a3b08d4ec5f1be46a98ab188ce20ab2ba5cc39c51827850d8011d7d13a0d5a4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


