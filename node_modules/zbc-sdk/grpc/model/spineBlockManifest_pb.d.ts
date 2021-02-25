// package: model
// file: model/spineBlockManifest.proto

import * as jspb from "google-protobuf";

export class SpineBlockManifest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getFullfilehash(): Uint8Array | string;
  getFullfilehash_asU8(): Uint8Array;
  getFullfilehash_asB64(): string;
  setFullfilehash(value: Uint8Array | string): void;

  getFilechunkhashes(): Uint8Array | string;
  getFilechunkhashes_asU8(): Uint8Array;
  getFilechunkhashes_asB64(): string;
  setFilechunkhashes(value: Uint8Array | string): void;

  getManifestreferenceheight(): number;
  setManifestreferenceheight(value: number): void;

  getManifestspineblockheight(): number;
  setManifestspineblockheight(value: number): void;

  getChaintype(): number;
  setChaintype(value: number): void;

  getSpineblockmanifesttype(): SpineBlockManifestTypeMap[keyof SpineBlockManifestTypeMap];
  setSpineblockmanifesttype(value: SpineBlockManifestTypeMap[keyof SpineBlockManifestTypeMap]): void;

  getExpirationtimestamp(): number;
  setExpirationtimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpineBlockManifest.AsObject;
  static toObject(includeInstance: boolean, msg: SpineBlockManifest): SpineBlockManifest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpineBlockManifest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpineBlockManifest;
  static deserializeBinaryFromReader(message: SpineBlockManifest, reader: jspb.BinaryReader): SpineBlockManifest;
}

export namespace SpineBlockManifest {
  export type AsObject = {
    id: string,
    fullfilehash: Uint8Array | string,
    filechunkhashes: Uint8Array | string,
    manifestreferenceheight: number,
    manifestspineblockheight: number,
    chaintype: number,
    spineblockmanifesttype: SpineBlockManifestTypeMap[keyof SpineBlockManifestTypeMap],
    expirationtimestamp: number,
  }
}

export interface SpineBlockManifestTypeMap {
  SNAPSHOT: 0;
}

export const SpineBlockManifestType: SpineBlockManifestTypeMap;

