/**
 * @fileoverview gRPC-Web generated client stub for service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var model_mempool_pb = require('../model/mempool_pb.js')

var google_api_annotations_pb = require('../google/api/annotations_pb.js')
const proto = {};
proto.service = require('./mempool_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.service.MempoolServiceClient =
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
proto.service.MempoolServicePromiseClient =
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
 *   !proto.model.GetMempoolTransactionsRequest,
 *   !proto.model.GetMempoolTransactionsResponse>}
 */
const methodDescriptor_MempoolService_GetMempoolTransactions = new grpc.web.MethodDescriptor(
  '/service.MempoolService/GetMempoolTransactions',
  grpc.web.MethodType.UNARY,
  model_mempool_pb.GetMempoolTransactionsRequest,
  model_mempool_pb.GetMempoolTransactionsResponse,
  /** @param {!proto.model.GetMempoolTransactionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_mempool_pb.GetMempoolTransactionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.GetMempoolTransactionsRequest,
 *   !proto.model.GetMempoolTransactionsResponse>}
 */
const methodInfo_MempoolService_GetMempoolTransactions = new grpc.web.AbstractClientBase.MethodInfo(
  model_mempool_pb.GetMempoolTransactionsResponse,
  /** @param {!proto.model.GetMempoolTransactionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_mempool_pb.GetMempoolTransactionsResponse.deserializeBinary
);


/**
 * @param {!proto.model.GetMempoolTransactionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.GetMempoolTransactionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.GetMempoolTransactionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.MempoolServiceClient.prototype.getMempoolTransactions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.MempoolService/GetMempoolTransactions',
      request,
      metadata || {},
      methodDescriptor_MempoolService_GetMempoolTransactions,
      callback);
};


/**
 * @param {!proto.model.GetMempoolTransactionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.GetMempoolTransactionsResponse>}
 *     A native promise that resolves to the response
 */
proto.service.MempoolServicePromiseClient.prototype.getMempoolTransactions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.MempoolService/GetMempoolTransactions',
      request,
      metadata || {},
      methodDescriptor_MempoolService_GetMempoolTransactions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.GetMempoolTransactionRequest,
 *   !proto.model.GetMempoolTransactionResponse>}
 */
const methodDescriptor_MempoolService_GetMempoolTransaction = new grpc.web.MethodDescriptor(
  '/service.MempoolService/GetMempoolTransaction',
  grpc.web.MethodType.UNARY,
  model_mempool_pb.GetMempoolTransactionRequest,
  model_mempool_pb.GetMempoolTransactionResponse,
  /** @param {!proto.model.GetMempoolTransactionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_mempool_pb.GetMempoolTransactionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.GetMempoolTransactionRequest,
 *   !proto.model.GetMempoolTransactionResponse>}
 */
const methodInfo_MempoolService_GetMempoolTransaction = new grpc.web.AbstractClientBase.MethodInfo(
  model_mempool_pb.GetMempoolTransactionResponse,
  /** @param {!proto.model.GetMempoolTransactionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_mempool_pb.GetMempoolTransactionResponse.deserializeBinary
);


/**
 * @param {!proto.model.GetMempoolTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.GetMempoolTransactionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.GetMempoolTransactionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.MempoolServiceClient.prototype.getMempoolTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.MempoolService/GetMempoolTransaction',
      request,
      metadata || {},
      methodDescriptor_MempoolService_GetMempoolTransaction,
      callback);
};


/**
 * @param {!proto.model.GetMempoolTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.GetMempoolTransactionResponse>}
 *     A native promise that resolves to the response
 */
proto.service.MempoolServicePromiseClient.prototype.getMempoolTransaction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.MempoolService/GetMempoolTransaction',
      request,
      metadata || {},
      methodDescriptor_MempoolService_GetMempoolTransaction);
};


module.exports = proto.service;

