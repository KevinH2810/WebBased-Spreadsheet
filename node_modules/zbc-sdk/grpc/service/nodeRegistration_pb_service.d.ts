// package: service
// file: service/nodeRegistration.proto

import * as service_nodeRegistration_pb from "../service/nodeRegistration_pb";
import * as model_empty_pb from "../model/empty_pb";
import * as model_nodeRegistration_pb from "../model/nodeRegistration_pb";
import {grpc} from "@improbable-eng/grpc-web";

type NodeRegistrationServiceGetNodeRegistrations = {
  readonly methodName: string;
  readonly service: typeof NodeRegistrationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_nodeRegistration_pb.GetNodeRegistrationsRequest;
  readonly responseType: typeof model_nodeRegistration_pb.GetNodeRegistrationsResponse;
};

type NodeRegistrationServiceGetNodeRegistration = {
  readonly methodName: string;
  readonly service: typeof NodeRegistrationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_nodeRegistration_pb.GetNodeRegistrationRequest;
  readonly responseType: typeof model_nodeRegistration_pb.GetNodeRegistrationResponse;
};

type NodeRegistrationServiceGetNodeRegistrationsByNodePublicKeys = {
  readonly methodName: string;
  readonly service: typeof NodeRegistrationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_nodeRegistration_pb.GetNodeRegistrationsByNodePublicKeysRequest;
  readonly responseType: typeof model_nodeRegistration_pb.GetNodeRegistrationsByNodePublicKeysResponse;
};

type NodeRegistrationServiceGetPendingNodeRegistrations = {
  readonly methodName: string;
  readonly service: typeof NodeRegistrationService;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof model_nodeRegistration_pb.GetPendingNodeRegistrationsRequest;
  readonly responseType: typeof model_nodeRegistration_pb.GetPendingNodeRegistrationsResponse;
};

type NodeRegistrationServiceGetMyNodePublicKey = {
  readonly methodName: string;
  readonly service: typeof NodeRegistrationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_empty_pb.Empty;
  readonly responseType: typeof model_nodeRegistration_pb.GetMyNodePublicKeyResponse;
};

export class NodeRegistrationService {
  static readonly serviceName: string;
  static readonly GetNodeRegistrations: NodeRegistrationServiceGetNodeRegistrations;
  static readonly GetNodeRegistration: NodeRegistrationServiceGetNodeRegistration;
  static readonly GetNodeRegistrationsByNodePublicKeys: NodeRegistrationServiceGetNodeRegistrationsByNodePublicKeys;
  static readonly GetPendingNodeRegistrations: NodeRegistrationServiceGetPendingNodeRegistrations;
  static readonly GetMyNodePublicKey: NodeRegistrationServiceGetMyNodePublicKey;
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

export class NodeRegistrationServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getNodeRegistrations(
    requestMessage: model_nodeRegistration_pb.GetNodeRegistrationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_nodeRegistration_pb.GetNodeRegistrationsResponse|null) => void
  ): UnaryResponse;
  getNodeRegistrations(
    requestMessage: model_nodeRegistration_pb.GetNodeRegistrationsRequest,
    callback: (error: ServiceError|null, responseMessage: model_nodeRegistration_pb.GetNodeRegistrationsResponse|null) => void
  ): UnaryResponse;
  getNodeRegistration(
    requestMessage: model_nodeRegistration_pb.GetNodeRegistrationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_nodeRegistration_pb.GetNodeRegistrationResponse|null) => void
  ): UnaryResponse;
  getNodeRegistration(
    requestMessage: model_nodeRegistration_pb.GetNodeRegistrationRequest,
    callback: (error: ServiceError|null, responseMessage: model_nodeRegistration_pb.GetNodeRegistrationResponse|null) => void
  ): UnaryResponse;
  getNodeRegistrationsByNodePublicKeys(
    requestMessage: model_nodeRegistration_pb.GetNodeRegistrationsByNodePublicKeysRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_nodeRegistration_pb.GetNodeRegistrationsByNodePublicKeysResponse|null) => void
  ): UnaryResponse;
  getNodeRegistrationsByNodePublicKeys(
    requestMessage: model_nodeRegistration_pb.GetNodeRegistrationsByNodePublicKeysRequest,
    callback: (error: ServiceError|null, responseMessage: model_nodeRegistration_pb.GetNodeRegistrationsByNodePublicKeysResponse|null) => void
  ): UnaryResponse;
  getPendingNodeRegistrations(metadata?: grpc.Metadata): BidirectionalStream<model_nodeRegistration_pb.GetPendingNodeRegistrationsRequest, model_nodeRegistration_pb.GetPendingNodeRegistrationsResponse>;
  getMyNodePublicKey(
    requestMessage: model_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_nodeRegistration_pb.GetMyNodePublicKeyResponse|null) => void
  ): UnaryResponse;
  getMyNodePublicKey(
    requestMessage: model_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: model_nodeRegistration_pb.GetMyNodePublicKeyResponse|null) => void
  ): UnaryResponse;
}

