// package: model
// file: model/healthCheck.proto

import * as jspb from "google-protobuf";

export class HealthCheckResponse extends jspb.Message {
  getReply(): string;
  setReply(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthCheckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HealthCheckResponse): HealthCheckResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HealthCheckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthCheckResponse;
  static deserializeBinaryFromReader(message: HealthCheckResponse, reader: jspb.BinaryReader): HealthCheckResponse;
}

export namespace HealthCheckResponse {
  export type AsObject = {
    reply: string,
  }
}

export class GetNodeStatusResponse extends jspb.Message {
  getLastmainblockheight(): number;
  setLastmainblockheight(value: number): void;

  getLastmainblockhash(): string;
  setLastmainblockhash(value: string): void;

  getLastspineblockheight(): number;
  setLastspineblockheight(value: number): void;

  getLastspineblockhash(): string;
  setLastspineblockhash(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getNodepublickey(): string;
  setNodepublickey(value: string): void;

  getUnresolvedpeers(): number;
  setUnresolvedpeers(value: number): void;

  getResolvedpeers(): number;
  setResolvedpeers(value: number): void;

  getBlocksmithindex(): number;
  setBlocksmithindex(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodeStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodeStatusResponse): GetNodeStatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNodeStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodeStatusResponse;
  static deserializeBinaryFromReader(message: GetNodeStatusResponse, reader: jspb.BinaryReader): GetNodeStatusResponse;
}

export namespace GetNodeStatusResponse {
  export type AsObject = {
    lastmainblockheight: number,
    lastmainblockhash: string,
    lastspineblockheight: number,
    lastspineblockhash: string,
    version: string,
    nodepublickey: string,
    unresolvedpeers: number,
    resolvedpeers: number,
    blocksmithindex: number,
  }
}

