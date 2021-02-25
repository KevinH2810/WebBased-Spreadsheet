// package: service
// file: service/escrow.proto

import * as service_escrow_pb from "../service/escrow_pb";
import * as model_escrow_pb from "../model/escrow_pb";
import {grpc} from "@improbable-eng/grpc-web";

type EscrowTransactionServiceGetEscrowTransactions = {
  readonly methodName: string;
  readonly service: typeof EscrowTransactionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_escrow_pb.GetEscrowTransactionsRequest;
  readonly responseType: typeof model_escrow_pb.GetEscrowTransactionsResponse;
};

type EscrowTransactionServiceGetEscrowTransaction = {
  readonly methodName: string;
  readonly service: typeof EscrowTransactionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_escrow_pb.GetEscrowTransactionRequest;
  readonly responseType: typeof model_escrow_pb.Escrow;
};

export class EscrowTransactionService {
  static readonly serviceName: string;
  static readonly GetEscrowTransactions: EscrowTransactionServiceGetEscrowTransactions;
  static readonly GetEscrowTransaction: EscrowTransactionServiceGetEscrowTransaction;
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

export class EscrowTransactionServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getEscrowTransactions(
    requestMessage: model_escrow_pb.GetEscrowTransactionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_escrow_pb.GetEscrowTransactionsResponse|null) => void
  ): UnaryResponse;
  getEscrowTransactions(
    requestMessage: model_escrow_pb.GetEscrowTransactionsRequest,
    callback: (error: ServiceError|null, responseMessage: model_escrow_pb.GetEscrowTransactionsResponse|null) => void
  ): UnaryResponse;
  getEscrowTransaction(
    requestMessage: model_escrow_pb.GetEscrowTransactionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_escrow_pb.Escrow|null) => void
  ): UnaryResponse;
  getEscrowTransaction(
    requestMessage: model_escrow_pb.GetEscrowTransactionRequest,
    callback: (error: ServiceError|null, responseMessage: model_escrow_pb.Escrow|null) => void
  ): UnaryResponse;
}

