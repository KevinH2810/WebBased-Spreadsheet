// package: model
// file: model/multiSignature.proto

import * as jspb from "google-protobuf";
import * as model_pagination_pb from "../model/pagination_pb";

export class MultiSignatureInfo extends jspb.Message {
  getMinimumsignatures(): number;
  setMinimumsignatures(value: number): void;

  getNonce(): string;
  setNonce(value: string): void;

  getMultisigaddress(): Uint8Array | string;
  getMultisigaddress_asU8(): Uint8Array;
  getMultisigaddress_asB64(): string;
  setMultisigaddress(value: Uint8Array | string): void;

  getBlockheight(): number;
  setBlockheight(value: number): void;

  getLatest(): boolean;
  setLatest(value: boolean): void;

  clearAddressesList(): void;
  getAddressesList(): Array<Uint8Array | string>;
  getAddressesList_asU8(): Array<Uint8Array>;
  getAddressesList_asB64(): Array<string>;
  setAddressesList(value: Array<Uint8Array | string>): void;
  addAddresses(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiSignatureInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MultiSignatureInfo): MultiSignatureInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultiSignatureInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiSignatureInfo;
  static deserializeBinaryFromReader(message: MultiSignatureInfo, reader: jspb.BinaryReader): MultiSignatureInfo;
}

export namespace MultiSignatureInfo {
  export type AsObject = {
    minimumsignatures: number,
    nonce: string,
    multisigaddress: Uint8Array | string,
    blockheight: number,
    latest: boolean,
    addressesList: Array<Uint8Array | string>,
  }
}

export class SignatureInfo extends jspb.Message {
  getTransactionhash(): Uint8Array | string;
  getTransactionhash_asU8(): Uint8Array;
  getTransactionhash_asB64(): string;
  setTransactionhash(value: Uint8Array | string): void;

  getSignaturesMap(): jspb.Map<string, Uint8Array | string>;
  clearSignaturesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignatureInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SignatureInfo): SignatureInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignatureInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignatureInfo;
  static deserializeBinaryFromReader(message: SignatureInfo, reader: jspb.BinaryReader): SignatureInfo;
}

export namespace SignatureInfo {
  export type AsObject = {
    transactionhash: Uint8Array | string,
    signaturesMap: Array<[string, Uint8Array | string]>,
  }
}

export class MultiSignatureParticipant extends jspb.Message {
  getMultisignatureaddress(): Uint8Array | string;
  getMultisignatureaddress_asU8(): Uint8Array;
  getMultisignatureaddress_asB64(): string;
  setMultisignatureaddress(value: Uint8Array | string): void;

  getAccountaddress(): Uint8Array | string;
  getAccountaddress_asU8(): Uint8Array;
  getAccountaddress_asB64(): string;
  setAccountaddress(value: Uint8Array | string): void;

  getAccountaddressindex(): number;
  setAccountaddressindex(value: number): void;

  getLatest(): boolean;
  setLatest(value: boolean): void;

  getBlockheight(): number;
  setBlockheight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiSignatureParticipant.AsObject;
  static toObject(includeInstance: boolean, msg: MultiSignatureParticipant): MultiSignatureParticipant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultiSignatureParticipant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiSignatureParticipant;
  static deserializeBinaryFromReader(message: MultiSignatureParticipant, reader: jspb.BinaryReader): MultiSignatureParticipant;
}

export namespace MultiSignatureParticipant {
  export type AsObject = {
    multisignatureaddress: Uint8Array | string,
    accountaddress: Uint8Array | string,
    accountaddressindex: number,
    latest: boolean,
    blockheight: number,
  }
}

export class PendingSignature extends jspb.Message {
  getTransactionhash(): Uint8Array | string;
  getTransactionhash_asU8(): Uint8Array;
  getTransactionhash_asB64(): string;
  setTransactionhash(value: Uint8Array | string): void;

  getAccountaddress(): Uint8Array | string;
  getAccountaddress_asU8(): Uint8Array;
  getAccountaddress_asB64(): string;
  setAccountaddress(value: Uint8Array | string): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  getBlockheight(): number;
  setBlockheight(value: number): void;

