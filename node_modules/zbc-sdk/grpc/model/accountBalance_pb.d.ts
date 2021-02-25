// package: model
// file: model/accountBalance.proto

import * as jspb from "google-protobuf";

export class AccountBalance extends jspb.Message {
  getAccountaddress(): Uint8Array | string;
  getAccountaddress_asU8(): Uint8Array;
  getAccountaddress_asB64(): string;
  setAccountaddress(value: Uint8Array | string): void;

  getBlockheight(): number;
  setBlockheight(value: number): void;

  getSpendablebalance(): string;
  setSpendablebalance(value: string): void;

  getBalance(): string;
  setBalance(value: string): void;

  getPoprevenue(): string;
  setPoprevenue(value: string): void;

  getLatest(): boolean;
  setLatest(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountBalance.AsObject;
  static toObject(includeInstance: boolean, msg: AccountBalance): AccountBalance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountBalance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountBalance;
  static deserializeBinaryFromReader(message: AccountBalance, reader: jspb.BinaryReader): AccountBalance;
}

export namespace AccountBalance {
  export type AsObject = {
    accountaddress: Uint8Array | string,
    blockheight: number,
    spendablebalance: string,
    balance: string,
    poprevenue: string,
    latest: boolean,
  }
}

export class GetAccountBalanceRequest extends jspb.Message {
  getAccountaddress(): Uint8Array | string;
  getAccountaddress_asU8(): Uint8Array;
  getAccountaddress_asB64(): string;
  setAccountaddress(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountBalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountBalanceRequest): GetAccountBalanceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountBalanceRequest;
  static deserializeBinaryFromReader(message: GetAccountBalanceRequest, reader: jspb.BinaryReader): GetAccountBalanceRequest;
}

export namespace GetAccountBalanceRequest {
  export type AsObject = {
    accountaddress: Uint8Array | string,
  }
}

export class GetAccountBalanceResponse extends jspb.Message {
  hasAccountbalance(): boolean;
  clearAccountbalance(): void;
  getAccountbalance(): AccountBalance | undefined;
  setAccountbalance(value?: AccountBalance): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountBalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountBalanceResponse): GetAccountBalanceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountBalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountBalanceResponse;
  static deserializeBinaryFromReader(message: GetAccountBalanceResponse, reader: jspb.BinaryReader): GetAccountBalanceResponse;
}

export namespace GetAccountBalanceResponse {
  export type AsObject = {
    accountbalance?: AccountBalance.AsObject,
  }
}

export class GetAccountBalancesRequest extends jspb.Message {
  clearAccountaddressesList(): void;
  getAccountaddressesList(): Array<Uint8Array | string>;
  getAccountaddressesList_asU8(): Array<Uint8Array>;
  getAccountaddressesList_asB64(): Array<string>;
  setAccountaddressesList(value: Array<Uint8Array | string>): void;
  addAccountaddresses(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountBalancesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountBalancesRequest): GetAccountBalancesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountBalancesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountBalancesRequest;
  static deserializeBinaryFromReader(message: GetAccountBalancesRequest, reader: jspb.BinaryReader): GetAccountBalancesRequest;
}

export namespace GetAccountBalancesRequest {
  export type AsObject = {
    accountaddressesList: Array<Uint8Array | string>,
  }
}

export class GetAccountBalancesResponse extends jspb.Message {
  getAccountbalancesize(): number;
  setAccountbalancesize(value: number): void;

  clearAccountbalancesList(): void;
  getAccountbalancesList(): Array<AccountBalance>;
  setAccountbalancesList(value: Array<AccountBalance>): void;
  addAccountbalances(value?: AccountBalance, index?: number): AccountBalance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountBalancesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountBalancesResponse): GetAccountBalancesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountBalancesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountBalancesResponse;
  static deserializeBinaryFromReader(message: GetAccountBalancesResponse, reader: jspb.BinaryReader): GetAccountBalancesResponse;
}

export namespace GetAccountBalancesResponse {
  export type AsObject = {
    accountbalancesize: number,
    accountbalancesList: Array<AccountBalance.AsObject>,
  }
}

