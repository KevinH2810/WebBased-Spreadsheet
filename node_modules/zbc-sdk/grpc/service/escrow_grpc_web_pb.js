/**
 * @fileoverview gRPC-Web generated client stub for service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var model_escrow_pb = require('../model/escrow_pb.js')

var google_api_annotations_pb = require('../google/api/annotations_pb.js')
const proto = {};
proto.service = require('./escrow_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.service.EscrowTransactionServiceClient =
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
proto.service.EscrowTransactionServicePromiseClient =
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
 *   !proto.model.GetEscrowTransactionsRequest,
 *   !proto.model.GetEscrowTransactionsResponse>}
 */
const methodDescriptor_EscrowTransactionService_GetEscrowTransactions = new grpc.web.MethodDescriptor(
  '/service.EscrowTransactionService/GetEscrowTransactions',
  grpc.web.MethodType.UNARY,
  model_escrow_pb.GetEscrowTransactionsRequest,
  model_escrow_pb.GetEscrowTransactionsResponse,
  /** @param {!proto.model.GetEscrowTransactionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_escrow_pb.GetEscrowTransactionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.GetEscrowTransactionsRequest,
 *   !proto.model.GetEscrowTransactionsResponse>}
 */
const methodInfo_EscrowTransactionService_GetEscrowTransactions = new grpc.web.AbstractClientBase.MethodInfo(
  model_escrow_pb.GetEscrowTransactionsResponse,
  /** @param {!proto.model.GetEscrowTransactionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_escrow_pb.GetEscrowTransactionsResponse.deserializeBinary
);


/**
 * @param {!proto.model.GetEscrowTransactionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.GetEscrowTransactionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.GetEscrowTransactionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.EscrowTransactionServiceClient.prototype.getEscrowTransactions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.EscrowTransactionService/GetEscrowTransactions',
      request,
      metadata || {},
      methodDescriptor_EscrowTransactionService_GetEscrowTransactions,
      callback);
};


/**
 * @param {!proto.model.GetEscrowTransactionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.GetEscrowTransactionsResponse>}
 *     A native promise that resolves to the response
 */
proto.service.EscrowTransactionServicePromiseClient.prototype.getEscrowTransactions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.EscrowTransactionService/GetEscrowTransactions',
      request,
      metadata || {},
      methodDescriptor_EscrowTransactionService_GetEscrowTransactions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.GetEscrowTransactionRequest,
 *   !proto.model.Escrow>}
 */
const methodDescriptor_EscrowTransactionService_GetEscrowTransaction = new grpc.web.MethodDescriptor(
  '/service.EscrowTransactionService/GetEscrowTransaction',
  grpc.web.MethodType.UNARY,
  model_escrow_pb.GetEscrowTransactionRequest,
  model_escrow_pb.Escrow,
  /** @param {!proto.model.GetEscrowTransactionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_escrow_pb.Escrow.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.GetEscrowTransactionRequest,
 *   !proto.model.Escrow>}
 */
const methodInfo_EscrowTransactionService_GetEscrowTransaction = new grpc.web.AbstractClientBase.MethodInfo(
  model_escrow_pb.Escrow,
  /** @param {!proto.model.GetEscrowTransactionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_escrow_pb.Escrow.deserializeBinary
);


/**
 * @param {!proto.model.GetEscrowTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.Escrow)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.Escrow>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.EscrowTransactionServiceClient.prototype.getEscrowTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.EscrowTransactionService/GetEscrowTransaction',
      request,
      metadata || {},
      methodDescriptor_EscrowTransactionService_GetEscrowTransaction,
      callback);
};


/**
 * @param {!proto.model.GetEscrowTransactionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.Escrow>}
 *     A native promise that resolves to the response
 */
proto.service.EscrowTransactionServicePromiseClient.prototype.getEscrowTransaction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.EscrowTransactionService/GetEscrowTransaction',
      request,
      metadata || {},
      methodDescriptor_EscrowTransactionService_GetEscrowTransaction);
};


module.exports = proto.service;