  getLatest(): boolean;
  setLatest(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PendingSignature.AsObject;
  static toObject(includeInstance: boolean, msg: PendingSignature): PendingSignature.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PendingSignature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PendingSignature;
  static deserializeBinaryFromReader(message: PendingSignature, reader: jspb.BinaryReader): PendingSignature;
}

export namespace PendingSignature {
  export type AsObject = {
    transactionhash: Uint8Array | string,
    accountaddress: Uint8Array | string,
    signature: Uint8Array | string,
    blockheight: number,
    latest: boolean,
  }
}

export class PendingTransaction extends jspb.Message {
  getSenderaddress(): Uint8Array | string;
  getSenderaddress_asU8(): Uint8Array;
  getSenderaddress_asB64(): string;
  setSenderaddress(value: Uint8Array | string): void;

  getTransactionhash(): Uint8Array | string;
  getTransactionhash_asU8(): Uint8Array;
  getTransactionhash_asB64(): string;
  setTransactionhash(value: Uint8Array | string): void;

  getTransactionbytes(): Uint8Array | string;
  getTransactionbytes_asU8(): Uint8Array;
  getTransactionbytes_asB64(): string;
  setTransactionbytes(value: Uint8Array | string): void;

  getStatus(): PendingTransactionStatusMap[keyof PendingTransactionStatusMap];
  setStatus(value: PendingTransactionStatusMap[keyof PendingTransactionStatusMap]): void;

  getBlockheight(): number;
  setBlockheight(value: number): void;

  getLatest(): boolean;
  setLatest(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PendingTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: PendingTransaction): PendingTransaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PendingTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PendingTransaction;
  static deserializeBinaryFromReader(message: PendingTransaction, reader: jspb.BinaryReader): PendingTransaction;
}

export namespace PendingTransaction {
  export type AsObject = {
    senderaddress: Uint8Array | string,
    transactionhash: Uint8Array | string,
    transactionbytes: Uint8Array | string,
    status: PendingTransactionStatusMap[keyof PendingTransactionStatusMap],
    blockheight: number,
    latest: boolean,
  }
}

export class GetPendingTransactionsRequest extends jspb.Message {
  getSenderaddress(): Uint8Array | string;
  getSenderaddress_asU8(): Uint8Array;
  getSenderaddress_asB64(): string;
  setSenderaddress(value: Uint8Array | string): void;

  getStatus(): PendingTransactionStatusMap[keyof PendingTransactionStatusMap];
  setStatus(value: PendingTransactionStatusMap[keyof PendingTransactionStatusMap]): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): model_pagination_pb.Pagination | undefined;
  setPagination(value?: model_pagination_pb.Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPendingTransactionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPendingTransactionsRequest): GetPendingTransactionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPendingTransactionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPendingTransactionsRequest;
  static deserializeBinaryFromReader(message: GetPendingTransactionsRequest, reader: jspb.BinaryReader): GetPendingTransactionsRequest;
}

export namespace GetPendingTransactionsRequest {
  export type AsObject = {
    senderaddress: Uint8Array | string,
    status: PendingTransactionStatusMap[keyof PendingTransactionStatusMap],
    pagination?: model_pagination_pb.Pagination.AsObject,
  }
}

export class GetPendingTransactionsResponse extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  getPage(): number;
  setPage(value: number): void;

  clearPendingtransactionsList(): void;
  getPendingtransactionsList(): Array<PendingTransaction>;
  setPendingtransactionsList(value: Array<PendingTransaction>): void;
  addPendingtransactions(value?: PendingTransaction, index?: number): PendingTransaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPendingTransactionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPendingTransactionsResponse): GetPendingTransactionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPendingTransactionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPendingTransactionsResponse;
  static deserializeBinaryFromReader(message: GetPendingTransactionsResponse, reader: jspb.BinaryReader): GetPendingTransactionsResponse;
}

export namespace GetPendingTransactionsResponse {
  export type AsObject = {
    count: number,
    page: number,
    pendingtransactionsList: Array<PendingTransaction.AsObject>,
  }
}

export class GetPendingTransactionDetailByTransactionHashRequest extends jspb.Message {
  getTransactionhashhex(): string;
  setTransactionhashhex(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPendingTransactionDetailByTransactionHashRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPendingTransactionDetailByTransactionHashRequest): GetPendingTransactionDetailByTransactionHashRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPendingTransactionDetailByTransactionHashRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPendingTransactionDetailByTransactionHashRequest;
  static deserializeBinaryFromReader(message: GetPendingTransactionDetailByTransactionHashRequest, reader: jspb.BinaryReader): GetPendingTransactionDetailByTransactionHashRequest;
}

