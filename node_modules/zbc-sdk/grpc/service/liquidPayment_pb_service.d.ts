// package: service
// file: service/liquidPayment.proto

import * as service_liquidPayment_pb from "../service/liquidPayment_pb";
import * as model_liquidPayment_pb from "../model/liquidPayment_pb";
import {grpc} from "@improbable-eng/grpc-web";

type LiquidPaymentServiceGetLiquidTransactions = {
  readonly methodName: string;
  readonly service: typeof LiquidPaymentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_liquidPayment_pb.GetLiquidTransactionsRequest;
  readonly responseType: typeof model_liquidPayment_pb.GetLiquidTransactionsResponse;
};

export class LiquidPaymentService {
  static readonly serviceName: string;
  static readonly GetLiquidTransactions: LiquidPaymentServiceGetLiquidTransactions;
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

export class LiquidPaymentServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getLiquidTransactions(
    requestMessage: model_liquidPayment_pb.GetLiquidTransactionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_liquidPayment_pb.GetLiquidTransactionsResponse|null) => void
  ): UnaryResponse;
  getLiquidTransactions(
    requestMessage: model_liquidPayment_pb.GetLiquidTransactionsRequest,
    callback: (error: ServiceError|null, responseMessage: model_liquidPayment_pb.GetLiquidTransactionsResponse|null) => void
  ): UnaryResponse;
}

