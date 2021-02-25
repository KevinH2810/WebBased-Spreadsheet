/**
 * @fileoverview gRPC-Web generated client stub for service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var model_peer_pb = require('../model/peer_pb.js')

var model_empty_pb = require('../model/empty_pb.js')

var model_block_pb = require('../model/block_pb.js')

var model_blockchain_pb = require('../model/blockchain_pb.js')

var model_transaction_pb = require('../model/transaction_pb.js')

var model_fileDownload_pb = require('../model/fileDownload_pb.js')

var model_nodeAddressInfo_pb = require('../model/nodeAddressInfo_pb.js')

var model_proofOfOrigin_pb = require('../model/proofOfOrigin_pb.js')
const proto = {};
proto.service = require('./p2pCommunication_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.service.P2PCommunicationClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.service.P2PCommunicationPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.GetNodeAddressesInfoRequest,
 *   !proto.model.GetNodeAddressesInfoResponse>}
 */
const methodDescriptor_P2PCommunication_GetNodeAddressesInfo = new grpc.web.MethodDescriptor(
  '/service.P2PCommunication/GetNodeAddressesInfo',
  grpc.web.MethodType.UNARY,
  model_nodeAddressInfo_pb.GetNodeAddressesInfoRequest,
  model_nodeAddressInfo_pb.GetNodeAddressesInfoResponse,
  /** @param {!proto.model.GetNodeAddressesInfoRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_nodeAddressInfo_pb.GetNodeAddressesInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.GetNodeAddressesInfoRequest,
 *   !proto.model.GetNodeAddressesInfoResponse>}
 */
const methodInfo_P2PCommunication_GetNodeAddressesInfo = new grpc.web.AbstractClientBase.MethodInfo(
  model_nodeAddressInfo_pb.GetNodeAddressesInfoResponse,
  /** @param {!proto.model.GetNodeAddressesInfoRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_nodeAddressInfo_pb.GetNodeAddressesInfoResponse.deserializeBinary
);


/**
 * @param {!proto.model.GetNodeAddressesInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.GetNodeAddressesInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.GetNodeAddressesInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.P2PCommunicationClient.prototype.getNodeAddressesInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.P2PCommunication/GetNodeAddressesInfo',
      request,
      metadata || {},
      methodDescriptor_P2PCommunication_GetNodeAddressesInfo,
      callback);
};


/**
 * @param {!proto.model.GetNodeAddressesInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.GetNodeAddressesInfoResponse>}
 *     A native promise that resolves to the response
 */
proto.service.P2PCommunicationPromiseClient.prototype.getNodeAddressesInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.P2PCommunication/GetNodeAddressesInfo',
      request,
      metadata || {},
      methodDescriptor_P2PCommunication_GetNodeAddressesInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.SendNodeAddressInfoRequest,
 *   !proto.model.Empty>}
 */
const methodDescriptor_P2PCommunication_SendNodeAddressInfo = new grpc.web.MethodDescriptor(
  '/service.P2PCommunication/SendNodeAddressInfo',
  grpc.web.MethodType.UNARY,
  model_nodeAddressInfo_pb.SendNodeAddressInfoRequest,
  model_empty_pb.Empty,
  /** @param {!proto.model.SendNodeAddressInfoRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.SendNodeAddressInfoRequest,
 *   !proto.model.Empty>}
 */
const methodInfo_P2PCommunication_SendNodeAddressInfo = new grpc.web.AbstractClientBase.MethodInfo(
  model_empty_pb.Empty,
  /** @param {!proto.model.SendNodeAddressInfoRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.model.SendNodeAddressInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.P2PCommunicationClient.prototype.sendNodeAddressInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.P2PCommunication/SendNodeAddressInfo',
      request,
      metadata || {},
      methodDescriptor_P2PCommunication_SendNodeAddressInfo,
      callback);
};


/**
 * @param {!proto.model.SendNodeAddressInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.Empty>}
 *     A native promise that resolves to the response
 */
proto.service.P2PCommunicationPromiseClient.prototype.sendNodeAddressInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.P2PCommunication/SendNodeAddressInfo',
      request,
      metadata || {},
      methodDescriptor_P2PCommunication_SendNodeAddressInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.GetNodeProofOfOriginRequest,
 *   !proto.model.ProofOfOrigin>}
 */
const methodDescriptor_P2PCommunication_GetNodeProofOfOrigin = new grpc.web.MethodDescriptor(
  '/service.P2PCommunication/GetNodeProofOfOrigin',
  grpc.web.MethodType.UNARY,
  model_proofOfOrigin_pb.GetNodeProofOfOriginRequest,
  model_proofOfOrigin_pb.ProofOfOrigin,
  /** @param {!proto.model.GetNodeProofOfOriginRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_proofOfOrigin_pb.ProofOfOrigin.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.GetNodeProofOfOriginRequest,
 *   !proto.model.ProofOfOrigin>}
 */
const methodInfo_P2PCommunication_GetNodeProofOfOrigin = new grpc.web.AbstractClientBase.MethodInfo(
  model_proofOfOrigin_pb.ProofOfOrigin,
  /** @param {!proto.model.GetNodeProofOfOriginRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_proofOfOrigin_pb.ProofOfOrigin.deserializeBinary
);


/**
 * @param {!proto.model.GetNodeProofOfOriginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.ProofOfOrigin)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.ProofOfOrigin>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.P2PCommunicationClient.prototype.getNodeProofOfOrigin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.P2PCommunication/GetNodeProofOfOrigin',
      request,
      metadata || {},
      methodDescriptor_P2PCommunication_GetNodeProofOfOrigin,
      callback);
};


/**
 * @param {!proto.model.GetNodeProofOfOriginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.ProofOfOrigin>}
 *     A native promise that resolves to the response
 */
proto.service.P2PCommunicationPromiseClient.prototype.getNodeProofOfOrigin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.P2PCommunication/GetNodeProofOfOrigin',
      request,
      metadata || {},
      methodDescriptor_P2PCommunication_GetNodeProofOfOrigin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.GetPeerInfoRequest,
 *   !proto.model.GetPeerInfoResponse>}
 */
const methodDescriptor_P2PCommunication_GetPeerInfo = new grpc.web.MethodDescriptor(
  '/service.P2PCommunication/GetPeerInfo',
  grpc.web.MethodType.UNARY,
  model_peer_pb.GetPeerInfoRequest,
  model_peer_pb.GetPeerInfoResponse,
  /** @param {!proto.model.GetPeerInfoRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_peer_pb.GetPeerInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.GetPeerInfoRequest,
 *   !proto.model.GetPeerInfoResponse>}
 */
const methodInfo_P2PCommunication_GetPeerInfo = new grpc.web.AbstractClientBase.MethodInfo(
  model_peer_pb.GetPeerInfoResponse,
  /** @param {!proto.model.GetPeerInfoRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_peer_pb.GetPeerInfoResponse.deserializeBinary
);


/**
 * @param {!proto.model.GetPeerInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.GetPeerInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.GetPeerInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.P2PCommunicationClient.prototype.getPeerInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.P2PCommunication/GetPeerInfo',
      request,
      metadata || {},
      methodDescriptor_P2PCommunication_GetPeerInfo,
      callback);
};


/**
 * @param {!proto.model.GetPeerInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.GetPeerInfoResponse>}
 *     A native promise that resolves to the response
 */
proto.service.P2PCommunicationPromiseClient.prototype.getPeerInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.P2PCommunication/GetPeerInfo',
      request,
      metadata || {},
      methodDescriptor_P2PCommunication_GetPeerInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.Empty,
 *   !proto.model.GetMorePeersResponse>}
 */
const methodDescriptor_P2PCommunication_GetMorePeers = new grpc.web.MethodDescriptor(
  '/service.P2PCommunication/GetMorePeers',
  grpc.web.MethodType.UNARY,
  model_empty_pb.Empty,
  model_peer_pb.GetMorePeersResponse,
  /** @param {!proto.model.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  model_peer_pb.GetMorePeersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.Empty,
 *   !proto.model.GetMorePeersResponse>}
 */
const methodInfo_P2PCommunication_GetMorePeers = new grpc.web.AbstractClientBase.MethodInfo(
  model_peer_pb.GetMorePeersResponse,
  /** @param {!proto.model.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  model_peer_pb.GetMorePeersResponse.deserializeBinary
);


/**
 * @param {!proto.model.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.GetMorePeersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.GetMorePeersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.P2PCommunicationClient.prototype.getMorePeers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.P2PCommunication/GetMorePeers',
      request,
      metadata || {},
      methodDescriptor_P2PCommunication_GetMorePeers,
      callback);
};


/**
 * @param {!proto.model.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.GetMorePeersResponse>}
 *     A native promise that resolves to the response
 */
proto.service.P2PCommunicationPromiseClient.prototype.getMorePeers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.P2PCommunication/GetMorePeers',
      request,
      metadata || {},
      methodDescriptor_P2PCommunication_GetMorePeers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.SendPeersRequest,
 *   !proto.model.Empty>}
 */
const methodDescriptor_P2PCommunication_SendPeers = new grpc.web.MethodDescriptor(
  '/service.P2PCommunication/SendPeers',
  grpc.web.MethodType.UNARY,
  model_peer_pb.SendPeersRequest,
  model_empty_pb.Empty,
  /** @param {!proto.model.SendPeersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.SendPeersRequest,
 *   !proto.model.Empty>}
 */
const methodInfo_P2PCommunication_SendPeers = new grpc.web.AbstractClientBase.MethodInfo(
  model_empty_pb.Empty,
  /** @param {!proto.model.SendPeersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.model.SendPeersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.P2PCommunicationClient.prototype.sendPeers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.P2PCommunication/SendPeers',
      request,
      metadata || {},
      methodDescriptor_P2PCommunication_SendPeers,
      callback);
};


/**
 * @param {!proto.model.SendPeersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.Empty>}
 *     A native promise that resolves to the response
 */
proto.service.P2PCommunicationPromiseClient.prototype.sendPeers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.P2PCommunication/SendPeers',
      request,
      metadata || {},
      methodDescriptor_P2PCommunication_SendPeers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.SendBlockRequest,
 *   !proto.model.SendBlockResponse>}
 */
const methodDescriptor_P2PCommunication_SendBlock = new grpc.web.MethodDescriptor(
  '/service.P2PCommunication/SendBlock',
  grpc.web.MethodType.UNARY,
  model_block_pb.SendBlockRequest,
  model_block_pb.SendBlockResponse,
  /** @param {!proto.model.SendBlockRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_block_pb.SendBlockResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.SendBlockRequest,
 *   !proto.model.SendBlockResponse>}
 */
const methodInfo_P2PCommunication_SendBlock = new grpc.web.AbstractClientBase.MethodInfo(
  model_block_pb.SendBlockResponse,
  /** @param {!proto.model.SendBlockRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_block_pb.SendBlockResponse.deserializeBinary
);


/**
 * @param {!proto.model.SendBlockRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.SendBlockResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.SendBlockResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.P2PCommunicationClient.prototype.sendBlock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.P2PCommunication/SendBlock',
      request,
      metadata || {},
      methodDescriptor_P2PCommunication_SendBlock,
      callback);
};


/**
 * @param {!proto.model.SendBlockRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.SendBlockResponse>}
 *     A native promise that resolves to the response
 */
proto.service.P2PCommunicationPromiseClient.prototype.sendBlock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.P2PCommunication/SendBlock',
      request,
      metadata || {},
      methodDescriptor_P2PCommunication_SendBlock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.SendTransactionRequest,
 *   !proto.model.SendTransactionResponse>}
 */
const methodDescriptor_P2PCommunication_SendTransaction = new grpc.web.MethodDescriptor(
  '/service.P2PCommunication/SendTransaction',
  grpc.web.MethodType.UNARY,
  model_transaction_pb.SendTransactionRequest,
  model_transaction_pb.SendTransactionResponse,
  /** @param {!proto.model.SendTransactionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_transaction_pb.SendTransactionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.SendTransactionRequest,
 *   !proto.model.SendTransactionResponse>}
 */
const methodInfo_P2PCommunication_SendTransaction = new grpc.web.AbstractClientBase.MethodInfo(
  model_transaction_pb.SendTransactionResponse,
  /** @param {!proto.model.SendTransactionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_transaction_pb.SendTransactionResponse.deserializeBinary
);


/**
 * @param {!proto.model.SendTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.SendTransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.SendTransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.P2PCommunicationClient.prototype.sendTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.P2PCommunication/SendTransaction',
      request,
      metadata || {},
      methodDescriptor_P2PCommunication_SendTransaction,
      callback);
};


/**
 * @param {!proto.model.SendTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.SendTransactionResponse>}
 *     A native promise that resolves to the response
 */
proto.service.P2PCommunicationPromiseClient.prototype.sendTransaction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.P2PCommunication/SendTransaction',
      request,
      metadata || {},
      methodDescriptor_P2PCommunication_SendTransaction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.SendBlockTransactionsRequest,
 *   !proto.model.SendBlockTransactionsResponse>}
 */
const methodDescriptor_P2PCommunication_SendBlockTransactions = new grpc.web.MethodDescriptor(
  '/service.P2PCommunication/SendBlockTransactions',
  grpc.web.MethodType.UNARY,
  model_transaction_pb.SendBlockTransactionsRequest,
  model_transaction_pb.SendBlockTransactionsResponse,
  /** @param {!proto.model.SendBlockTransactionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_transaction_pb.SendBlockTransactionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.SendBlockTransactionsRequest,
 *   !proto.model.SendBlockTransactionsResponse>}
 */
const methodInfo_P2PCommunication_SendBlockTransactions = new grpc.web.AbstractClientBase.MethodInfo(
  model_transaction_pb.SendBlockTransactionsResponse,
  /** @param {!proto.model.SendBlockTransactionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_transaction_pb.SendBlockTransactionsResponse.deserializeBinary
);


/**
 * @param {!proto.model.SendBlockTransactionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.SendBlockTransactionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.SendBlockTransactionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.P2PCommunicationClient.prototype.sendBlockTransactions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.P2PCommunication/SendBlockTransactions',
      request,
      metadata || {},
      methodDescriptor_P2PCommunication_SendBlockTransactions,
      callback);
};


/**
 * @param {!proto.model.SendBlockTransactionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.SendBlockTransactionsResponse>}
 *     A native promise that resolves to the response
 */
proto.service.P2PCommunicationPromiseClient.prototype.sendBlockTransactions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.P2PCommunication/SendBlockTransactions',
      request,
      metadata || {},
      methodDescriptor_P2PCommunication_SendBlockTransactions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.RequestBlockTransactionsRequest,
 *   !proto.model.Empty>}
 */
const methodDescriptor_P2PCommunication_RequestBlockTransactions = new grpc.web.MethodDescriptor(
  '/service.P2PCommunication/RequestBlockTransactions',
  grpc.web.MethodType.UNARY,
  model_transaction_pb.RequestBlockTransactionsRequest,
  model_empty_pb.Empty,
  /** @param {!proto.model.RequestBlockTransactionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.RequestBlockTransactionsRequest,
 *   !proto.model.Empty>}
 */
const methodInfo_P2PCommunication_RequestBlockTransactions = new grpc.web.AbstractClientBase.MethodInfo(
  model_empty_pb.Empty,
  /** @param {!proto.model.RequestBlockTransactionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.model.RequestBlockTransactionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.P2PCommunicationClient.prototype.requestBlockTransactions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.P2PCommunication/RequestBlockTransactions',
      request,
      metadata || {},
      methodDescriptor_P2PCommunication_RequestBlockTransactions,
      callback);
};


/**
 * @param {!proto.model.RequestBlockTransactionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.Empty>}
 *     A native promise that resolves to the response
 */
proto.service.P2PCommunicationPromiseClient.prototype.requestBlockTransactions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.P2PCommunication/RequestBlockTransactions',
      request,
      metadata || {},
      methodDescriptor_P2PCommunication_RequestBlockTransactions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.GetCumulativeDifficultyRequest,
 *   !proto.model.GetCumulativeDifficultyResponse>}
 */
const methodDescriptor_P2PCommunication_GetCumulativeDifficulty = new grpc.web.MethodDescriptor(
  '/service.P2PCommunication/GetCumulativeDifficulty',
  grpc.web.MethodType.UNARY,
  model_blockchain_pb.GetCumulativeDifficultyRequest,
  model_blockchain_pb.GetCumulativeDifficultyResponse,
  /** @param {!proto.model.GetCumulativeDifficultyRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_blockchain_pb.GetCumulativeDifficultyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.GetCumulativeDifficultyRequest,
 *   !proto.model.GetCumulativeDifficultyResponse>}
 */
const methodInfo_P2PCommunication_GetCumulativeDifficulty = new grpc.web.AbstractClientBase.MethodInfo(
  model_blockchain_pb.GetCumulativeDifficultyResponse,
  /** @param {!proto.model.GetCumulativeDifficultyRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_blockchain_pb.GetCumulativeDifficultyResponse.deserializeBinary
);


/**
 * @param {!proto.model.GetCumulativeDifficultyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.GetCumulativeDifficultyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.GetCumulativeDifficultyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.P2PCommunicationClient.prototype.getCumulativeDifficulty =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.P2PCommunication/GetCumulativeDifficulty',
      request,
      metadata || {},
      methodDescriptor_P2PCommunication_GetCumulativeDifficulty,
      callback);
};


/**
 * @param {!proto.model.GetCumulativeDifficultyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.GetCumulativeDifficultyResponse>}
 *     A native promise that resolves to the response
 */
proto.service.P2PCommunicationPromiseClient.prototype.getCumulativeDifficulty =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.P2PCommunication/GetCumulativeDifficulty',
      request,
      metadata || {},
      methodDescriptor_P2PCommunication_GetCumulativeDifficulty);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.GetCommonMilestoneBlockIdsRequest,
 *   !proto.model.GetCommonMilestoneBlockIdsResponse>}
 */
const methodDescriptor_P2PCommunication_GetCommonMilestoneBlockIDs = new grpc.web.MethodDescriptor(
  '/service.P2PCommunication/GetCommonMilestoneBlockIDs',
  grpc.web.MethodType.UNARY,
  model_blockchain_pb.GetCommonMilestoneBlockIdsRequest,
  model_blockchain_pb.GetCommonMilestoneBlockIdsResponse,
  /** @param {!proto.model.GetCommonMilestoneBlockIdsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_blockchain_pb.GetCommonMilestoneBlockIdsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.GetCommonMilestoneBlockIdsRequest,
 *   !proto.model.GetCommonMilestoneBlockIdsResponse>}
 */
const methodInfo_P2PCommunication_GetCommonMilestoneBlockIDs = new grpc.web.AbstractClientBase.MethodInfo(
  model_blockchain_pb.GetCommonMilestoneBlockIdsResponse,
  /** @param {!proto.model.GetCommonMilestoneBlockIdsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_blockchain_pb.GetCommonMilestoneBlockIdsResponse.deserializeBinary
);


/**
 * @param {!proto.model.GetCommonMilestoneBlockIdsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.GetCommonMilestoneBlockIdsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.GetCommonMilestoneBlockIdsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.P2PCommunicationClient.prototype.getCommonMilestoneBlockIDs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.P2PCommunication/GetCommonMilestoneBlockIDs',
      request,
      metadata || {},
      methodDescriptor_P2PCommunication_GetCommonMilestoneBlockIDs,
      callback);
};


/**
 * @param {!proto.model.GetCommonMilestoneBlockIdsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.GetCommonMilestoneBlockIdsResponse>}
 *     A native promise that resolves to the response
 */
proto.service.P2PCommunicationPromiseClient.prototype.getCommonMilestoneBlockIDs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.P2PCommunication/GetCommonMilestoneBlockIDs',
      request,
      metadata || {},
      methodDescriptor_P2PCommunication_GetCommonMilestoneBlockIDs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.GetNextBlockIdsRequest,
 *   !proto.model.BlockIdsResponse>}
 */
const methodDescriptor_P2PCommunication_GetNextBlockIDs = new grpc.web.MethodDescriptor(
  '/service.P2PCommunication/GetNextBlockIDs',
  grpc.web.MethodType.UNARY,
  model_block_pb.GetNextBlockIdsRequest,
  model_block_pb.BlockIdsResponse,
  /** @param {!proto.model.GetNextBlockIdsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_block_pb.BlockIdsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.GetNextBlockIdsRequest,
 *   !proto.model.BlockIdsResponse>}
 */
const methodInfo_P2PCommunication_GetNextBlockIDs = new grpc.web.AbstractClientBase.MethodInfo(
  model_block_pb.BlockIdsResponse,
  /** @param {!proto.model.GetNextBlockIdsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_block_pb.BlockIdsResponse.deserializeBinary
);


/**
 * @param {!proto.model.GetNextBlockIdsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.BlockIdsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.BlockIdsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.P2PCommunicationClient.prototype.getNextBlockIDs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.P2PCommunication/GetNextBlockIDs',
      request,
      metadata || {},
      methodDescriptor_P2PCommunication_GetNextBlockIDs,
      callback);
};


/**
 * @param {!proto.model.GetNextBlockIdsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.BlockIdsResponse>}
 *     A native promise that resolves to the response
 */
proto.service.P2PCommunicationPromiseClient.prototype.getNextBlockIDs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.P2PCommunication/GetNextBlockIDs',
      request,
      metadata || {},
      methodDescriptor_P2PCommunication_GetNextBlockIDs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.GetNextBlocksRequest,
 *   !proto.model.BlocksData>}
 */
const methodDescriptor_P2PCommunication_GetNextBlocks = new grpc.web.MethodDescriptor(
  '/service.P2PCommunication/GetNextBlocks',
  grpc.web.MethodType.UNARY,
  model_block_pb.GetNextBlocksRequest,
  model_block_pb.BlocksData,
  /** @param {!proto.model.GetNextBlocksRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_block_pb.BlocksData.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.GetNextBlocksRequest,
 *   !proto.model.BlocksData>}
 */
const methodInfo_P2PCommunication_GetNextBlocks = new grpc.web.AbstractClientBase.MethodInfo(
  model_block_pb.BlocksData,
  /** @param {!proto.model.GetNextBlocksRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_block_pb.BlocksData.deserializeBinary
);


/**
 * @param {!proto.model.GetNextBlocksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.BlocksData)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.BlocksData>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.P2PCommunicationClient.prototype.getNextBlocks =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.P2PCommunication/GetNextBlocks',
      request,
      metadata || {},
      methodDescriptor_P2PCommunication_GetNextBlocks,
      callback);
};


/**
 * @param {!proto.model.GetNextBlocksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.BlocksData>}
 *     A native promise that resolves to the response
 */
proto.service.P2PCommunicationPromiseClient.prototype.getNextBlocks =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.P2PCommunication/GetNextBlocks',
      request,
      metadata || {},
      methodDescriptor_P2PCommunication_GetNextBlocks);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.FileDownloadRequest,
 *   !proto.model.FileDownloadResponse>}
 */
const methodDescriptor_P2PCommunication_RequestFileDownload = new grpc.web.MethodDescriptor(
  '/service.P2PCommunication/RequestFileDownload',
  grpc.web.MethodType.UNARY,
  model_fileDownload_pb.FileDownloadRequest,
  model_fileDownload_pb.FileDownloadResponse,
  /** @param {!proto.model.FileDownloadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_fileDownload_pb.FileDownloadResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.FileDownloadRequest,
 *   !proto.model.FileDownloadResponse>}
 */
const methodInfo_P2PCommunication_RequestFileDownload = new grpc.web.AbstractClientBase.MethodInfo(
  model_fileDownload_pb.FileDownloadResponse,
  /** @param {!proto.model.FileDownloadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_fileDownload_pb.FileDownloadResponse.deserializeBinary
);


/**
 * @param {!proto.model.FileDownloadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.FileDownloadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.FileDownloadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.P2PCommunicationClient.prototype.requestFileDownload =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.P2PCommunication/RequestFileDownload',
      request,
      metadata || {},
      methodDescriptor_P2PCommunication_RequestFileDownload,
      callback);
};


/**
 * @param {!proto.model.FileDownloadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.FileDownloadResponse>}
 *     A native promise that resolves to the response
 */
proto.service.P2PCommunicationPromiseClient.prototype.requestFileDownload =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.P2PCommunication/RequestFileDownload',
      request,
      metadata || {},
      methodDescriptor_P2PCommunication_RequestFileDownload);
};


module.exports = proto.service;

