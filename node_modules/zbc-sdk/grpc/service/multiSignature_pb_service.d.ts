// package: service
// file: service/multiSignature.proto

import * as service_multiSignature_pb from "../service/multiSignature_pb";
import * as model_multiSignature_pb from "../model/multiSignature_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MultisigServiceGetPendingTransactions = {
  readonly methodName: string;
  readonly service: typeof MultisigService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_multiSignature_pb.GetPendingTransactionsRequest;
  readonly responseType: typeof model_multiSignature_pb.GetPendingTransactionsResponse;
};

type MultisigServiceGetPendingTransactionDetailByTransactionHash = {
  readonly methodName: string;
  readonly service: typeof MultisigService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_multiSignature_pb.GetPendingTransactionDetailByTransactionHashRequest;
  readonly responseType: typeof model_multiSignature_pb.GetPendingTransactionDetailByTransactionHashResponse;
};

type MultisigServiceGetMultisignatureInfo = {
  readonly methodName: string;
  readonly service: typeof MultisigService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_multiSignature_pb.GetMultisignatureInfoRequest;
  readonly responseType: typeof model_multiSignature_pb.GetMultisignatureInfoResponse;
};

type MultisigServiceGetMultisigAddressByParticipantAddress = {
  readonly methodName: string;
  readonly service: typeof MultisigService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_multiSignature_pb.GetMultisigAddressByParticipantAddressRequest;
  readonly responseType: typeof model_multiSignature_pb.GetMultisigAddressByParticipantAddressResponse;
};

type MultisigServiceGetPendingTransactionsByHeight = {
  readonly methodName: string;
  readonly service: typeof MultisigService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_multiSignature_pb.GetPendingTransactionsByHeightRequest;
  readonly responseType: typeof model_multiSignature_pb.GetPendingTransactionsByHeightResponse;
};

type MultisigServiceGetMultisigAddressesByBlockHeightRange = {
  readonly methodName: string;
  readonly service: typeof MultisigService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_multiSignature_pb.GetMultisigAddressesByBlockHeightRangeRequest;
  readonly responseType: typeof model_multiSignature_pb.GetMultisigAddressesByBlockHeightRangeResponse;
};

type MultisigServiceGetParticipantsByMultisigAddresses = {
  readonly methodName: string;
  readonly service: typeof MultisigService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_multiSignature_pb.GetParticipantsByMultisigAddressesRequest;
  readonly responseType: typeof model_multiSignature_pb.GetParticipantsByMultisigAddressesResponse;
};

export class MultisigService {
  static readonly serviceName: string;
  static readonly GetPendingTransactions: MultisigServiceGetPendingTransactions;
  static readonly GetPendingTransactionDetailByTransactionHash: MultisigServiceGetPendingTransactionDetailByTransactionHash;
  static readonly GetMultisignatureInfo: MultisigServiceGetMultisignatureInfo;
  static readonly GetMultisigAddressByParticipantAddress: MultisigServiceGetMultisigAddressByParticipantAddress;
  static readonly GetPendingTransactionsByHeight: MultisigServiceGetPendingTransactionsByHeight;
  static readonly GetMultisigAddressesByBlockHeightRange: MultisigServiceGetMultisigAddressesByBlockHeightRange;
  static readonly GetParticipantsByMultisigAddresses: MultisigServiceGetParticipantsByMultisigAddresses;
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

export class MultisigServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getPendingTransactions(
    requestMessage: model_multiSignature_pb.GetPendingTransactionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_multiSignature_pb.GetPendingTransactionsResponse|null) => void
  ): UnaryResponse;
  getPendingTransactions(
    requestMessage: model_multiSignature_pb.GetPendingTransactionsRequest,
    callback: (error: ServiceError|null, responseMessage: model_multiSignature_pb.GetPendingTransactionsResponse|null) => void
  ): UnaryResponse;
  getPendingTransactionDetailByTransactionHash(
    requestMessage: model_multiSignature_pb.GetPendingTransactionDetailByTransactionHashRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_multiSignature_pb.GetPendingTransactionDetailByTransactionHashResponse|null) => void
  ): UnaryResponse;
  getPendingTransactionDetailByTransactionHash(
    requestMessage: model_multiSignature_pb.GetPendingTransactionDetailByTransactionHashRequest,
    callback: (error: ServiceError|null, responseMessage: model_multiSignature_pb.GetPendingTransactionDetailByTransactionHashResponse|null) => void
  ): UnaryResponse;
  getMultisignatureInfo(
    requestMessage: model_multiSignature_pb.GetMultisignatureInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_multiSignature_pb.GetMultisignatureInfoResponse|null) => void
  ): UnaryResponse;
  getMultisignatureInfo(
    requestMessage: model_multiSignature_pb.GetMultisignatureInfoRequest,
    callback: (error: ServiceError|null, responseMessage: model_multiSignature_pb.GetMultisignatureInfoResponse|null) => void
  ): UnaryResponse;
  getMultisigAddressByParticipantAddress(
    requestMessage: model_multiSignature_pb.GetMultisigAddressByParticipantAddressRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_multiSignature_pb.GetMultisigAddressByParticipantAddressResponse|null) => void
  ): UnaryResponse;
  getMultisigAddressByParticipantAddress(
    requestMessage: model_multiSignature_pb.GetMultisigAddressByParticipantAddressRequest,
    callback: (error: ServiceError|null, responseMessage: model_multiSignature_pb.GetMultisigAddressByParticipantAddressResponse|null) => void
  ): UnaryResponse;
  getPendingTransactionsByHeight(
    requestMessage: model_multiSignature_pb.GetPendingTransactionsByHeightRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_multiSignature_pb.GetPendingTransactionsByHeightResponse|null) => void
  ): UnaryResponse;
  getPendingTransactionsByHeight(
    requestMessage: model_multiSignature_pb.GetPendingTransactionsByHeightRequest,
    callback: (error: ServiceError|null, responseMessage: model_multiSignature_pb.GetPendingTransactionsByHeightResponse|null) => void
  ): UnaryResponse;
  getMultisigAddressesByBlockHeightRange(
    requestMessage: model_multiSignature_pb.GetMultisigAddressesByBlockHeightRangeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_multiSignature_pb.GetMultisigAddressesByBlockHeightRangeResponse|null) => void
  ): UnaryResponse;
  getMultisigAddressesByBlockHeightRange(
    requestMessage: model_multiSignature_pb.GetMultisigAddressesByBlockHeightRangeRequest,
    callback: (error: ServiceError|null, responseMessage: model_multiSignature_pb.GetMultisigAddressesByBlockHeightRangeResponse|null) => void
  ): UnaryResponse;
  getParticipantsByMultisigAddresses(
    requestMessage: model_multiSignature_pb.GetParticipantsByMultisigAddressesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_multiSignature_pb.GetParticipantsByMultisigAddressesResponse|null) => void
  ): UnaryResponse;
  getParticipantsByMultisigAddresses(
    requestMessage: model_multiSignature_pb.GetParticipantsByMultisigAddressesRequest,
    callback: (error: ServiceError|null, responseMessage: model_multiSignature_pb.GetParticipantsByMultisigAddressesResponse|null) => void
  ): UnaryResponse;
}

