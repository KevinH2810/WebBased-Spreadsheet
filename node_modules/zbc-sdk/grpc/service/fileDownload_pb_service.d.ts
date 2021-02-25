// package: service
// file: service/fileDownload.proto

import * as service_fileDownload_pb from "../service/fileDownload_pb";
import * as model_fileDownload_pb from "../model/fileDownload_pb";
import {grpc} from "@improbable-eng/grpc-web";

type FileDownloadServiceFileDownload = {
  readonly methodName: string;
  readonly service: typeof FileDownloadService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_fileDownload_pb.FileDownloadRequest;
  readonly responseType: typeof model_fileDownload_pb.FileDownloadResponse;
};

export class FileDownloadService {
  static readonly serviceName: string;
  static readonly FileDownload: FileDownloadServiceFileDownload;
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

export class FileDownloadServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  fileDownload(
    requestMessage: model_fileDownload_pb.FileDownloadRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_fileDownload_pb.FileDownloadResponse|null) => void
  ): UnaryResponse;
  fileDownload(
    requestMessage: model_fileDownload_pb.FileDownloadRequest,
    callback: (error: ServiceError|null, responseMessage: model_fileDownload_pb.FileDownloadResponse|null) => void
  ): UnaryResponse;
}

