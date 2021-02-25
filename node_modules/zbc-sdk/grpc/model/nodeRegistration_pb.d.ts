// package: model
// file: model/nodeRegistration.proto

import * as jspb from "google-protobuf";
import * as model_pagination_pb from "../model/pagination_pb";
import * as model_nodeAddressInfo_pb from "../model/nodeAddressInfo_pb";

export class NodeRegistration extends jspb.Message {
  getNodeid(): string;
  setNodeid(value: string): void;

  getNodepublickey(): Uint8Array | string;
  getNodepublickey_asU8(): Uint8Array;
  getNodepublickey_asB64(): string;
  setNodepublickey(value: Uint8Array | string): void;

  getAccountaddress(): Uint8Array | string;
  getAccountaddress_asU8(): Uint8Array;
  getAccountaddress_asB64(): string;
  setAccountaddress(value: Uint8Array | string): void;

  getRegistrationheight(): number;
  setRegistrationheight(value: number): void;

  getLockedbalance(): string;
  setLockedbalance(value: string): void;

  getRegistrationstatus(): number;
  setRegistrationstatus(value: number): void;

  getLatest(): boolean;
  setLatest(value: boolean): void;

  getHeight(): number;
  setHeight(value: number): void;

  hasNodeaddressinfo(): boolean;
  clearNodeaddressinfo(): void;
  getNodeaddressinfo(): model_nodeAddressInfo_pb.NodeAddressInfo | undefined;
  setNodeaddressinfo(value?: model_nodeAddressInfo_pb.NodeAddressInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeRegistration.AsObject;
  static toObject(includeInstance: boolean, msg: NodeRegistration): NodeRegistration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeRegistration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeRegistration;
  static deserializeBinaryFromReader(message: NodeRegistration, reader: jspb.BinaryReader): NodeRegistration;
}

export namespace NodeRegistration {
  export type AsObject = {
    nodeid: string,
    nodepublickey: Uint8Array | string,
    accountaddress: Uint8Array | string,
    registrationheight: number,
    lockedbalance: string,
    registrationstatus: number,
    latest: boolean,
    height: number,
    nodeaddressinfo?: model_nodeAddressInfo_pb.NodeAddressInfo.AsObject,
  }
}

export class GetNodeRegistrationsRequest extends jspb.Message {
  clearRegistrationstatusesList(): void;
  getRegistrationstatusesList(): Array<number>;
  setRegistrationstatusesList(value: Array<number>): void;
  addRegistrationstatuses(value: number, index?: number): number;

  getMinregistrationheight(): number;
  setMinregistrationheight(value: number): void;

  getMaxregistrationheight(): number;
  setMaxregistrationheight(value: number): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): model_pagination_pb.Pagination | undefined;
  setPagination(value?: model_pagination_pb.Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodeRegistrationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodeRegistrationsRequest): GetNodeRegistrationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNodeRegistrationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodeRegistrationsRequest;
  static deserializeBinaryFromReader(message: GetNodeRegistrationsRequest, reader: jspb.BinaryReader): GetNodeRegistrationsRequest;
}

export namespace GetNodeRegistrationsRequest {
  export type AsObject = {
    registrationstatusesList: Array<number>,
    minregistrationheight: number,
    maxregistrationheight: number,
    pagination?: model_pagination_pb.Pagination.AsObject,
  }
}

export class GetNodeRegistrationsResponse extends jspb.Message {
  getTotal(): string;
  setTotal(value: string): void;

  clearNoderegistrationsList(): void;
  getNoderegistrationsList(): Array<NodeRegistration>;
  setNoderegistrationsList(value: Array<NodeRegistration>): void;
  addNoderegistrations(value?: NodeRegistration, index?: number): NodeRegistration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodeRegistrationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodeRegistrationsResponse): GetNodeRegistrationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNodeRegistrationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodeRegistrationsResponse;
  static deserializeBinaryFromReader(message: GetNodeRegistrationsResponse, reader: jspb.BinaryReader): GetNodeRegistrationsResponse;
}

export namespace GetNodeRegistrationsResponse {
  export type AsObject = {
    total: string,
    noderegistrationsList: Array<NodeRegistration.AsObject>,
  }
}

export class GetNodeRegistrationRequest extends jspb.Message {
  getNodepublickey(): Uint8Array | string;
  getNodepublickey_asU8(): Uint8Array;
  getNodepublickey_asB64(): string;
  setNodepublickey(value: Uint8Array | string): void;

  getAccountaddress(): Uint8Array | string;
  getAccountaddress_asU8(): Uint8Array;
  getAccountaddress_asB64(): string;
  setAccountaddress(value: Uint8Array | string): void;

  getRegistrationheight(): number;
  setRegistrationheight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodeRegistrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodeRegistrationRequest): GetNodeRegistrationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNodeRegistrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodeRegistrationRequest;
  static deserializeBinaryFromReader(message: GetNodeRegistrationRequest, reader: jspb.BinaryReader): GetNodeRegistrationRequest;
}

export namespace GetNodeRegistrationRequest {
  export type AsObject = {
    nodepublickey: Uint8Array | string,
    accountaddress: Uint8Array | string,
    registrationheight: number,
  }
}

export class GetNodeRegistrationResponse extends jspb.Message {
  hasNoderegistration(): boolean;
  clearNoderegistration(): void;
  getNoderegistration(): NodeRegistration | undefined;
  setNoderegistration(value?: NodeRegistration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodeRegistrationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodeRegistrationResponse): GetNodeRegistrationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNodeRegistrationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodeRegistrationResponse;
  static deserializeBinaryFromReader(message: GetNodeRegistrationResponse, reader: jspb.BinaryReader): GetNodeRegistrationResponse;
}

