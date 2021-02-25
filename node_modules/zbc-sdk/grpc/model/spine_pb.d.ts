// package: model
// file: model/spine.proto

import * as jspb from "google-protobuf";

export class SpinePublicKey extends jspb.Message {
  getNodepublickey(): Uint8Array | string;
  getNodepublickey_asU8(): Uint8Array;
  getNodepublickey_asB64(): string;
  setNodepublickey(value: Uint8Array | string): void;

  getNodeid(): string;
  setNodeid(value: string): void;

  getMainblockheight(): number;
  setMainblockheight(value: number): void;

  getPublickeyaction(): SpinePublicKeyActionMap[keyof SpinePublicKeyActionMap];
  setPublickeyaction(value: SpinePublicKeyActionMap[keyof SpinePublicKeyActionMap]): void;

  getLatest(): boolean;
  setLatest(value: boolean): void;

  getHeight(): number;
  setHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpinePublicKey.AsObject;
  static toObject(includeInstance: boolean, msg: SpinePublicKey): SpinePublicKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpinePublicKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpinePublicKey;
  static deserializeBinaryFromReader(message: SpinePublicKey, reader: jspb.BinaryReader): SpinePublicKey;
}

export namespace SpinePublicKey {
  export type AsObject = {
    nodepublickey: Uint8Array | string,
    nodeid: string,
    mainblockheight: number,
    publickeyaction: SpinePublicKeyActionMap[keyof SpinePublicKeyActionMap],
    latest: boolean,
    height: number,
  }
}

export interface SpinePublicKeyActionMap {
  ADDKEY: 0;
  REMOVEKEY: 1;
}

export const SpinePublicKeyAction: SpinePublicKeyActionMap;

