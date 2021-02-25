// package: model
// file: model/publishedReceipt.proto

import * as jspb from "google-protobuf";
import * as model_receipt_pb from "../model/receipt_pb";

export class PublishedReceipt extends jspb.Message {
  hasReceipt(): boolean;
  clearReceipt(): void;
  getReceipt(): model_receipt_pb.Receipt | undefined;
  setReceipt(value?: model_receipt_pb.Receipt): void;

  getIntermediatehashes(): Uint8Array | string;
  getIntermediatehashes_asU8(): Uint8Array;
  getIntermediatehashes_asB64(): string;
  setIntermediatehashes(value: Uint8Array | string): void;

  getBlockheight(): number;
  setBlockheight(value: number): void;

  getReceiptindex(): number;
  setReceiptindex(value: number): void;

  getPublishedindex(): number;
  setPublishedindex(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishedReceipt.AsObject;
  static toObject(includeInstance: boolean, msg: PublishedReceipt): PublishedReceipt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishedReceipt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishedReceipt;
  static deserializeBinaryFromReader(message: PublishedReceipt, reader: jspb.BinaryReader): PublishedReceipt;
}

export namespace PublishedReceipt {
  export type AsObject = {
    receipt?: model_receipt_pb.Receipt.AsObject,
    intermediatehashes: Uint8Array | string,
    blockheight: number,
    receiptindex: number,
    publishedindex: number,
  }
}

export class GetPublishedReceiptsRequest extends jspb.Message {
  getFromheight(): number;
  setFromheight(value: number): void;

  getToheight(): number;
  setToheight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPublishedReceiptsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPublishedReceiptsRequest): GetPublishedReceiptsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPublishedReceiptsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPublishedReceiptsRequest;
  static deserializeBinaryFromReader(message: GetPublishedReceiptsRequest, reader: jspb.BinaryReader): GetPublishedReceiptsRequest;
}

export namespace GetPublishedReceiptsRequest {
  export type AsObject = {
    fromheight: number,
    toheight: number,
  }
}

export class GetPublishedReceiptsResponse extends jspb.Message {
  clearPublishedreceiptsList(): void;
  getPublishedreceiptsList(): Array<PublishedReceipt>;
  setPublishedreceiptsList(value: Array<PublishedReceipt>): void;
  addPublishedreceipts(value?: PublishedReceipt, index?: number): PublishedReceipt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPublishedReceiptsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPublishedReceiptsResponse): GetPublishedReceiptsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPublishedReceiptsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPublishedReceiptsResponse;
  static deserializeBinaryFromReader(message: GetPublishedReceiptsResponse, reader: jspb.BinaryReader): GetPublishedReceiptsResponse;
}

export namespace GetPublishedReceiptsResponse {
  export type AsObject = {
    publishedreceiptsList: Array<PublishedReceipt.AsObject>,
  }
}

