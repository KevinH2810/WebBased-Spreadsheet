// package: service
// file: service/nodeHardware.proto

import * as service_nodeHardware_pb from "../service/nodeHardware_pb";
import * as model_nodeHardware_pb from "../model/nodeHardware_pb";
import * as model_empty_pb from "../model/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type NodeHardwareServiceGetNodeHardware = {
  readonly methodName: string;
  readonly service: typeof NodeHardwareService;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof model_nodeHardware_pb.GetNodeHardwareRequest;
  readonly responseType: typeof model_nodeHardware_pb.GetNodeHardwareResponse;
};

type NodeHardwareServiceGetNodeTime = {
  readonly methodName: string;
  readonly service: typeof NodeHardwareService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_empty_pb.Empty;
  readonly responseType: typeof model_nodeHardware_pb.GetNodeTimeResponse;
};

export class NodeHardwareService {
  static readonly serviceName: string;
  static readonly GetNodeHardware: NodeHardwareServiceGetNodeHardware;
  static readonly GetNodeTime: NodeHardwareServiceGetNodeTime;
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

export class NodeHardwareServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getNodeHardware(metadata?: grpc.Metadata): BidirectionalStream<model_nodeHardware_pb.GetNodeHardwareRequest, model_nodeHardware_pb.GetNodeHardwareResponse>;
  getNodeTime(
    requestMessage: model_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_nodeHardware_pb.GetNodeTimeResponse|null) => void
  ): UnaryResponse;
  getNodeTime(
    requestMessage: model_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: model_nodeHardware_pb.GetNodeTimeResponse|null) => void
  ): UnaryResponse;
}

