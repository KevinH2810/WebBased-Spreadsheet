// package: model
// file: model/nodeAddressInfo.proto

import * as jspb from "google-protobuf";

export class NodeAddressInfo extends jspb.Message {
  getNodeid(): string;
  setNodeid(value: string): void;

  getAddress(): string;
  setAddress(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  getBlockheight(): number;
  setBlockheight(value: number): void;

  getBlockhash(): Uint8Array | string;
  getBlockhash_asU8(): Uint8Array;
  getBlockhash_asB64(): string;
  setBlockhash(value: Uint8Array | string): void;

  getStatus(): NodeAddressStatusMap[keyof NodeAddressStatusMap];
  setStatus(value: NodeAddressStatusMap[keyof NodeAddressStatusMap]): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeAddressInfo.AsObject;
  static toObject(includeInstance: boolean, msg: NodeAddressInfo): NodeAddressInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeAddressInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeAddressInfo;
  static deserializeBinaryFromReader(message: NodeAddressInfo, reader: jspb.BinaryReader): NodeAddressInfo;
}

export namespace NodeAddressInfo {
  export type AsObject = {
    nodeid: string,
    address: string,
    port: number,
    blockheight: number,
    blockhash: Uint8Array | string,
    status: NodeAddressStatusMap[keyof NodeAddressStatusMap],
    signature: Uint8Array | string,
  }
}

export class GetNodeAddressesInfoRequest extends jspb.Message {
  clearNodeidsList(): void;
  getNodeidsList(): Array<string>;
  setNodeidsList(value: Array<string>): void;
  addNodeids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodeAddressesInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodeAddressesInfoRequest): GetNodeAddressesInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNodeAddressesInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodeAddressesInfoRequest;
  static deserializeBinaryFromReader(message: GetNodeAddressesInfoRequest, reader: jspb.BinaryReader): GetNodeAddressesInfoRequest;
}

export namespace GetNodeAddressesInfoRequest {
  export type AsObject = {
    nodeidsList: Array<string>,
  }
}

export class GetNodeAddressesInfoResponse extends jspb.Message {
  clearNodeaddressesinfoList(): void;
  getNodeaddressesinfoList(): Array<NodeAddressInfo>;
  setNodeaddressesinfoList(value: Array<NodeAddressInfo>): void;
  addNodeaddressesinfo(value?: NodeAddressInfo, index?: number): NodeAddressInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodeAddressesInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodeAddressesInfoResponse): GetNodeAddressesInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNodeAddressesInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodeAddressesInfoResponse;
  static deserializeBinaryFromReader(message: GetNodeAddressesInfoResponse, reader: jspb.BinaryReader): GetNodeAddressesInfoResponse;
}

export namespace GetNodeAddressesInfoResponse {
  export type AsObject = {
    nodeaddressesinfoList: Array<NodeAddressInfo.AsObject>,
  }
}

export class SendNodeAddressInfoRequest extends jspb.Message {
  clearNodeaddressinfomessageList(): void;
  getNodeaddressinfomessageList(): Array<NodeAddressInfo>;
  setNodeaddressinfomessageList(value: Array<NodeAddressInfo>): void;
  addNodeaddressinfomessage(value?: NodeAddressInfo, index?: number): NodeAddressInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendNodeAddressInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendNodeAddressInfoRequest): SendNodeAddressInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendNodeAddressInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendNodeAddressInfoRequest;
  static deserializeBinaryFromReader(message: SendNodeAddressInfoRequest, reader: jspb.BinaryReader): SendNodeAddressInfoRequest;
}

export namespace SendNodeAddressInfoRequest {
  export type AsObject = {
    nodeaddressinfomessageList: Array<NodeAddressInfo.AsObject>,
  }
}

export interface NodeAddressStatusMap {
  UNSET: 0;
  NODEADDRESSPENDING: 1;
  NODEADDRESSCONFIRMED: 2;
}

export const NodeAddressStatus: NodeAddressStatusMap;

