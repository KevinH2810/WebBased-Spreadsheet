// package: service
// file: service/accountDataset.proto

import * as service_accountDataset_pb from "../service/accountDataset_pb";
import * as model_accountDataset_pb from "../model/accountDataset_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AccountDatasetServiceGetAccountDatasets = {
  readonly methodName: string;
  readonly service: typeof AccountDatasetService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_accountDataset_pb.GetAccountDatasetsRequest;
  readonly responseType: typeof model_accountDataset_pb.GetAccountDatasetsResponse;
};

type AccountDatasetServiceGetAccountDataset = {
  readonly methodName: string;
  readonly service: typeof AccountDatasetService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_accountDataset_pb.GetAccountDatasetRequest;
  readonly responseType: typeof model_accountDataset_pb.AccountDataset;
};

export class AccountDatasetService {
  static readonly serviceName: string;
  static readonly GetAccountDatasets: AccountDatasetServiceGetAccountDatasets;
  static readonly GetAccountDataset: AccountDatasetServiceGetAccountDataset;
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

export class AccountDatasetServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAccountDatasets(
    requestMessage: model_accountDataset_pb.GetAccountDatasetsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_accountDataset_pb.GetAccountDatasetsResponse|null) => void
  ): UnaryResponse;
  getAccountDatasets(
    requestMessage: model_accountDataset_pb.GetAccountDatasetsRequest,
    callback: (error: ServiceError|null, responseMessage: model_accountDataset_pb.GetAccountDatasetsResponse|null) => void
  ): UnaryResponse;
  getAccountDataset(
    requestMessage: model_accountDataset_pb.GetAccountDatasetRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_accountDataset_pb.AccountDataset|null) => void
  ): UnaryResponse;
  getAccountDataset(
    requestMessage: model_accountDataset_pb.GetAccountDatasetRequest,
    callback: (error: ServiceError|null, responseMessage: model_accountDataset_pb.AccountDataset|null) => void
  ): UnaryResponse;
}

