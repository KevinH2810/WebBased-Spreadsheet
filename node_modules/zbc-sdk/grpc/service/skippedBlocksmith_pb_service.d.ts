// package: service
// file: service/skippedBlocksmith.proto

import * as service_skippedBlocksmith_pb from "../service/skippedBlocksmith_pb";
import * as model_skippedBlocksmith_pb from "../model/skippedBlocksmith_pb";
import {grpc} from "@improbable-eng/grpc-web";

type SkippedBlockSmithsServiceGetSkippedBlockSmiths = {
  readonly methodName: string;
  readonly service: typeof SkippedBlockSmithsService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_skippedBlocksmith_pb.GetSkippedBlocksmithsRequest;
  readonly responseType: typeof model_skippedBlocksmith_pb.GetSkippedBlocksmithsResponse;
};

export class SkippedBlockSmithsService {
  static readonly serviceName: string;
  static readonly GetSkippedBlockSmiths: SkippedBlockSmithsServiceGetSkippedBlockSmiths;
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

export class SkippedBlockSmithsServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getSkippedBlockSmiths(
    requestMessage: model_skippedBlocksmith_pb.GetSkippedBlocksmithsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_skippedBlocksmith_pb.GetSkippedBlocksmithsResponse|null) => void
  ): UnaryResponse;
  getSkippedBlockSmiths(
    requestMessage: model_skippedBlocksmith_pb.GetSkippedBlocksmithsRequest,
    callback: (error: ServiceError|null, responseMessage: model_skippedBlocksmith_pb.GetSkippedBlocksmithsResponse|null) => void
  ): UnaryResponse;
}

