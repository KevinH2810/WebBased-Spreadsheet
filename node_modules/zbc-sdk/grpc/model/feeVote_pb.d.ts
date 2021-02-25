// package: model
// file: model/feeVote.proto

import * as jspb from "google-protobuf";

export class FeeVoteCommitmentVote extends jspb.Message {
  getVotehash(): Uint8Array | string;
  getVotehash_asU8(): Uint8Array;
  getVotehash_asB64(): string;
  setVotehash(value: Uint8Array | string): void;

  getVoteraddress(): Uint8Array | string;
  getVoteraddress_asU8(): Uint8Array;
  getVoteraddress_asB64(): string;
  setVoteraddress(value: Uint8Array | string): void;

  getBlockheight(): number;
  setBlockheight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeeVoteCommitmentVote.AsObject;
  static toObject(includeInstance: boolean, msg: FeeVoteCommitmentVote): FeeVoteCommitmentVote.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeeVoteCommitmentVote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeeVoteCommitmentVote;
  static deserializeBinaryFromReader(message: FeeVoteCommitmentVote, reader: jspb.BinaryReader): FeeVoteCommitmentVote;
}

export namespace FeeVoteCommitmentVote {
  export type AsObject = {
    votehash: Uint8Array | string,
    voteraddress: Uint8Array | string,
    blockheight: number,
  }
}

export class FeeVoteInfo extends jspb.Message {
  getRecentblockhash(): Uint8Array | string;
  getRecentblockhash_asU8(): Uint8Array;
  getRecentblockhash_asB64(): string;
  setRecentblockhash(value: Uint8Array | string): void;

  getRecentblockheight(): number;
  setRecentblockheight(value: number): void;

  getFeevote(): string;
  setFeevote(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeeVoteInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FeeVoteInfo): FeeVoteInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeeVoteInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeeVoteInfo;
  static deserializeBinaryFromReader(message: FeeVoteInfo, reader: jspb.BinaryReader): FeeVoteInfo;
}

export namespace FeeVoteInfo {
  export type AsObject = {
    recentblockhash: Uint8Array | string,
    recentblockheight: number,
    feevote: string,
  }
}

export class FeeVoteRevealVote extends jspb.Message {
  hasVoteinfo(): boolean;
  clearVoteinfo(): void;
  getVoteinfo(): FeeVoteInfo | undefined;
  setVoteinfo(value?: FeeVoteInfo): void;

  getVotersignature(): Uint8Array | string;
  getVotersignature_asU8(): Uint8Array;
  getVotersignature_asB64(): string;
  setVotersignature(value: Uint8Array | string): void;

  getVoteraddress(): Uint8Array | string;
  getVoteraddress_asU8(): Uint8Array;
  getVoteraddress_asB64(): string;
  setVoteraddress(value: Uint8Array | string): void;

  getBlockheight(): number;
  setBlockheight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeeVoteRevealVote.AsObject;
  static toObject(includeInstance: boolean, msg: FeeVoteRevealVote): FeeVoteRevealVote.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeeVoteRevealVote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeeVoteRevealVote;
  static deserializeBinaryFromReader(message: FeeVoteRevealVote, reader: jspb.BinaryReader): FeeVoteRevealVote;
}

export namespace FeeVoteRevealVote {
  export type AsObject = {
    voteinfo?: FeeVoteInfo.AsObject,
    votersignature: Uint8Array | string,
    voteraddress: Uint8Array | string,
    blockheight: number,
  }
}

