// package: service
// file: service/publishedReceipt.proto

import * as service_publishedReceipt_pb from "../service/publishedReceipt_pb";
import * as model_publishedReceipt_pb from "../model/publishedReceipt_pb";
import {grpc} from "@improbable-eng/grpc-web";

type PublishedReceiptServiceGetPublishedReceipts = {
  readonly methodName: string;
  readonly service: typeof PublishedReceiptService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_publishedReceipt_pb.GetPublishedReceiptsRequest;
  readonly responseType: typeof model_publishedReceipt_pb.GetPublishedReceiptsResponse;
};

export class PublishedReceiptService {
  static readonly serviceName: string;
  static readonly GetPublishedReceipts: PublishedReceiptServiceGetPublishedReceipts;
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

export class PublishedReceiptServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getPublishedReceipts(
    requestMessage: model_publishedReceipt_pb.GetPublishedReceiptsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_publishedReceipt_pb.GetPublishedReceiptsResponse|null) => void
  ): UnaryResponse;
  getPublishedReceipts(
    requestMessage: model_publishedReceipt_pb.GetPublishedReceiptsRequest,
    callback: (error: ServiceError|null, responseMessage: model_publishedReceipt_pb.GetPublishedReceiptsResponse|null) => void
  ): UnaryResponse;
}

