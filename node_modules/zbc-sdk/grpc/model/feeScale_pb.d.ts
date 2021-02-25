// package: model
// file: model/feeScale.proto

import * as jspb from "google-protobuf";

export class FeeScale extends jspb.Message {
  getFeescale(): string;
  setFeescale(value: string): void;

  getBlockheight(): number;
  setBlockheight(value: number): void;

  getLatest(): boolean;
  setLatest(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeeScale.AsObject;
  static toObject(includeInstance: boolean, msg: FeeScale): FeeScale.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeeScale, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeeScale;
  static deserializeBinaryFromReader(message: FeeScale, reader: jspb.BinaryReader): FeeScale;
}

export namespace FeeScale {
  export type AsObject = {
    feescale: string,
    blockheight: number,
    latest: boolean,
  }
}

export interface FeeVotePhaseMap {
  FEEVOTEPHASECOMMMIT: 0;
  FEEVOTEPHASEREVEAL: 1;
  FEEVOTEPHASEADJUST: 2;
}

export const FeeVotePhase: FeeVotePhaseMap;