export namespace GetNodeRegistrationResponse {
  export type AsObject = {
    noderegistration?: NodeRegistration.AsObject,
  }
}

export class NodeAdmissionTimestamp extends jspb.Message {
  getTimestamp(): string;
  setTimestamp(value: string): void;

  getBlockheight(): number;
  setBlockheight(value: number): void;

  getLatest(): boolean;
  setLatest(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeAdmissionTimestamp.AsObject;
  static toObject(includeInstance: boolean, msg: NodeAdmissionTimestamp): NodeAdmissionTimestamp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeAdmissionTimestamp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeAdmissionTimestamp;
  static deserializeBinaryFromReader(message: NodeAdmissionTimestamp, reader: jspb.BinaryReader): NodeAdmissionTimestamp;
}

export namespace NodeAdmissionTimestamp {
  export type AsObject = {
    timestamp: string,
    blockheight: number,
    latest: boolean,
  }
}

export class GetNodeRegistrationsByNodePublicKeysRequest extends jspb.Message {
  clearNodepublickeysList(): void;
  getNodepublickeysList(): Array<Uint8Array | string>;
  getNodepublickeysList_asU8(): Array<Uint8Array>;
  getNodepublickeysList_asB64(): Array<string>;
  setNodepublickeysList(value: Array<Uint8Array | string>): void;
  addNodepublickeys(value: Uint8Array | string, index?: number): Uint8Array | string;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): model_pagination_pb.Pagination | undefined;
  setPagination(value?: model_pagination_pb.Pagination): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodeRegistrationsByNodePublicKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodeRegistrationsByNodePublicKeysRequest): GetNodeRegistrationsByNodePublicKeysRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNodeRegistrationsByNodePublicKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodeRegistrationsByNodePublicKeysRequest;
  static deserializeBinaryFromReader(message: GetNodeRegistrationsByNodePublicKeysRequest, reader: jspb.BinaryReader): GetNodeRegistrationsByNodePublicKeysRequest;
}

export namespace GetNodeRegistrationsByNodePublicKeysRequest {
  export type AsObject = {
    nodepublickeysList: Array<Uint8Array | string>,
    pagination?: model_pagination_pb.Pagination.AsObject,
  }
}

export class GetNodeRegistrationsByNodePublicKeysResponse extends jspb.Message {
  getTotal(): string;
  setTotal(value: string): void;

  clearNoderegistrationsList(): void;
  getNoderegistrationsList(): Array<NodeRegistration>;
  setNoderegistrationsList(value: Array<NodeRegistration>): void;
  addNoderegistrations(value?: NodeRegistration, index?: number): NodeRegistration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodeRegistrationsByNodePublicKeysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodeRegistrationsByNodePublicKeysResponse): GetNodeRegistrationsByNodePublicKeysResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNodeRegistrationsByNodePublicKeysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodeRegistrationsByNodePublicKeysResponse;
  static deserializeBinaryFromReader(message: GetNodeRegistrationsByNodePublicKeysResponse, reader: jspb.BinaryReader): GetNodeRegistrationsByNodePublicKeysResponse;
}

export namespace GetNodeRegistrationsByNodePublicKeysResponse {
  export type AsObject = {
    total: string,
    noderegistrationsList: Array<NodeRegistration.AsObject>,
  }
}

export class GetPendingNodeRegistrationsRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPendingNodeRegistrationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPendingNodeRegistrationsRequest): GetPendingNodeRegistrationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPendingNodeRegistrationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPendingNodeRegistrationsRequest;
  static deserializeBinaryFromReader(message: GetPendingNodeRegistrationsRequest, reader: jspb.BinaryReader): GetPendingNodeRegistrationsRequest;
}

export namespace GetPendingNodeRegistrationsRequest {
  export type AsObject = {
    limit: number,
  }
}

export class GetPendingNodeRegistrationsResponse extends jspb.Message {
  clearNoderegistrationsList(): void;
  getNoderegistrationsList(): Array<NodeRegistration>;
  setNoderegistrationsList(value: Array<NodeRegistration>): void;
  addNoderegistrations(value?: NodeRegistration, index?: number): NodeRegistration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPendingNodeRegistrationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPendingNodeRegistrationsResponse): GetPendingNodeRegistrationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPendingNodeRegistrationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPendingNodeRegistrationsResponse;
  static deserializeBinaryFromReader(message: GetPendingNodeRegistrationsResponse, reader: jspb.BinaryReader): GetPendingNodeRegistrationsResponse;
}

export namespace GetPendingNodeRegistrationsResponse {
  export type AsObject = {
    noderegistrationsList: Array<NodeRegistration.AsObject>,
  }
}

export class GetMyNodePublicKeyResponse extends jspb.Message {
  getNodepublickey(): Uint8Array | string;
  getNodepublickey_asU8(): Uint8Array;
  getNodepublickey_asB64(): string;
  setNodepublickey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyNodePublicKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyNodePublicKeyResponse): GetMyNodePublicKeyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMyNodePublicKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyNodePublicKeyResponse;
  static deserializeBinaryFromReader(message: GetMyNodePublicKeyResponse, reader: jspb.BinaryReader): GetMyNodePublicKeyResponse;
}

export namespace GetMyNodePublicKeyResponse {
  export type AsObject = {
    nodepublickey: Uint8Array | string,
  }
}

export interface NodeRegistrationStateMap {
  NODEREGISTERED: 0;
  NODEQUEUED: 1;
  NODEDELETED: 2;
}

export const NodeRegistrationState: NodeRegistrationStateMap;

