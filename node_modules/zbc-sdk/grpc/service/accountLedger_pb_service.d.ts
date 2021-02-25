// package: service
// file: service/accountLedger.proto

import * as service_accountLedger_pb from "../service/accountLedger_pb";
import * as model_accountLedger_pb from "../model/accountLedger_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AccountLedgerServiceGetAccountLedgers = {
  readonly methodName: string;
  readonly service: typeof AccountLedgerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_accountLedger_pb.GetAccountLedgersRequest;
  readonly responseType: typeof model_accountLedger_pb.GetAccountLedgersResponse;
};

export class AccountLedgerService {
  static readonly serviceName: string;
  static readonly GetAccountLedgers: AccountLedgerServiceGetAccountLedgers;
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

export class AccountLedgerServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAccountLedgers(
    requestMessage: model_accountLedger_pb.GetAccountLedgersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_accountLedger_pb.GetAccountLedgersResponse|null) => void
  ): UnaryResponse;
  getAccountLedgers(
    requestMessage: model_accountLedger_pb.GetAccountLedgersRequest,
    callback: (error: ServiceError|null, responseMessage: model_accountLedger_pb.GetAccountLedgersResponse|null) => void
  ): UnaryResponse;
}

