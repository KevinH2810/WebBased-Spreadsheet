// package: model
// file: model/skippedBlocksmith.proto

import * as jspb from "google-protobuf";

export class SkippedBlocksmith extends jspb.Message {
  getBlocksmithpublickey(): Uint8Array | string;
  getBlocksmithpublickey_asU8(): Uint8Array;
  getBlocksmithpublickey_asB64(): string;
  setBlocksmithpublickey(value: Uint8Array | string): void;

  getPopchange(): string;
  setPopchange(value: string): void;

  getBlockheight(): number;
  setBlockheight(value: number): void;

  getBlocksmithindex(): number;
  setBlocksmithindex(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SkippedBlocksmith.AsObject;
  static toObject(includeInstance: boolean, msg: SkippedBlocksmith): SkippedBlocksmith.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SkippedBlocksmith, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SkippedBlocksmith;
  static deserializeBinaryFromReader(message: SkippedBlocksmith, reader: jspb.BinaryReader): SkippedBlocksmith;
}

export namespace SkippedBlocksmith {
  export type AsObject = {
    blocksmithpublickey: Uint8Array | string,
    popchange: string,
    blockheight: number,
    blocksmithindex: number,
  }
}

export class GetSkippedBlocksmithsRequest extends jspb.Message {
  getBlockheightstart(): number;
  setBlockheightstart(value: number): void;

  getBlockheightend(): number;
  setBlockheightend(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSkippedBlocksmithsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSkippedBlocksmithsRequest): GetSkippedBlocksmithsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSkippedBlocksmithsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSkippedBlocksmithsRequest;
  static deserializeBinaryFromReader(message: GetSkippedBlocksmithsRequest, reader: jspb.BinaryReader): GetSkippedBlocksmithsRequest;
}

export namespace GetSkippedBlocksmithsRequest {
  export type AsObject = {
    blockheightstart: number,
    blockheightend: number,
  }
}

export class GetSkippedBlocksmithsResponse extends jspb.Message {
  getTotal(): string;
  setTotal(value: string): void;

  clearSkippedblocksmithsList(): void;
  getSkippedblocksmithsList(): Array<SkippedBlocksmith>;
  setSkippedblocksmithsList(value: Array<SkippedBlocksmith>): void;
  addSkippedblocksmiths(value?: SkippedBlocksmith, index?: number): SkippedBlocksmith;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSkippedBlocksmithsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSkippedBlocksmithsResponse): GetSkippedBlocksmithsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSkippedBlocksmithsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSkippedBlocksmithsResponse;
  static deserializeBinaryFromReader(message: GetSkippedBlocksmithsResponse, reader: jspb.BinaryReader): GetSkippedBlocksmithsResponse;
}

export namespace GetSkippedBlocksmithsResponse {
  export type AsObject = {
    total: string,
    skippedblocksmithsList: Array<SkippedBlocksmith.AsObject>,
  }
}

