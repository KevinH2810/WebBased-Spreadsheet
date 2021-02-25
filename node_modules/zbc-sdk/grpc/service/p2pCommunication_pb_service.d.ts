// package: service
// file: service/p2pCommunication.proto

import * as service_p2pCommunication_pb from "../service/p2pCommunication_pb";
import * as model_peer_pb from "../model/peer_pb";
import * as model_empty_pb from "../model/empty_pb";
import * as model_block_pb from "../model/block_pb";
import * as model_blockchain_pb from "../model/blockchain_pb";
import * as model_transaction_pb from "../model/transaction_pb";
import * as model_fileDownload_pb from "../model/fileDownload_pb";
import * as model_nodeAddressInfo_pb from "../model/nodeAddressInfo_pb";
import * as model_proofOfOrigin_pb from "../model/proofOfOrigin_pb";
import {grpc} from "@improbable-eng/grpc-web";

type P2PCommunicationGetNodeAddressesInfo = {
  readonly methodName: string;
  readonly service: typeof P2PCommunication;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_nodeAddressInfo_pb.GetNodeAddressesInfoRequest;
  readonly responseType: typeof model_nodeAddressInfo_pb.GetNodeAddressesInfoResponse;
};

type P2PCommunicationSendNodeAddressInfo = {
  readonly methodName: string;
  readonly service: typeof P2PCommunication;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_nodeAddressInfo_pb.SendNodeAddressInfoRequest;
  readonly responseType: typeof model_empty_pb.Empty;
};

type P2PCommunicationGetNodeProofOfOrigin = {
  readonly methodName: string;
  readonly service: typeof P2PCommunication;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_proofOfOrigin_pb.GetNodeProofOfOriginRequest;
  readonly responseType: typeof model_proofOfOrigin_pb.ProofOfOrigin;
};

type P2PCommunicationGetPeerInfo = {
  readonly methodName: string;
  readonly service: typeof P2PCommunication;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_peer_pb.GetPeerInfoRequest;
  readonly responseType: typeof model_peer_pb.GetPeerInfoResponse;
};

type P2PCommunicationGetMorePeers = {
  readonly methodName: string;
  readonly service: typeof P2PCommunication;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_empty_pb.Empty;
  readonly responseType: typeof model_peer_pb.GetMorePeersResponse;
};

type P2PCommunicationSendPeers = {
  readonly methodName: string;
  readonly service: typeof P2PCommunication;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_peer_pb.SendPeersRequest;
  readonly responseType: typeof model_empty_pb.Empty;
};

type P2PCommunicationSendBlock = {
  readonly methodName: string;
  readonly service: typeof P2PCommunication;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_block_pb.SendBlockRequest;
  readonly responseType: typeof model_block_pb.SendBlockResponse;
};

type P2PCommunicationSendTransaction = {
  readonly methodName: string;
  readonly service: typeof P2PCommunication;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_transaction_pb.SendTransactionRequest;
  readonly responseType: typeof model_transaction_pb.SendTransactionResponse;
};

type P2PCommunicationSendBlockTransactions = {
  readonly methodName: string;
  readonly service: typeof P2PCommunication;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_transaction_pb.SendBlockTransactionsRequest;
  readonly responseType: typeof model_transaction_pb.SendBlockTransactionsResponse;
};

type P2PCommunicationRequestBlockTransactions = {
  readonly methodName: string;
  readonly service: typeof P2PCommunication;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_transaction_pb.RequestBlockTransactionsRequest;
  readonly responseType: typeof model_empty_pb.Empty;
};

type P2PCommunicationGetCumulativeDifficulty = {
  readonly methodName: string;
  readonly service: typeof P2PCommunication;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_blockchain_pb.GetCumulativeDifficultyRequest;
  readonly responseType: typeof model_blockchain_pb.GetCumulativeDifficultyResponse;
};

type P2PCommunicationGetCommonMilestoneBlockIDs = {
  readonly methodName: string;
  readonly service: typeof P2PCommunication;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_blockchain_pb.GetCommonMilestoneBlockIdsRequest;
  readonly responseType: typeof model_blockchain_pb.GetCommonMilestoneBlockIdsResponse;
};

