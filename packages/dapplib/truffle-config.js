require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena other seed dance cruise million puppy grace sleep obscure vicious'; 
let testAccounts = [
"0x0160d05e10167e00a812f6246d544e40832af56197f0947f3de835fd3b32a6de",
"0xe6fc5ce764381fab728347e3c3d722cd3a7c9a6bdfc4b38702c7116f314de4ae",
"0x39e55ac182750ab82b131dee19c8956a6a8d9e5d1366a26cbf5132437cdd20be",
"0x10bc741f51997f9a019d7d3443bde39d2cfa20c9f26926ee0ecd4055f1460177",
"0xb32c408876bcc609942c4f38c8f8640d741f313446378937b0314e81aed74be8",
"0x4ff7e2f6ec6207c8c3ab6e88b470971f6d545f9d6e66575bacdf4fe5b73dc038",
"0x56484450de281ec3e44a3a4ab1abfe49d21923c3ad6b7a577f971f599bc967ab",
"0xa6975a89cab398160ff27e0465eb1c574ab44e834b12fbb2a98a246b874bf219",
"0xb050e278ddcb0b15450b0909e63a7e3315f7ace06c29500f5f14d0a70a61db57",
"0x9c5607d4e50aaadc410a5d0aed8632df4ccff7b3a35b3640d9b890f2287d4b10"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

