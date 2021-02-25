// package: model
// file: model/accountLedger.proto

import * as jspb from "google-protobuf";
import * as model_event_pb from "../model/event_pb";
import * as model_pagination_pb from "../model/pagination_pb";

export class AccountLedger extends jspb.Message {
  getAccountaddress(): Uint8Array | string;
  getAccountaddress_asU8(): Uint8Array;
  getAccountaddress_asB64(): string;
  setAccountaddress(value: Uint8Array | string): void;

  getBalancechange(): number;
  setBalancechange(value: number): void;

  getBlockheight(): number;
  setBlockheight(value: number): void;

  getTransactionid(): string;
  setTransactionid(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getEventtype(): model_event_pb.EventTypeMap[keyof model_event_pb.EventTypeMap];
  setEventtype(value: model_event_pb.EventTypeMap[keyof model_event_pb.EventTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountLedger.AsObject;
  static toObject(includeInstance: boolean, msg: AccountLedger): AccountLedger.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountLedger, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountLedger;
  static deserializeBinaryFromReader(message: AccountLedger, reader: jspb.BinaryReader): AccountLedger;
}

export namespace AccountLedger {
  export type AsObject = {
    accountaddress: Uint8Array | string,
    balancechange: number,
    blockheight: number,
    transactionid: string,
    timestamp: number,
    eventtype: model_event_pb.EventTypeMap[keyof model_event_pb.EventTypeMap],
  }
}

export class GetAccountLedgersRequest extends jspb.Message {
  getAccountaddress(): Uint8Array | string;
  getAccountaddress_asU8(): Uint8Array;
  getAccountaddress_asB64(): string;
  setAccountaddress(value: Uint8Array | string): void;

  getEventtype(): model_event_pb.EventTypeMap[keyof model_event_pb.EventTypeMap];
  setEventtype(value: model_event_pb.EventTypeMap[keyof model_event_pb.EventTypeMap]): void;

  getTransactionid(): string;
  setTransactionid(value: string): void;

  getTimestampstart(): number;
  setTimestampstart(value: number): void;

  getTimestampend(): number;
  setTimestampend(value: number): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): model_pagination_pb.Pagination | undefined;
  setPagination(value?: model_pagination_pb.Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountLedgersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountLedgersRequest): GetAccountLedgersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountLedgersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountLedgersRequest;
  static deserializeBinaryFromReader(message: GetAccountLedgersRequest, reader: jspb.BinaryReader): GetAccountLedgersRequest;
}

export namespace GetAccountLedgersRequest {
  export type AsObject = {
    accountaddress: Uint8Array | string,
    eventtype: model_event_pb.EventTypeMap[keyof model_event_pb.EventTypeMap],
    transactionid: string,
    timestampstart: number,
    timestampend: number,
    pagination?: model_pagination_pb.Pagination.AsObject,
  }
}

export class GetAccountLedgersResponse extends jspb.Message {
  getTotal(): string;
  setTotal(value: string): void;

  clearAccountledgersList(): void;
  getAccountledgersList(): Array<AccountLedger>;
  setAccountledgersList(value: Array<AccountLedger>): void;
  addAccountledgers(value?: AccountLedger, index?: number): AccountLedger;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountLedgersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountLedgersResponse): GetAccountLedgersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountLedgersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountLedgersResponse;
  static deserializeBinaryFromReader(message: GetAccountLedgersResponse, reader: jspb.BinaryReader): GetAccountLedgersResponse;
}

export namespace GetAccountLedgersResponse {
  export type AsObject = {
    total: string,
    accountledgersList: Array<AccountLedger.AsObject>,
  }
}

