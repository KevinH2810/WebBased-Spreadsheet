# Changelog

## 0.0.4-pre-release (2020-04-09)

### Features

 - **Account**: add get account balance grpc request ([#84](https://github.com/zoobc/zoobc-sdk/pull/84), [#105](https://github.com/zoobc/zoobc-sdk/pull/105), [#127](https://github.com/zoobc/zoobc-sdk/pull/127))
 - **Block**: add get block list grpc request ([#93](https://github.com/zoobc/zoobc-sdk/pull/93), [#124](https://github.com/zoobc/zoobc-sdk/pull/124), [#134](https://github.com/zoobc/zoobc-sdk/pull/134)), issue [#91](https://github.com/zoobc/zoobc-sdk/issues/91)
 - **Block**: add get block detail grpc request ([#93](https://github.com/zoobc/zoobc-sdk/pull/93), [#124](https://github.com/zoobc/zoobc-sdk/pull/124), [#134](https://github.com/zoobc/zoobc-sdk/pull/134)), issue [#91](https://github.com/zoobc/zoobc-sdk/issues/91)
 - **Escrow**: add get escrow list grpc request ([#84](https://github.com/zoobc/zoobc-sdk/pull/84), [#100](https://github.com/zoobc/zoobc-sdk/pull/100), [#132](https://github.com/zoobc/zoobc-sdk/pull/132))
 - **Escrow**: add get escrow detail grpc request ([#84](https://github.com/zoobc/zoobc-sdk/pull/84), [#100](https://github.com/zoobc/zoobc-sdk/pull/100), [#132](https://github.com/zoobc/zoobc-sdk/pull/132))
 - **Escrow**: add approval escrow grpc request ([#84](https://github.com/zoobc/zoobc-sdk/pull/84), [#132](https://github.com/zoobc/zoobc-sdk/pull/132))
 - **Keyring**: add generate random passphrase function ([#84](https://github.com/zoobc/zoobc-sdk/pull/84), [#130](https://github.com/zoobc/zoobc-sdk/pull/130), [#146](https://github.com/zoobc/zoobc-sdk/pull/146))
 - **Keyring**: add generate `bip32RootKey` from pasphrase in Keyring constructor ([#84](https://github.com/zoobc/zoobc-sdk/pull/84), [#130](https://github.com/zoobc/zoobc-sdk/pull/130))
 - **Keyring**: add generate child seed from `bip32RootKey` function using derivation algorithm ([#84](https://github.com/zoobc/zoobc-sdk/pull/84), [#130](https://github.com/zoobc/zoobc-sdk/pull/130))
 - **Keyring**: add passphrase validation function ([#143](https://github.com/zoobc/zoobc-sdk/pull/143)), issue [#135](https://github.com/zoobc/zoobc-sdk/issues/135)
 - **Mempool**: add get mempool list grpc request ([#84](https://github.com/zoobc/zoobc-sdk/pull/84), [#98](https://github.com/zoobc/zoobc-sdk/pull/98), [#125](https://github.com/zoobc/zoobc-sdk/pull/125))
 - **Mempool**: add get mempool detail grpc request ([#84](https://github.com/zoobc/zoobc-sdk/pull/84), [#98](https://github.com/zoobc/zoobc-sdk/pull/98), [#125](https://github.com/zoobc/zoobc-sdk/pull/125))
 - **Network**: add set network list, select network, and get selected network function ([#102](https://github.com/zoobc/zoobc-sdk/pull/102)), issue [#101](https://github.com/zoobc/zoobc-sdk/issues/101)
 - **Network**: add ping network ([#144](https://github.com/zoobc/zoobc-sdk/pull/144)), issue [#138](https://github.com/zoobc/zoobc-sdk/issues/138)
 - **Node**: add get hardware info grpc request ([#84](https://github.com/zoobc/zoobc-sdk/pull/84), [#140](https://github.com/zoobc/zoobc-sdk/pull/140), [#148](https://github.com/zoobc/zoobc-sdk/pull/148))
 - **Node**: add generate new node public key grpc request ([#84](https://github.com/zoobc/zoobc-sdk/pull/84), [#140](https://github.com/zoobc/zoobc-sdk/pull/140))
 - **Node**: add get node list grpc request ([#96](https://github.com/zoobc/zoobc-sdk/pull/96), [#122](https://github.com/zoobc/zoobc-sdk/pull/122), [#140](https://github.com/zoobc/zoobc-sdk/pull/140)), issue [#92](https://github.com/zoobc/zoobc-sdk/issues/92)
 - **Node**: add get node detail grpc request ([#84](https://github.com/zoobc/zoobc-sdk/pull/84), [#122](https://github.com/zoobc/zoobc-sdk/pull/122), [#140](https://github.com/zoobc/zoobc-sdk/pull/140))
 - **Node**: add register node grpc request ([#84](https://github.com/zoobc/zoobc-sdk/pull/84), [#140](https://github.com/zoobc/zoobc-sdk/pull/140))
 - **Node**: add update node grpc request ([#84](https://github.com/zoobc/zoobc-sdk/pull/84), [#140](https://github.com/zoobc/zoobc-sdk/pull/140))
 - **Node**: add claim node grpc request ([#84](https://github.com/zoobc/zoobc-sdk/pull/84), [#140](https://github.com/zoobc/zoobc-sdk/pull/140))
 - **Node**: add remove node grpc request ([#84](https://github.com/zoobc/zoobc-sdk/pull/84), [#140](https://github.com/zoobc/zoobc-sdk/pull/140))
 - **Poown**: add get poown grpc request ([#84](https://github.com/zoobc/zoobc-sdk/pull/84), [#126](https://github.com/zoobc/zoobc-sdk/pull/126))
 - **Transaction**: add get transaction list grpc request ([#84](https://github.com/zoobc/zoobc-sdk/pull/84), [#95](https://github.com/zoobc/zoobc-sdk/pull/95), [#128](https://github.com/zoobc/zoobc-sdk/pull/128))
 - **Transaction**: add get transaction detail grpc request ([#84](https://github.com/zoobc/zoobc-sdk/pull/84), [#95](https://github.com/zoobc/zoobc-sdk/pull/95), [#128](https://github.com/zoobc/zoobc-sdk/pull/128))
 - **Transaction**: add send money grpc request ([#84](https://github.com/zoobc/zoobc-sdk/pull/84), [#128](https://github.com/zoobc/zoobc-sdk/pull/128))
 - **Transaction**: add get transaction minimum fee grpc request ([#147](https://github.com/zoobc/zoobc-sdk/pull/147)) issue [#137](https://github.com/zoobc/zoobc-sdk/issues/137)
 - **Wallet**: add encrypt and decrypt function for securing the passphrase ([#84](https://github.com/zoobc/zoobc-sdk/pull/84), [#131](https://github.com/zoobc/zoobc-sdk/pull/131))
 - **Wallet Helper**: add transactions converter from grpc to wallet format ([#103](https://github.com/zoobc/zoobc-sdk/pull/103)), issue [#88](https://github.com/zoobc/zoobc-sdk/issues/88)
 - **Wallet Helper**: add mempool converter from grpc to wallet format ([#106](https://github.com/zoobc/zoobc-sdk/pull/106), [#151](https://github.com/zoobc/zoobc-sdk/pull/151)), issue [#89](https://github.com/zoobc/zoobc-sdk/issues/89)


### Enhancements
- Update example for ReactJS ([#133](https://github.com/zoobc/zoobc-sdk/pull/133)), issue [#108](https://github.com/zoobc/zoobc-sdk/issues/108)
- Update example for Angular ([#139](https://github.com/zoobc/zoobc-sdk/pull/139)), issue [#107](https://github.com/zoobc/zoobc-sdk/issues/107)
- Update example for VueJs ([#145](https://github.com/zoobc/zoobc-sdk/pull/145)), issue [#111](https://github.com/zoobc/zoobc-sdk/issues/111)
- Update example for Ionic ([#150](https://github.com/zoobc/zoobc-sdk/pull/150)), issue [#109](https://github.com/zoobc/zoobc-sdk/issues/109)
- Update example for React Native ([#159](https://github.com/zoobc/zoobc-sdk/pull/159)), issue [#110](https://github.com/zoobc/zoobc-sdk/issues/110)
- **Compile**: compiling SDK using rollup typescript plugin ([#154](https://github.com/zoobc/zoobc-sdk/pull/154)), issue [#149](https://github.com/zoobc/zoobc-sdk/issues/149)

### Bug fixes
- CI not executing branch master ([#158](https://github.com/zoobc/zoobc-sdk/pull/158)), issue [#157](https://github.com/zoobc/zoobc-sdk/issues/157)
- NPM version not match between readme and NPMJS ([#161](https://github.com/zoobc/zoobc-sdk/pull/161)), issue [#160](https://github.com/zoobc/zoobc-sdk/issues/160)