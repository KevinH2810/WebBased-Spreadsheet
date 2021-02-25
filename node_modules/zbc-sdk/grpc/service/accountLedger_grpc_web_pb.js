/**
 * @fileoverview gRPC-Web generated client stub for service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var model_accountLedger_pb = require('../model/accountLedger_pb.js')

var google_api_annotations_pb = require('../google/api/annotations_pb.js')
const proto = {};
proto.service = require('./accountLedger_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.service.AccountLedgerServiceClient =
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
proto.service.AccountLedgerServicePromiseClient =
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
 *   !proto.model.GetAccountLedgersRequest,
 *   !proto.model.GetAccountLedgersResponse>}
 */
const methodDescriptor_AccountLedgerService_GetAccountLedgers = new grpc.web.MethodDescriptor(
  '/service.AccountLedgerService/GetAccountLedgers',
  grpc.web.MethodType.UNARY,
  model_accountLedger_pb.GetAccountLedgersRequest,
  model_accountLedger_pb.GetAccountLedgersResponse,
  /** @param {!proto.model.GetAccountLedgersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_accountLedger_pb.GetAccountLedgersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.GetAccountLedgersRequest,
 *   !proto.model.GetAccountLedgersResponse>}
 */
const methodInfo_AccountLedgerService_GetAccountLedgers = new grpc.web.AbstractClientBase.MethodInfo(
  model_accountLedger_pb.GetAccountLedgersResponse,
  /** @param {!proto.model.GetAccountLedgersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_accountLedger_pb.GetAccountLedgersResponse.deserializeBinary
);


/**
 * @param {!proto.model.GetAccountLedgersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.GetAccountLedgersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.GetAccountLedgersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.AccountLedgerServiceClient.prototype.getAccountLedgers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.AccountLedgerService/GetAccountLedgers',
      request,
      metadata || {},
      methodDescriptor_AccountLedgerService_GetAccountLedgers,
      callback);
};


/**
 * @param {!proto.model.GetAccountLedgersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.GetAccountLedgersResponse>}
 *     A native promise that resolves to the response
 */
proto.service.AccountLedgerServicePromiseClient.prototype.getAccountLedgers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.AccountLedgerService/GetAccountLedgers',
      request,
      metadata || {},
      methodDescriptor_AccountLedgerService_GetAccountLedgers);
};


module.exports = proto.service;

