// package: model
// file: model/batchReceipt.proto

import * as jspb from "google-protobuf";
import * as model_receipt_pb from "../model/receipt_pb";

export class BatchReceipt extends jspb.Message {
  hasReceipt(): boolean;
  clearReceipt(): void;
  getReceipt(): model_receipt_pb.Receipt | undefined;
  setReceipt(value?: model_receipt_pb.Receipt): void;

  getRmr(): Uint8Array | string;
  getRmr_asU8(): Uint8Array;
  getRmr_asB64(): string;
  setRmr(value: Uint8Array | string): void;

  getRmrindex(): number;
  setRmrindex(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchReceipt.AsObject;
  static toObject(includeInstance: boolean, msg: BatchReceipt): BatchReceipt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchReceipt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchReceipt;
  static deserializeBinaryFromReader(message: BatchReceipt, reader: jspb.BinaryReader): BatchReceipt;
}

export namespace BatchReceipt {
  export type AsObject = {
    receipt?: model_receipt_pb.Receipt.AsObject,
    rmr: Uint8Array | string,
    rmrindex: number,
  }
}

