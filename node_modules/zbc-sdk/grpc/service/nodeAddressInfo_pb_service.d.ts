// package: service
// file: service/nodeAddressInfo.proto

import * as service_nodeAddressInfo_pb from "../service/nodeAddressInfo_pb";
import * as model_nodeAddressInfo_pb from "../model/nodeAddressInfo_pb";
import {grpc} from "@improbable-eng/grpc-web";

type NodeAddressInfoServiceGetNodeAddressInfo = {
  readonly methodName: string;
  readonly service: typeof NodeAddressInfoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_nodeAddressInfo_pb.GetNodeAddressesInfoRequest;
  readonly responseType: typeof model_nodeAddressInfo_pb.GetNodeAddressesInfoResponse;
};

export class NodeAddressInfoService {
  static readonly serviceName: string;
  static readonly GetNodeAddressInfo: NodeAddressInfoServiceGetNodeAddressInfo;
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

export class NodeAddressInfoServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getNodeAddressInfo(
    requestMessage: model_nodeAddressInfo_pb.GetNodeAddressesInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_nodeAddressInfo_pb.GetNodeAddressesInfoResponse|null) => void
  ): UnaryResponse;
  getNodeAddressInfo(
    requestMessage: model_nodeAddressInfo_pb.GetNodeAddressesInfoRequest,
    callback: (error: ServiceError|null, responseMessage: model_nodeAddressInfo_pb.GetNodeAddressesInfoResponse|null) => void
  ): UnaryResponse;
}