type P2PCommunicationGetNextBlockIDs = {
  readonly methodName: string;
  readonly service: typeof P2PCommunication;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_block_pb.GetNextBlockIdsRequest;
  readonly responseType: typeof model_block_pb.BlockIdsResponse;
};

type P2PCommunicationGetNextBlocks = {
  readonly methodName: string;
  readonly service: typeof P2PCommunication;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_block_pb.GetNextBlocksRequest;
  readonly responseType: typeof model_block_pb.BlocksData;
};

type P2PCommunicationRequestFileDownload = {
  readonly methodName: string;
  readonly service: typeof P2PCommunication;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof model_fileDownload_pb.FileDownloadRequest;
  readonly responseType: typeof model_fileDownload_pb.FileDownloadResponse;
};

export class P2PCommunication {
  static readonly serviceName: string;
  static readonly GetNodeAddressesInfo: P2PCommunicationGetNodeAddressesInfo;
  static readonly SendNodeAddressInfo: P2PCommunicationSendNodeAddressInfo;
  static readonly GetNodeProofOfOrigin: P2PCommunicationGetNodeProofOfOrigin;
  static readonly GetPeerInfo: P2PCommunicationGetPeerInfo;
  static readonly GetMorePeers: P2PCommunicationGetMorePeers;
  static readonly SendPeers: P2PCommunicationSendPeers;
  static readonly SendBlock: P2PCommunicationSendBlock;
  static readonly SendTransaction: P2PCommunicationSendTransaction;
  static readonly SendBlockTransactions: P2PCommunicationSendBlockTransactions;
  static readonly RequestBlockTransactions: P2PCommunicationRequestBlockTransactions;
  static readonly GetCumulativeDifficulty: P2PCommunicationGetCumulativeDifficulty;
  static readonly GetCommonMilestoneBlockIDs: P2PCommunicationGetCommonMilestoneBlockIDs;
  static readonly GetNextBlockIDs: P2PCommunicationGetNextBlockIDs;
  static readonly GetNextBlocks: P2PCommunicationGetNextBlocks;
  static readonly RequestFileDownload: P2PCommunicationRequestFileDownload;
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

export class P2PCommunicationClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getNodeAddressesInfo(
    requestMessage: model_nodeAddressInfo_pb.GetNodeAddressesInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_nodeAddressInfo_pb.GetNodeAddressesInfoResponse|null) => void
  ): UnaryResponse;
  getNodeAddressesInfo(
    requestMessage: model_nodeAddressInfo_pb.GetNodeAddressesInfoRequest,
    callback: (error: ServiceError|null, responseMessage: model_nodeAddressInfo_pb.GetNodeAddressesInfoResponse|null) => void
  ): UnaryResponse;
  sendNodeAddressInfo(
    requestMessage: model_nodeAddressInfo_pb.SendNodeAddressInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_empty_pb.Empty|null) => void
  ): UnaryResponse;
  sendNodeAddressInfo(
    requestMessage: model_nodeAddressInfo_pb.SendNodeAddressInfoRequest,
    callback: (error: ServiceError|null, responseMessage: model_empty_pb.Empty|null) => void
  ): UnaryResponse;
  getNodeProofOfOrigin(
    requestMessage: model_proofOfOrigin_pb.GetNodeProofOfOriginRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_proofOfOrigin_pb.ProofOfOrigin|null) => void
  ): UnaryResponse;
  getNodeProofOfOrigin(
    requestMessage: model_proofOfOrigin_pb.GetNodeProofOfOriginRequest,
    callback: (error: ServiceError|null, responseMessage: model_proofOfOrigin_pb.ProofOfOrigin|null) => void
  ): UnaryResponse;
  getPeerInfo(
    requestMessage: model_peer_pb.GetPeerInfoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_peer_pb.GetPeerInfoResponse|null) => void
  ): UnaryResponse;
  getPeerInfo(
    requestMessage: model_peer_pb.GetPeerInfoRequest,
    callback: (error: ServiceError|null, responseMessage: model_peer_pb.GetPeerInfoResponse|null) => void
  ): UnaryResponse;
  getMorePeers(
    requestMessage: model_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_peer_pb.GetMorePeersResponse|null) => void
  ): UnaryResponse;
  getMorePeers(
    requestMessage: model_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: model_peer_pb.GetMorePeersResponse|null) => void
  ): UnaryResponse;
  sendPeers(
    requestMessage: model_peer_pb.SendPeersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_empty_pb.Empty|null) => void
  ): UnaryResponse;
  sendPeers(
    requestMessage: model_peer_pb.SendPeersRequest,
    callback: (error: ServiceError|null, responseMessage: model_empty_pb.Empty|null) => void
  ): UnaryResponse;
  sendBlock(
    requestMessage: model_block_pb.SendBlockRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_block_pb.SendBlockResponse|null) => void
  ): UnaryResponse;
  sendBlock(
    requestMessage: model_block_pb.SendBlockRequest,
    callback: (error: ServiceError|null, responseMessage: model_block_pb.SendBlockResponse|null) => void
  ): UnaryResponse;
  sendTransaction(
    requestMessage: model_transaction_pb.SendTransactionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_transaction_pb.SendTransactionResponse|null) => void
  ): UnaryResponse;
  sendTransaction(
    requestMessage: model_transaction_pb.SendTransactionRequest,
    callback: (error: ServiceError|null, responseMessage: model_transaction_pb.SendTransactionResponse|null) => void
  ): UnaryResponse;
  sendBlockTransactions(
    requestMessage: model_transaction_pb.SendBlockTransactionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_transaction_pb.SendBlockTransactionsResponse|null) => void
  ): UnaryResponse;
  sendBlockTransactions(
    requestMessage: model_transaction_pb.SendBlockTransactionsRequest,
    callback: (error: ServiceError|null, responseMessage: model_transaction_pb.SendBlockTransactionsResponse|null) => void
  ): UnaryResponse;
  requestBlockTransactions(
    requestMessage: model_transaction_pb.RequestBlockTransactionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_empty_pb.Empty|null) => void
  ): UnaryResponse;
  requestBlockTransactions(
    requestMessage: model_transaction_pb.RequestBlockTransactionsRequest,
    callback: (error: ServiceError|null, responseMessage: model_empty_pb.Empty|null) => void
  ): UnaryResponse;
  getCumulativeDifficulty(
    requestMessage: model_blockchain_pb.GetCumulativeDifficultyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_blockchain_pb.GetCumulativeDifficultyResponse|null) => void
  ): UnaryResponse;
  getCumulativeDifficulty(
    requestMessage: model_blockchain_pb.GetCumulativeDifficultyRequest,
    callback: (error: ServiceError|null, responseMessage: model_blockchain_pb.GetCumulativeDifficultyResponse|null) => void
  ): UnaryResponse;
  getCommonMilestoneBlockIDs(
    requestMessage: model_blockchain_pb.GetCommonMilestoneBlockIdsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_blockchain_pb.GetCommonMilestoneBlockIdsResponse|null) => void
  ): UnaryResponse;
  getCommonMilestoneBlockIDs(
    requestMessage: model_blockchain_pb.GetCommonMilestoneBlockIdsRequest,
    callback: (error: ServiceError|null, responseMessage: model_blockchain_pb.GetCommonMilestoneBlockIdsResponse|null) => void
  ): UnaryResponse;
  getNextBlockIDs(
    requestMessage: model_block_pb.GetNextBlockIdsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_block_pb.BlockIdsResponse|null) => void
  ): UnaryResponse;
  getNextBlockIDs(
    requestMessage: model_block_pb.GetNextBlockIdsRequest,
    callback: (error: ServiceError|null, responseMessage: model_block_pb.BlockIdsResponse|null) => void
  ): UnaryResponse;
  getNextBlocks(
    requestMessage: model_block_pb.GetNextBlocksRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_block_pb.BlocksData|null) => void
  ): UnaryResponse;
  getNextBlocks(
    requestMessage: model_block_pb.GetNextBlocksRequest,
    callback: (error: ServiceError|null, responseMessage: model_block_pb.BlocksData|null) => void
  ): UnaryResponse;
  requestFileDownload(
    requestMessage: model_fileDownload_pb.FileDownloadRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: model_fileDownload_pb.FileDownloadResponse|null) => void
  ): UnaryResponse;
  requestFileDownload(
    requestMessage: model_fileDownload_pb.FileDownloadRequest,
    callback: (error: ServiceError|null, responseMessage: model_fileDownload_pb.FileDownloadResponse|null) => void
  ): UnaryResponse;
}

