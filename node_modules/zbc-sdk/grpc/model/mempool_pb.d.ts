// package: model
// file: model/mempool.proto

import * as jspb from "google-protobuf";
import * as model_pagination_pb from "../model/pagination_pb";
import * as model_escrow_pb from "../model/escrow_pb";

export class MempoolTransaction extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getBlockheight(): number;
  setBlockheight(value: number): void;

  getFeeperbyte(): string;
  setFeeperbyte(value: string): void;

  getArrivaltimestamp(): string;
  setArrivaltimestamp(value: string): void;

  getTransactionbytes(): Uint8Array | string;
  getTransactionbytes_asU8(): Uint8Array;
  getTransactionbytes_asB64(): string;
  setTransactionbytes(value: Uint8Array | string): void;

  getSenderaccountaddress(): Uint8Array | string;
  getSenderaccountaddress_asU8(): Uint8Array;
  getSenderaccountaddress_asB64(): string;
  setSenderaccountaddress(value: Uint8Array | string): void;

  getRecipientaccountaddress(): Uint8Array | string;
  getRecipientaccountaddress_asU8(): Uint8Array;
  getRecipientaccountaddress_asB64(): string;
  setRecipientaccountaddress(value: Uint8Array | string): void;

  hasEscrow(): boolean;
  clearEscrow(): void;
  getEscrow(): model_escrow_pb.Escrow | undefined;
  setEscrow(value?: model_escrow_pb.Escrow): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MempoolTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: MempoolTransaction): MempoolTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MempoolTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MempoolTransaction;
  static deserializeBinaryFromReader(message: MempoolTransaction, reader: jspb.BinaryReader): MempoolTransaction;
}

export namespace MempoolTransaction {
  export type AsObject = {
    id: string,
    blockheight: number,
    feeperbyte: string,
    arrivaltimestamp: string,
    transactionbytes: Uint8Array | string,
    senderaccountaddress: Uint8Array | string,
    recipientaccountaddress: Uint8Array | string,
    escrow?: model_escrow_pb.Escrow.AsObject,
  }
}

export class GetMempoolTransactionRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMempoolTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMempoolTransactionRequest): GetMempoolTransactionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMempoolTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMempoolTransactionRequest;
  static deserializeBinaryFromReader(message: GetMempoolTransactionRequest, reader: jspb.BinaryReader): GetMempoolTransactionRequest;
}

export namespace GetMempoolTransactionRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetMempoolTransactionResponse extends jspb.Message {
  hasTransaction(): boolean;
  clearTransaction(): void;
  getTransaction(): MempoolTransaction | undefined;
  setTransaction(value?: MempoolTransaction): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMempoolTransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMempoolTransactionResponse): GetMempoolTransactionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMempoolTransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMempoolTransactionResponse;
  static deserializeBinaryFromReader(message: GetMempoolTransactionResponse, reader: jspb.BinaryReader): GetMempoolTransactionResponse;
}

export namespace GetMempoolTransactionResponse {
  export type AsObject = {
    transaction?: MempoolTransaction.AsObject,
  }
}

export class GetMempoolTransactionsRequest extends jspb.Message {
  getTimestampstart(): string;
  setTimestampstart(value: string): void;

  getTimestampend(): string;
  setTimestampend(value: string): void;

  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): model_pagination_pb.Pagination | undefined;
  setPagination(value?: model_pagination_pb.Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMempoolTransactionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMempoolTransactionsRequest): GetMempoolTransactionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMempoolTransactionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMempoolTransactionsRequest;
  static deserializeBinaryFromReader(message: GetMempoolTransactionsRequest, reader: jspb.BinaryReader): GetMempoolTransactionsRequest;
}

export namespace GetMempoolTransactionsRequest {
  export type AsObject = {
    timestampstart: string,
    timestampend: string,
    address: Uint8Array | string,
    pagination?: model_pagination_pb.Pagination.AsObject,
  }
}

export class GetMempoolTransactionsResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): void;

  clearMempooltransactionsList(): void;
  getMempooltransactionsList(): Array<MempoolTransaction>;
  setMempooltransactionsList(value: Array<MempoolTransaction>): void;
  addMempooltransactions(value?: MempoolTransaction, index?: number): MempoolTransaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMempoolTransactionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMempoolTransactionsResponse): GetMempoolTransactionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMempoolTransactionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMempoolTransactionsResponse;
  static deserializeBinaryFromReader(message: GetMempoolTransactionsResponse, reader: jspb.BinaryReader): GetMempoolTransactionsResponse;
}

export namespace GetMempoolTransactionsResponse {
  export type AsObject = {
    total: number,
    mempooltransactionsList: Array<MempoolTransaction.AsObject>,
  }
}

