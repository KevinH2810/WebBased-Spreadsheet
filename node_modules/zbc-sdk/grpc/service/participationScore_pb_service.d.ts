// package: service
// file: service/participationScore.proto

import * as service_participationScore_pb from "../service/participationScore_pb";
import * as model_participationScore_pb from "../model/participationScore_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ParticipationScoreServiceGetParticipationScores = {
  readonly methodName: string;
  readonly service: typeof ParticipationScoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_participationScore_pb.GetParticipationScoresRequest;
  readonly responseType: typeof model_participationScore_pb.GetParticipationScoresResponse;
};

type ParticipationScoreServiceGetLatestParticipationScoreByNodeID = {
  readonly methodName: string;
  readonly service: typeof ParticipationScoreService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_participationScore_pb.GetLatestParticipationScoreByNodeIDRequest;
  readonly responseType: typeof model_participationScore_pb.ParticipationScore;
};

export class ParticipationScoreService {
  static readonly serviceName: string;
  static readonly GetParticipationScores: ParticipationScoreServiceGetParticipationScores;
  static readonly GetLatestParticipationScoreByNodeID: ParticipationScoreServiceGetLatestParticipationScoreByNodeID;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ParticipationScoreServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getParticipationScores(
    requestMessage: model_participationScore_pb.GetParticipationScoresRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_participationScore_pb.GetParticipationScoresResponse|null) => void
  ): UnaryResponse;
  getParticipationScores(
    requestMessage: model_participationScore_pb.GetParticipationScoresRequest,
    callback: (error: ServiceError|null, responseMessage: model_participationScore_pb.GetParticipationScoresResponse|null) => void
  ): UnaryResponse;
  getLatestParticipationScoreByNodeID(
    requestMessage: model_participationScore_pb.GetLatestParticipationScoreByNodeIDRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_participationScore_pb.ParticipationScore|null) => void
  ): UnaryResponse;
  getLatestParticipationScoreByNodeID(
    requestMessage: model_participationScore_pb.GetLatestParticipationScoreByNodeIDRequest,
    callback: (error: ServiceError|null, responseMessage: model_participationScore_pb.ParticipationScore|null) => void
  ): UnaryResponse;
}

