/**
 * @fileoverview gRPC-Web generated client stub for service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var model_transaction_pb = require('../model/transaction_pb.js')

var google_api_annotations_pb = require('../google/api/annotations_pb.js')
const proto = {};
proto.service = require('./transaction_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.service.TransactionServiceClient =
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
proto.service.TransactionServicePromiseClient =
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
 *   !proto.model.GetTransactionsRequest,
 *   !proto.model.GetTransactionsResponse>}
 */
const methodDescriptor_TransactionService_GetTransactions = new grpc.web.MethodDescriptor(
  '/service.TransactionService/GetTransactions',
  grpc.web.MethodType.UNARY,
  model_transaction_pb.GetTransactionsRequest,
  model_transaction_pb.GetTransactionsResponse,
  /** @param {!proto.model.GetTransactionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_transaction_pb.GetTransactionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.GetTransactionsRequest,
 *   !proto.model.GetTransactionsResponse>}
 */
const methodInfo_TransactionService_GetTransactions = new grpc.web.AbstractClientBase.MethodInfo(
  model_transaction_pb.GetTransactionsResponse,
  /** @param {!proto.model.GetTransactionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_transaction_pb.GetTransactionsResponse.deserializeBinary
);


/**
 * @param {!proto.model.GetTransactionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.GetTransactionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.GetTransactionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.TransactionServiceClient.prototype.getTransactions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.TransactionService/GetTransactions',
      request,
      metadata || {},
      methodDescriptor_TransactionService_GetTransactions,
      callback);
};


/**
 * @param {!proto.model.GetTransactionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.GetTransactionsResponse>}
 *     A native promise that resolves to the response
 */
proto.service.TransactionServicePromiseClient.prototype.getTransactions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.TransactionService/GetTransactions',
      request,
      metadata || {},
      methodDescriptor_TransactionService_GetTransactions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.GetTransactionRequest,
 *   !proto.model.Transaction>}
 */
const methodDescriptor_TransactionService_GetTransaction = new grpc.web.MethodDescriptor(
  '/service.TransactionService/GetTransaction',
  grpc.web.MethodType.UNARY,
  model_transaction_pb.GetTransactionRequest,
  model_transaction_pb.Transaction,
  /** @param {!proto.model.GetTransactionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_transaction_pb.Transaction.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.GetTransactionRequest,
 *   !proto.model.Transaction>}
 */
const methodInfo_TransactionService_GetTransaction = new grpc.web.AbstractClientBase.MethodInfo(
  model_transaction_pb.Transaction,
  /** @param {!proto.model.GetTransactionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_transaction_pb.Transaction.deserializeBinary
);


/**
 * @param {!proto.model.GetTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.Transaction)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.Transaction>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.TransactionServiceClient.prototype.getTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.TransactionService/GetTransaction',
      request,
      metadata || {},
      methodDescriptor_TransactionService_GetTransaction,
      callback);
};


/**
 * @param {!proto.model.GetTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.Transaction>}
 *     A native promise that resolves to the response
 */
proto.service.TransactionServicePromiseClient.prototype.getTransaction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.TransactionService/GetTransaction',
      request,
      metadata || {},
      methodDescriptor_TransactionService_GetTransaction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.PostTransactionRequest,
 *   !proto.model.PostTransactionResponse>}
 */
const methodDescriptor_TransactionService_PostTransaction = new grpc.web.MethodDescriptor(
  '/service.TransactionService/PostTransaction',
  grpc.web.MethodType.UNARY,
  model_transaction_pb.PostTransactionRequest,
  model_transaction_pb.PostTransactionResponse,
  /** @param {!proto.model.PostTransactionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_transaction_pb.PostTransactionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.PostTransactionRequest,
 *   !proto.model.PostTransactionResponse>}
 */
const methodInfo_TransactionService_PostTransaction = new grpc.web.AbstractClientBase.MethodInfo(
  model_transaction_pb.PostTransactionResponse,
  /** @param {!proto.model.PostTransactionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_transaction_pb.PostTransactionResponse.deserializeBinary
);


/**
 * @param {!proto.model.PostTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.PostTransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.PostTransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.TransactionServiceClient.prototype.postTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.TransactionService/PostTransaction',
      request,
      metadata || {},
      methodDescriptor_TransactionService_PostTransaction,
      callback);
};


/**
 * @param {!proto.model.PostTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.PostTransactionResponse>}
 *     A native promise that resolves to the response
 */
proto.service.TransactionServicePromiseClient.prototype.postTransaction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.TransactionService/PostTransaction',
      request,
      metadata || {},
      methodDescriptor_TransactionService_PostTransaction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.GetTransactionMinimumFeeRequest,
 *   !proto.model.GetTransactionMinimumFeeResponse>}
 */
const methodDescriptor_TransactionService_GetTransactionMinimumFee = new grpc.web.MethodDescriptor(
  '/service.TransactionService/GetTransactionMinimumFee',
  grpc.web.MethodType.UNARY,
  model_transaction_pb.GetTransactionMinimumFeeRequest,
  model_transaction_pb.GetTransactionMinimumFeeResponse,
  /** @param {!proto.model.GetTransactionMinimumFeeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_transaction_pb.GetTransactionMinimumFeeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.GetTransactionMinimumFeeRequest,
 *   !proto.model.GetTransactionMinimumFeeResponse>}
 */
const methodInfo_TransactionService_GetTransactionMinimumFee = new grpc.web.AbstractClientBase.MethodInfo(
  model_transaction_pb.GetTransactionMinimumFeeResponse,
  /** @param {!proto.model.GetTransactionMinimumFeeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_transaction_pb.GetTransactionMinimumFeeResponse.deserializeBinary
);


/**
 * @param {!proto.model.GetTransactionMinimumFeeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.GetTransactionMinimumFeeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.GetTransactionMinimumFeeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.TransactionServiceClient.prototype.getTransactionMinimumFee =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.TransactionService/GetTransactionMinimumFee',
      request,
      metadata || {},
      methodDescriptor_TransactionService_GetTransactionMinimumFee,
      callback);
};


/**
 * @param {!proto.model.GetTransactionMinimumFeeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.GetTransactionMinimumFeeResponse>}
 *     A native promise that resolves to the response
 */
proto.service.TransactionServicePromiseClient.prototype.getTransactionMinimumFee =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.TransactionService/GetTransactionMinimumFee',
      request,
      metadata || {},
      methodDescriptor_TransactionService_GetTransactionMinimumFee);
};


module.exports = proto.service;

