// package: model
// file: model/proofOfOrigin.proto

import * as jspb from "google-protobuf";

export class ProofOfOrigin extends jspb.Message {
  getMessagebytes(): Uint8Array | string;
  getMessagebytes_asU8(): Uint8Array;
  getMessagebytes_asB64(): string;
  setMessagebytes(value: Uint8Array | string): void;

  getTimestamp(): string;
  setTimestamp(value: string): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProofOfOrigin.AsObject;
  static toObject(includeInstance: boolean, msg: ProofOfOrigin): ProofOfOrigin.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProofOfOrigin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProofOfOrigin;
  static deserializeBinaryFromReader(message: ProofOfOrigin, reader: jspb.BinaryReader): ProofOfOrigin;
}

export namespace ProofOfOrigin {
  export type AsObject = {
    messagebytes: Uint8Array | string,
    timestamp: string,
    signature: Uint8Array | string,
  }
}

export class GetNodeProofOfOriginRequest extends jspb.Message {
  getChallengemessage(): Uint8Array | string;
  getChallengemessage_asU8(): Uint8Array;
  getChallengemessage_asB64(): string;
  setChallengemessage(value: Uint8Array | string): void;

  getTimestamp(): string;
  setTimestamp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodeProofOfOriginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodeProofOfOriginRequest): GetNodeProofOfOriginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNodeProofOfOriginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodeProofOfOriginRequest;
  static deserializeBinaryFromReader(message: GetNodeProofOfOriginRequest, reader: jspb.BinaryReader): GetNodeProofOfOriginRequest;
}

export namespace GetNodeProofOfOriginRequest {
  export type AsObject = {
    challengemessage: Uint8Array | string,
    timestamp: string,
  }
}

