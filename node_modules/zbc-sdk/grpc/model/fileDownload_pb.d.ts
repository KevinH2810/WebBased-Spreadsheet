// package: model
// file: model/fileDownload.proto

import * as jspb from "google-protobuf";

export class FileDownloadResponse extends jspb.Message {
  clearFilechunksList(): void;
  getFilechunksList(): Array<Uint8Array | string>;
  getFilechunksList_asU8(): Array<Uint8Array>;
  getFilechunksList_asB64(): Array<string>;
  setFilechunksList(value: Array<Uint8Array | string>): void;
  addFilechunks(value: Uint8Array | string, index?: number): Uint8Array | string;

  clearFailedList(): void;
  getFailedList(): Array<string>;
  setFailedList(value: Array<string>): void;
  addFailed(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileDownloadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FileDownloadResponse): FileDownloadResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileDownloadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileDownloadResponse;
  static deserializeBinaryFromReader(message: FileDownloadResponse, reader: jspb.BinaryReader): FileDownloadResponse;
}

export namespace FileDownloadResponse {
  export type AsObject = {
    filechunksList: Array<Uint8Array | string>,
    failedList: Array<string>,
  }
}

export class FileDownloadRequest extends jspb.Message {
  getSnapshothash(): Uint8Array | string;
  getSnapshothash_asU8(): Uint8Array;
  getSnapshothash_asB64(): string;
  setSnapshothash(value: Uint8Array | string): void;

  clearFilechunknamesList(): void;
  getFilechunknamesList(): Array<string>;
  setFilechunknamesList(value: Array<string>): void;
  addFilechunknames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileDownloadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FileDownloadRequest): FileDownloadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileDownloadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileDownloadRequest;
  static deserializeBinaryFromReader(message: FileDownloadRequest, reader: jspb.BinaryReader): FileDownloadRequest;
}

export namespace FileDownloadRequest {
  export type AsObject = {
    snapshothash: Uint8Array | string,
    filechunknamesList: Array<string>,
  }
}