export namespace GetPendingTransactionDetailByTransactionHashRequest {
  export type AsObject = {
    transactionhashhex: string,
  }
}

export class GetPendingTransactionDetailByTransactionHashResponse extends jspb.Message {
  hasPendingtransaction(): boolean;
  clearPendingtransaction(): void;
  getPendingtransaction(): PendingTransaction | undefined;
  setPendingtransaction(value?: PendingTransaction): void;

  clearPendingsignaturesList(): void;
  getPendingsignaturesList(): Array<PendingSignature>;
  setPendingsignaturesList(value: Array<PendingSignature>): void;
  addPendingsignatures(value?: PendingSignature, index?: number): PendingSignature;

  hasMultisignatureinfo(): boolean;
  clearMultisignatureinfo(): void;
  getMultisignatureinfo(): MultiSignatureInfo | undefined;
  setMultisignatureinfo(value?: MultiSignatureInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPendingTransactionDetailByTransactionHashResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPendingTransactionDetailByTransactionHashResponse): GetPendingTransactionDetailByTransactionHashResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPendingTransactionDetailByTransactionHashResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPendingTransactionDetailByTransactionHashResponse;
  static deserializeBinaryFromReader(message: GetPendingTransactionDetailByTransactionHashResponse, reader: jspb.BinaryReader): GetPendingTransactionDetailByTransactionHashResponse;
}

export namespace GetPendingTransactionDetailByTransactionHashResponse {
  export type AsObject = {
    pendingtransaction?: PendingTransaction.AsObject,
    pendingsignaturesList: Array<PendingSignature.AsObject>,
    multisignatureinfo?: MultiSignatureInfo.AsObject,
  }
}

export class GetMultisignatureInfoRequest extends jspb.Message {
  getMultisigaddress(): Uint8Array | string;
  getMultisigaddress_asU8(): Uint8Array;
  getMultisigaddress_asB64(): string;
  setMultisigaddress(value: Uint8Array | string): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): model_pagination_pb.Pagination | undefined;
  setPagination(value?: model_pagination_pb.Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMultisignatureInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMultisignatureInfoRequest): GetMultisignatureInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMultisignatureInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMultisignatureInfoRequest;
  static deserializeBinaryFromReader(message: GetMultisignatureInfoRequest, reader: jspb.BinaryReader): GetMultisignatureInfoRequest;
}

export namespace GetMultisignatureInfoRequest {
  export type AsObject = {
    multisigaddress: Uint8Array | string,
    pagination?: model_pagination_pb.Pagination.AsObject,
  }
}

export class GetMultisignatureInfoResponse extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  getPage(): number;
  setPage(value: number): void;

  clearMultisignatureinfoList(): void;
  getMultisignatureinfoList(): Array<MultiSignatureInfo>;
  setMultisignatureinfoList(value: Array<MultiSignatureInfo>): void;
  addMultisignatureinfo(value?: MultiSignatureInfo, index?: number): MultiSignatureInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMultisignatureInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMultisignatureInfoResponse): GetMultisignatureInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMultisignatureInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMultisignatureInfoResponse;
  static deserializeBinaryFromReader(message: GetMultisignatureInfoResponse, reader: jspb.BinaryReader): GetMultisignatureInfoResponse;
}

export namespace GetMultisignatureInfoResponse {
  export type AsObject = {
    count: number,
    page: number,
    multisignatureinfoList: Array<MultiSignatureInfo.AsObject>,
  }
}

export class GetMultisigAddressByParticipantAddressRequest extends jspb.Message {
  getParticipantaddress(): Uint8Array | string;
  getParticipantaddress_asU8(): Uint8Array;
  getParticipantaddress_asB64(): string;
  setParticipantaddress(value: Uint8Array | string): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): model_pagination_pb.Pagination | undefined;
  setPagination(value?: model_pagination_pb.Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMultisigAddressByParticipantAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMultisigAddressByParticipantAddressRequest): GetMultisigAddressByParticipantAddressRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMultisigAddressByParticipantAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMultisigAddressByParticipantAddressRequest;
  static deserializeBinaryFromReader(message: GetMultisigAddressByParticipantAddressRequest, reader: jspb.BinaryReader): GetMultisigAddressByParticipantAddressRequest;
}

