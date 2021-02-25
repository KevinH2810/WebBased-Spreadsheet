// package: model
// file: model/participationScore.proto

import * as jspb from "google-protobuf";

export class ParticipationScore extends jspb.Message {
  getNodeid(): string;
  setNodeid(value: string): void;

  getScore(): string;
  setScore(value: string): void;

  getLatest(): boolean;
  setLatest(value: boolean): void;

  getHeight(): number;
  setHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParticipationScore.AsObject;
  static toObject(includeInstance: boolean, msg: ParticipationScore): ParticipationScore.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParticipationScore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParticipationScore;
  static deserializeBinaryFromReader(message: ParticipationScore, reader: jspb.BinaryReader): ParticipationScore;
}

export namespace ParticipationScore {
  export type AsObject = {
    nodeid: string,
    score: string,
    latest: boolean,
    height: number,
  }
}

export class GetParticipationScoresRequest extends jspb.Message {
  getFromheight(): number;
  setFromheight(value: number): void;

  getToheight(): number;
  setToheight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetParticipationScoresRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetParticipationScoresRequest): GetParticipationScoresRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetParticipationScoresRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetParticipationScoresRequest;
  static deserializeBinaryFromReader(message: GetParticipationScoresRequest, reader: jspb.BinaryReader): GetParticipationScoresRequest;
}

export namespace GetParticipationScoresRequest {
  export type AsObject = {
    fromheight: number,
    toheight: number,
  }
}

export class GetParticipationScoresResponse extends jspb.Message {
  clearParticipationscoresList(): void;
  getParticipationscoresList(): Array<ParticipationScore>;
  setParticipationscoresList(value: Array<ParticipationScore>): void;
  addParticipationscores(value?: ParticipationScore, index?: number): ParticipationScore;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetParticipationScoresResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetParticipationScoresResponse): GetParticipationScoresResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetParticipationScoresResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetParticipationScoresResponse;
  static deserializeBinaryFromReader(message: GetParticipationScoresResponse, reader: jspb.BinaryReader): GetParticipationScoresResponse;
}

export namespace GetParticipationScoresResponse {
  export type AsObject = {
    participationscoresList: Array<ParticipationScore.AsObject>,
  }
}

export class GetLatestParticipationScoreByNodeIDRequest extends jspb.Message {
  getNodeid(): string;
  setNodeid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLatestParticipationScoreByNodeIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLatestParticipationScoreByNodeIDRequest): GetLatestParticipationScoreByNodeIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLatestParticipationScoreByNodeIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLatestParticipationScoreByNodeIDRequest;
  static deserializeBinaryFromReader(message: GetLatestParticipationScoreByNodeIDRequest, reader: jspb.BinaryReader): GetLatestParticipationScoreByNodeIDRequest;
}

export namespace GetLatestParticipationScoreByNodeIDRequest {
  export type AsObject = {
    nodeid: string,
  }
}

