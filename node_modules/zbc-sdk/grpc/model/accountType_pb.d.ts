// package: model
// file: model/accountType.proto

import * as jspb from "google-protobuf";

export class AccountAddress extends jspb.Message {
  getAccountaddress(): Uint8Array | string;
  getAccountaddress_asU8(): Uint8Array;
  getAccountaddress_asB64(): string;
  setAccountaddress(value: Uint8Array | string): void;

  getAccounttype(): number;
  setAccounttype(value: number): void;

  getAccountpublickey(): Uint8Array | string;
  getAccountpublickey_asU8(): Uint8Array;
  getAccountpublickey_asB64(): string;
  setAccountpublickey(value: Uint8Array | string): void;

  getEncodedaccount(): string;
  setEncodedaccount(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountAddress.AsObject;
  static toObject(includeInstance: boolean, msg: AccountAddress): AccountAddress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountAddress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountAddress;
  static deserializeBinaryFromReader(message: AccountAddress, reader: jspb.BinaryReader): AccountAddress;
}

export namespace AccountAddress {
  export type AsObject = {
    accountaddress: Uint8Array | string,
    accounttype: number,
    accountpublickey: Uint8Array | string,
    encodedaccount: string,
  }
}

export interface AccountTypeMap {
  ZBCACCOUNTTYPE: 0;
  BTCACCOUNTTYPE: 1;
  EMPTYACCOUNTTYPE: 2;
  ESTONIAEIDACCOUNTTYPE: 3;
  ETHACCOUNTTYPE: 4;
}

export const AccountType: AccountTypeMap;