export namespace GetMultisigAddressByParticipantAddressRequest {
  export type AsObject = {
    participantaddress: Uint8Array | string,
    pagination?: model_pagination_pb.Pagination.AsObject,
  }
}

export class GetMultisigAddressByParticipantAddressResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): void;

  clearMultisigaddressesList(): void;
  getMultisigaddressesList(): Array<Uint8Array | string>;
  getMultisigaddressesList_asU8(): Array<Uint8Array>;
  getMultisigaddressesList_asB64(): Array<string>;
  setMultisigaddressesList(value: Array<Uint8Array | string>): void;
  addMultisigaddresses(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMultisigAddressByParticipantAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMultisigAddressByParticipantAddressResponse): GetMultisigAddressByParticipantAddressResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMultisigAddressByParticipantAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMultisigAddressByParticipantAddressResponse;
  static deserializeBinaryFromReader(message: GetMultisigAddressByParticipantAddressResponse, reader: jspb.BinaryReader): GetMultisigAddressByParticipantAddressResponse;
}

export namespace GetMultisigAddressByParticipantAddressResponse {
  export type AsObject = {
    total: number,
    multisigaddressesList: Array<Uint8Array | string>,
  }
}

export class GetPendingTransactionsByHeightRequest extends jspb.Message {
  getFromheight(): number;
  setFromheight(value: number): void;

  getToheight(): number;
  setToheight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPendingTransactionsByHeightRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPendingTransactionsByHeightRequest): GetPendingTransactionsByHeightRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPendingTransactionsByHeightRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPendingTransactionsByHeightRequest;
  static deserializeBinaryFromReader(message: GetPendingTransactionsByHeightRequest, reader: jspb.BinaryReader): GetPendingTransactionsByHeightRequest;
}

export namespace GetPendingTransactionsByHeightRequest {
  export type AsObject = {
    fromheight: number,
    toheight: number,
  }
}

export class GetPendingTransactionsByHeightResponse extends jspb.Message {
  clearPendingtransactionsList(): void;
  getPendingtransactionsList(): Array<PendingTransaction>;
  setPendingtransactionsList(value: Array<PendingTransaction>): void;
  addPendingtransactions(value?: PendingTransaction, index?: number): PendingTransaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPendingTransactionsByHeightResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPendingTransactionsByHeightResponse): GetPendingTransactionsByHeightResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPendingTransactionsByHeightResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPendingTransactionsByHeightResponse;
  static deserializeBinaryFromReader(message: GetPendingTransactionsByHeightResponse, reader: jspb.BinaryReader): GetPendingTransactionsByHeightResponse;
}

export namespace GetPendingTransactionsByHeightResponse {
  export type AsObject = {
    pendingtransactionsList: Array<PendingTransaction.AsObject>,
  }
}

export class GetMultisigAddressesByBlockHeightRangeRequest extends jspb.Message {
  getFromblockheight(): number;
  setFromblockheight(value: number): void;

  getToblockheight(): number;
  setToblockheight(value: number): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): model_pagination_pb.Pagination | undefined;
  setPagination(value?: model_pagination_pb.Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMultisigAddressesByBlockHeightRangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMultisigAddressesByBlockHeightRangeRequest): GetMultisigAddressesByBlockHeightRangeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMultisigAddressesByBlockHeightRangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMultisigAddressesByBlockHeightRangeRequest;
  static deserializeBinaryFromReader(message: GetMultisigAddressesByBlockHeightRangeRequest, reader: jspb.BinaryReader): GetMultisigAddressesByBlockHeightRangeRequest;
}

export namespace GetMultisigAddressesByBlockHeightRangeRequest {
  export type AsObject = {
    fromblockheight: number,
    toblockheight: number,
    pagination?: model_pagination_pb.Pagination.AsObject,
  }
}

