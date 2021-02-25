// package: model
// file: model/escrow.proto

import * as jspb from "google-protobuf";
import * as model_pagination_pb from "../model/pagination_pb";

export class Escrow extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getSenderaddress(): Uint8Array | string;
  getSenderaddress_asU8(): Uint8Array;
  getSenderaddress_asB64(): string;
  setSenderaddress(value: Uint8Array | string): void;

  getRecipientaddress(): Uint8Array | string;
  getRecipientaddress_asU8(): Uint8Array;
  getRecipientaddress_asB64(): string;
  setRecipientaddress(value: Uint8Array | string): void;

  getApproveraddress(): Uint8Array | string;
  getApproveraddress_asU8(): Uint8Array;
  getApproveraddress_asB64(): string;
  setApproveraddress(value: Uint8Array | string): void;

  getAmount(): string;
  setAmount(value: string): void;

  getCommission(): string;
  setCommission(value: string): void;

  getTimeout(): string;
  setTimeout(value: string): void;

  getStatus(): EscrowStatusMap[keyof EscrowStatusMap];
  setStatus(value: EscrowStatusMap[keyof EscrowStatusMap]): void;

  getBlockheight(): number;
  setBlockheight(value: number): void;

  getLatest(): boolean;
  setLatest(value: boolean): void;

  getInstruction(): string;
  setInstruction(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Escrow.AsObject;
  static toObject(includeInstance: boolean, msg: Escrow): Escrow.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Escrow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Escrow;
  static deserializeBinaryFromReader(message: Escrow, reader: jspb.BinaryReader): Escrow;
}

export namespace Escrow {
  export type AsObject = {
    id: string,
    senderaddress: Uint8Array | string,
    recipientaddress: Uint8Array | string,
    approveraddress: Uint8Array | string,
    amount: string,
    commission: string,
    timeout: string,
    status: EscrowStatusMap[keyof EscrowStatusMap],
    blockheight: number,
    latest: boolean,
    instruction: string,
  }
}

export class GetEscrowTransactionsRequest extends jspb.Message {
  getApproveraddress(): Uint8Array | string;
  getApproveraddress_asU8(): Uint8Array;
  getApproveraddress_asB64(): string;
  setApproveraddress(value: Uint8Array | string): void;

  getSenderaddress(): Uint8Array | string;
  getSenderaddress_asU8(): Uint8Array;
  getSenderaddress_asB64(): string;
  setSenderaddress(value: Uint8Array | string): void;

  getRecipientaddress(): Uint8Array | string;
  getRecipientaddress_asU8(): Uint8Array;
  getRecipientaddress_asB64(): string;
  setRecipientaddress(value: Uint8Array | string): void;

  getId(): string;
  setId(value: string): void;

  clearStatusesList(): void;
  getStatusesList(): Array<EscrowStatusMap[keyof EscrowStatusMap]>;
  setStatusesList(value: Array<EscrowStatusMap[keyof EscrowStatusMap]>): void;
  addStatuses(value: EscrowStatusMap[keyof EscrowStatusMap], index?: number): EscrowStatusMap[keyof EscrowStatusMap];

  getBlockheightstart(): number;
  setBlockheightstart(value: number): void;

  getBlockheightend(): number;
  setBlockheightend(value: number): void;

  getLatest(): boolean;
  setLatest(value: boolean): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): model_pagination_pb.Pagination | undefined;
  setPagination(value?: model_pagination_pb.Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEscrowTransactionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEscrowTransactionsRequest): GetEscrowTransactionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEscrowTransactionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEscrowTransactionsRequest;
  static deserializeBinaryFromReader(message: GetEscrowTransactionsRequest, reader: jspb.BinaryReader): GetEscrowTransactionsRequest;
}

export namespace GetEscrowTransactionsRequest {
  export type AsObject = {
    approveraddress: Uint8Array | string,
    senderaddress: Uint8Array | string,
    recipientaddress: Uint8Array | string,
    id: string,
    statusesList: Array<EscrowStatusMap[keyof EscrowStatusMap]>,
    blockheightstart: number,
    blockheightend: number,
    latest: boolean,
    pagination?: model_pagination_pb.Pagination.AsObject,
  }
}

export class GetEscrowTransactionsResponse extends jspb.Message {
  getTotal(): string;
  setTotal(value: string): void;

  clearEscrowsList(): void;
  getEscrowsList(): Array<Escrow>;
  setEscrowsList(value: Array<Escrow>): void;
  addEscrows(value?: Escrow, index?: number): Escrow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEscrowTransactionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetEscrowTransactionsResponse): GetEscrowTransactionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEscrowTransactionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEscrowTransactionsResponse;
  static deserializeBinaryFromReader(message: GetEscrowTransactionsResponse, reader: jspb.BinaryReader): GetEscrowTransactionsResponse;
}

export namespace GetEscrowTransactionsResponse {
  export type AsObject = {
    total: string,
    escrowsList: Array<Escrow.AsObject>,
  }
}

export class GetEscrowTransactionRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEscrowTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEscrowTransactionRequest): GetEscrowTransactionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEscrowTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEscrowTransactionRequest;
  static deserializeBinaryFromReader(message: GetEscrowTransactionRequest, reader: jspb.BinaryReader): GetEscrowTransactionRequest;
}

export namespace GetEscrowTransactionRequest {
  export type AsObject = {
    id: string,
  }
}

export interface EscrowStatusMap {
  PENDING: 0;
  APPROVED: 1;
  REJECTED: 2;
  EXPIRED: 3;
}

export const EscrowStatus: EscrowStatusMap;

export interface EscrowApprovalMap {
  APPROVE: 0;
  REJECT: 1;
  EXPIRE: 2;
}

export const EscrowApproval: EscrowApprovalMap;

