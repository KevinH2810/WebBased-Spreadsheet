// package: model
// file: model/signature.proto

import * as jspb from "google-protobuf";

export interface SignatureTypeMap {
  DEFAULTSIGNATURE: 0;
  BITCOINSIGNATURE: 1;
  MULTISIGSIGNATURE: 2;
  ESTONIAEIDSIGNATURE: 3;
  ETHEREUMSIGNATURE: 4;
}

export const SignatureType: SignatureTypeMap;

export interface PrivateKeyBytesLengthMap {
  PRIVATEKEYINVALID: 0;
  PRIVATEKEY256BITS: 32;
  PRIVATEKEY384BITS: 48;
  PRIVATEKEY512BITS: 64;
}

export const PrivateKeyBytesLength: PrivateKeyBytesLengthMap;

export interface BitcoinPublicKeyFormatMap {
  PUBLICKEYFORMATUNCOMPRESSED: 0;
  PUBLICKEYFORMATCOMPRESSED: 1;
}

export const BitcoinPublicKeyFormat: BitcoinPublicKeyFormatMap;

