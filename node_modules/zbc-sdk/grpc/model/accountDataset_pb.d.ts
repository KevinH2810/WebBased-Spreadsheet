// package: model
// file: model/accountDataset.proto

import * as jspb from "google-protobuf";
import * as model_pagination_pb from "../model/pagination_pb";

export class AccountDataset extends jspb.Message {
  getSetteraccountaddress(): Uint8Array | string;
  getSetteraccountaddress_asU8(): Uint8Array;
  getSetteraccountaddress_asB64(): string;
  setSetteraccountaddress(value: Uint8Array | string): void;

  getRecipientaccountaddress(): Uint8Array | string;
  getRecipientaccountaddress_asU8(): Uint8Array;
  getRecipientaccountaddress_asB64(): string;
  setRecipientaccountaddress(value: Uint8Array | string): void;

  getProperty(): string;
  setProperty(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getIsactive(): boolean;
  setIsactive(value: boolean): void;

  getLatest(): boolean;
  setLatest(value: boolean): void;

  getHeight(): number;
  setHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountDataset.AsObject;
  static toObject(includeInstance: boolean, msg: AccountDataset): AccountDataset.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountDataset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountDataset;
  static deserializeBinaryFromReader(message: AccountDataset, reader: jspb.BinaryReader): AccountDataset;
}

export namespace AccountDataset {
  export type AsObject = {
    setteraccountaddress: Uint8Array | string,
    recipientaccountaddress: Uint8Array | string,
    property: string,
    value: string,
    isactive: boolean,
    latest: boolean,
    height: number,
  }
}

export class GetAccountDatasetsRequest extends jspb.Message {
  getProperty(): string;
  setProperty(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getRecipientaccountaddress(): Uint8Array | string;
  getRecipientaccountaddress_asU8(): Uint8Array;
  getRecipientaccountaddress_asB64(): string;
  setRecipientaccountaddress(value: Uint8Array | string): void;

  getSetteraccountaddress(): Uint8Array | string;
  getSetteraccountaddress_asU8(): Uint8Array;
  getSetteraccountaddress_asB64(): string;
  setSetteraccountaddress(value: Uint8Array | string): void;

  getHeight(): number;
  setHeight(value: number): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): model_pagination_pb.Pagination | undefined;
  setPagination(value?: model_pagination_pb.Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountDatasetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountDatasetsRequest): GetAccountDatasetsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountDatasetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountDatasetsRequest;
  static deserializeBinaryFromReader(message: GetAccountDatasetsRequest, reader: jspb.BinaryReader): GetAccountDatasetsRequest;
}

export namespace GetAccountDatasetsRequest {
  export type AsObject = {
    property: string,
    value: string,
    recipientaccountaddress: Uint8Array | string,
    setteraccountaddress: Uint8Array | string,
    height: number,
    pagination?: model_pagination_pb.Pagination.AsObject,
  }
}

export class GetAccountDatasetsResponse extends jspb.Message {
  getTotal(): string;
  setTotal(value: string): void;

  clearAccountdatasetsList(): void;
  getAccountdatasetsList(): Array<AccountDataset>;
  setAccountdatasetsList(value: Array<AccountDataset>): void;
  addAccountdatasets(value?: AccountDataset, index?: number): AccountDataset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountDatasetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountDatasetsResponse): GetAccountDatasetsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountDatasetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountDatasetsResponse;
  static deserializeBinaryFromReader(message: GetAccountDatasetsResponse, reader: jspb.BinaryReader): GetAccountDatasetsResponse;
}

export namespace GetAccountDatasetsResponse {
  export type AsObject = {
    total: string,
    accountdatasetsList: Array<AccountDataset.AsObject>,
  }
}

export class GetAccountDatasetRequest extends jspb.Message {
  getProperty(): string;
  setProperty(value: string): void;

  getRecipientaccountaddress(): Uint8Array | string;
  getRecipientaccountaddress_asU8(): Uint8Array;
  getRecipientaccountaddress_asB64(): string;
  setRecipientaccountaddress(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountDatasetRequest): GetAccountDatasetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountDatasetRequest;
  static deserializeBinaryFromReader(message: GetAccountDatasetRequest, reader: jspb.BinaryReader): GetAccountDatasetRequest;
}

export namespace GetAccountDatasetRequest {
  export type AsObject = {
    property: string,
    recipientaccountaddress: Uint8Array | string,
  }
}

export interface AccountDatasetPropertyMap {
  ACCOUNTDATASETESCROWAPPROVAL: 0;
}

export const AccountDatasetProperty: AccountDatasetPropertyMap;

