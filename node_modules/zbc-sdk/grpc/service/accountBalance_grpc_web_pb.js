/**
 * @fileoverview gRPC-Web generated client stub for service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var model_accountBalance_pb = require('../model/accountBalance_pb.js')

var google_api_annotations_pb = require('../google/api/annotations_pb.js')
const proto = {};
proto.service = require('./accountBalance_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.service.AccountBalanceServiceClient =
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
proto.service.AccountBalanceServicePromiseClient =
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
 *   !proto.model.GetAccountBalancesRequest,
 *   !proto.model.GetAccountBalancesResponse>}
 */
const methodDescriptor_AccountBalanceService_GetAccountBalances = new grpc.web.MethodDescriptor(
  '/service.AccountBalanceService/GetAccountBalances',
  grpc.web.MethodType.UNARY,
  model_accountBalance_pb.GetAccountBalancesRequest,
  model_accountBalance_pb.GetAccountBalancesResponse,
  /** @param {!proto.model.GetAccountBalancesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_accountBalance_pb.GetAccountBalancesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.GetAccountBalancesRequest,
 *   !proto.model.GetAccountBalancesResponse>}
 */
const methodInfo_AccountBalanceService_GetAccountBalances = new grpc.web.AbstractClientBase.MethodInfo(
  model_accountBalance_pb.GetAccountBalancesResponse,
  /** @param {!proto.model.GetAccountBalancesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_accountBalance_pb.GetAccountBalancesResponse.deserializeBinary
);


/**
 * @param {!proto.model.GetAccountBalancesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.GetAccountBalancesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.GetAccountBalancesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.AccountBalanceServiceClient.prototype.getAccountBalances =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.AccountBalanceService/GetAccountBalances',
      request,
      metadata || {},
      methodDescriptor_AccountBalanceService_GetAccountBalances,
      callback);
};


/**
 * @param {!proto.model.GetAccountBalancesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.GetAccountBalancesResponse>}
 *     A native promise that resolves to the response
 */
proto.service.AccountBalanceServicePromiseClient.prototype.getAccountBalances =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.AccountBalanceService/GetAccountBalances',
      request,
      metadata || {},
      methodDescriptor_AccountBalanceService_GetAccountBalances);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.GetAccountBalanceRequest,
 *   !proto.model.GetAccountBalanceResponse>}
 */
const methodDescriptor_AccountBalanceService_GetAccountBalance = new grpc.web.MethodDescriptor(
  '/service.AccountBalanceService/GetAccountBalance',
  grpc.web.MethodType.UNARY,
  model_accountBalance_pb.GetAccountBalanceRequest,
  model_accountBalance_pb.GetAccountBalanceResponse,
  /** @param {!proto.model.GetAccountBalanceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_accountBalance_pb.GetAccountBalanceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.GetAccountBalanceRequest,
 *   !proto.model.GetAccountBalanceResponse>}
 */
const methodInfo_AccountBalanceService_GetAccountBalance = new grpc.web.AbstractClientBase.MethodInfo(
  model_accountBalance_pb.GetAccountBalanceResponse,
  /** @param {!proto.model.GetAccountBalanceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_accountBalance_pb.GetAccountBalanceResponse.deserializeBinary
);


/**
 * @param {!proto.model.GetAccountBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.GetAccountBalanceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.GetAccountBalanceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.AccountBalanceServiceClient.prototype.getAccountBalance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.AccountBalanceService/GetAccountBalance',
      request,
      metadata || {},
      methodDescriptor_AccountBalanceService_GetAccountBalance,
      callback);
};


/**
 * @param {!proto.model.GetAccountBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.GetAccountBalanceResponse>}
 *     A native promise that resolves to the response
 */
proto.service.AccountBalanceServicePromiseClient.prototype.getAccountBalance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.AccountBalanceService/GetAccountBalance',
      request,
      metadata || {},
      methodDescriptor_AccountBalanceService_GetAccountBalance);
};


module.exports = proto.service;