export class GetMultisigAddressesByBlockHeightRangeResponse extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  getPage(): number;
  setPage(value: number): void;

  clearMultisignatureinfoList(): void;
  getMultisignatureinfoList(): Array<MultiSignatureInfo>;
  setMultisignatureinfoList(value: Array<MultiSignatureInfo>): void;
  addMultisignatureinfo(value?: MultiSignatureInfo, index?: number): MultiSignatureInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMultisigAddressesByBlockHeightRangeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMultisigAddressesByBlockHeightRangeResponse): GetMultisigAddressesByBlockHeightRangeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMultisigAddressesByBlockHeightRangeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMultisigAddressesByBlockHeightRangeResponse;
  static deserializeBinaryFromReader(message: GetMultisigAddressesByBlockHeightRangeResponse, reader: jspb.BinaryReader): GetMultisigAddressesByBlockHeightRangeResponse;
}

export namespace GetMultisigAddressesByBlockHeightRangeResponse {
  export type AsObject = {
    count: number,
    page: number,
    multisignatureinfoList: Array<MultiSignatureInfo.AsObject>,
  }
}

export class GetParticipantsByMultisigAddressesRequest extends jspb.Message {
  clearMultisigaddressesList(): void;
  getMultisigaddressesList(): Array<Uint8Array | string>;
  getMultisigaddressesList_asU8(): Array<Uint8Array>;
  getMultisigaddressesList_asB64(): Array<string>;
  setMultisigaddressesList(value: Array<Uint8Array | string>): void;
  addMultisigaddresses(value: Uint8Array | string, index?: number): Uint8Array | string;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): model_pagination_pb.Pagination | undefined;
  setPagination(value?: model_pagination_pb.Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetParticipantsByMultisigAddressesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetParticipantsByMultisigAddressesRequest): GetParticipantsByMultisigAddressesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetParticipantsByMultisigAddressesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetParticipantsByMultisigAddressesRequest;
  static deserializeBinaryFromReader(message: GetParticipantsByMultisigAddressesRequest, reader: jspb.BinaryReader): GetParticipantsByMultisigAddressesRequest;
}

export namespace GetParticipantsByMultisigAddressesRequest {
  export type AsObject = {
    multisigaddressesList: Array<Uint8Array | string>,
    pagination?: model_pagination_pb.Pagination.AsObject,
  }
}

export class MultiSignatureParticipants extends jspb.Message {
  clearMultisignatureparticipantsList(): void;
  getMultisignatureparticipantsList(): Array<MultiSignatureParticipant>;
  setMultisignatureparticipantsList(value: Array<MultiSignatureParticipant>): void;
  addMultisignatureparticipants(value?: MultiSignatureParticipant, index?: number): MultiSignatureParticipant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiSignatureParticipants.AsObject;
  static toObject(includeInstance: boolean, msg: MultiSignatureParticipants): MultiSignatureParticipants.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultiSignatureParticipants, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiSignatureParticipants;
  static deserializeBinaryFromReader(message: MultiSignatureParticipants, reader: jspb.BinaryReader): MultiSignatureParticipants;
}

export namespace MultiSignatureParticipants {
  export type AsObject = {
    multisignatureparticipantsList: Array<MultiSignatureParticipant.AsObject>,
  }
}

export class GetParticipantsByMultisigAddressesResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): void;

  getMultisignatureparticipantsMap(): jspb.Map<string, MultiSignatureParticipants>;
  clearMultisignatureparticipantsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetParticipantsByMultisigAddressesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetParticipantsByMultisigAddressesResponse): GetParticipantsByMultisigAddressesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetParticipantsByMultisigAddressesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetParticipantsByMultisigAddressesResponse;
  static deserializeBinaryFromReader(message: GetParticipantsByMultisigAddressesResponse, reader: jspb.BinaryReader): GetParticipantsByMultisigAddressesResponse;
}

export namespace GetParticipantsByMultisigAddressesResponse {
  export type AsObject = {
    total: number,
    multisignatureparticipantsMap: Array<[string, MultiSignatureParticipants.AsObject]>,
  }
}

export interface PendingTransactionStatusMap {
  PENDINGTRANSACTIONPENDING: 0;
  PENDINGTRANSACTIONEXECUTED: 1;
  PENDINGTRANSACTIONNOOP: 2;
  PENDINGTRANSACTIONEXPIRED: 3;
}

export const PendingTransactionStatus: PendingTransactionStatusMap;

