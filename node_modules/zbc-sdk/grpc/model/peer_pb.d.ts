// package: model
// file: model/peer.proto

import * as jspb from "google-protobuf";
import * as model_node_pb from "../model/node_pb";

export class Peer extends jspb.Message {
  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): model_node_pb.Node | undefined;
  setInfo(value?: model_node_pb.Node): void;

  getLastinboundrequest(): number;
  setLastinboundrequest(value: number): void;

  getBlacklistingcause(): string;
  setBlacklistingcause(value: string): void;

  getBlacklistingtime(): string;
  setBlacklistingtime(value: string): void;

  getResolvingtime(): string;
  setResolvingtime(value: string): void;

  getConnectionattempted(): number;
  setConnectionattempted(value: number): void;

  getUnresolvingtime(): string;
  setUnresolvingtime(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Peer.AsObject;
  static toObject(includeInstance: boolean, msg: Peer): Peer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Peer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Peer;
  static deserializeBinaryFromReader(message: Peer, reader: jspb.BinaryReader): Peer;
}

export namespace Peer {
  export type AsObject = {
    info?: model_node_pb.Node.AsObject,
    lastinboundrequest: number,
    blacklistingcause: string,
    blacklistingtime: string,
    resolvingtime: string,
    connectionattempted: number,
    unresolvingtime: string,
  }
}

export class PeerBasicResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeerBasicResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PeerBasicResponse): PeerBasicResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PeerBasicResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeerBasicResponse;
  static deserializeBinaryFromReader(message: PeerBasicResponse, reader: jspb.BinaryReader): PeerBasicResponse;
}

export namespace PeerBasicResponse {
  export type AsObject = {
    success: boolean,
    error: string,
  }
}

export class GetPeerInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPeerInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPeerInfoRequest): GetPeerInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPeerInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPeerInfoRequest;
  static deserializeBinaryFromReader(message: GetPeerInfoRequest, reader: jspb.BinaryReader): GetPeerInfoRequest;
}

export namespace GetPeerInfoRequest {
  export type AsObject = {
  }
}

export class GetPeerInfoResponse extends jspb.Message {
  hasHostinfo(): boolean;
  clearHostinfo(): void;
  getHostinfo(): model_node_pb.Node | undefined;
  setHostinfo(value?: model_node_pb.Node): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPeerInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPeerInfoResponse): GetPeerInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPeerInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPeerInfoResponse;
  static deserializeBinaryFromReader(message: GetPeerInfoResponse, reader: jspb.BinaryReader): GetPeerInfoResponse;
}

export namespace GetPeerInfoResponse {
  export type AsObject = {
    hostinfo?: model_node_pb.Node.AsObject,
  }
}

export class GetMorePeersResponse extends jspb.Message {
  clearPeersList(): void;
  getPeersList(): Array<model_node_pb.Node>;
  setPeersList(value: Array<model_node_pb.Node>): void;
  addPeers(value?: model_node_pb.Node, index?: number): model_node_pb.Node;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMorePeersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMorePeersResponse): GetMorePeersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMorePeersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMorePeersResponse;
  static deserializeBinaryFromReader(message: GetMorePeersResponse, reader: jspb.BinaryReader): GetMorePeersResponse;
}

export namespace GetMorePeersResponse {
  export type AsObject = {
    peersList: Array<model_node_pb.Node.AsObject>,
  }
}

export class SendPeersRequest extends jspb.Message {
  clearPeersList(): void;
  getPeersList(): Array<model_node_pb.Node>;
  setPeersList(value: Array<model_node_pb.Node>): void;
  addPeers(value?: model_node_pb.Node, index?: number): model_node_pb.Node;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendPeersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendPeersRequest): SendPeersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendPeersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendPeersRequest;
  static deserializeBinaryFromReader(message: SendPeersRequest, reader: jspb.BinaryReader): SendPeersRequest;
}

export namespace SendPeersRequest {
  export type AsObject = {
    peersList: Array<model_node_pb.Node.AsObject>,
  }
}

