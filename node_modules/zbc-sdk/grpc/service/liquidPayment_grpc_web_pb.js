/**
 * @fileoverview gRPC-Web generated client stub for service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var model_liquidPayment_pb = require('../model/liquidPayment_pb.js')

var google_api_annotations_pb = require('../google/api/annotations_pb.js')
const proto = {};
proto.service = require('./liquidPayment_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.service.LiquidPaymentServiceClient =
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
proto.service.LiquidPaymentServicePromiseClient =
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
 *   !proto.model.GetLiquidTransactionsRequest,
 *   !proto.model.GetLiquidTransactionsResponse>}
 */
const methodDescriptor_LiquidPaymentService_GetLiquidTransactions = new grpc.web.MethodDescriptor(
  '/service.LiquidPaymentService/GetLiquidTransactions',
  grpc.web.MethodType.UNARY,
  model_liquidPayment_pb.GetLiquidTransactionsRequest,
  model_liquidPayment_pb.GetLiquidTransactionsResponse,
  /** @param {!proto.model.GetLiquidTransactionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_liquidPayment_pb.GetLiquidTransactionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.GetLiquidTransactionsRequest,
 *   !proto.model.GetLiquidTransactionsResponse>}
 */
const methodInfo_LiquidPaymentService_GetLiquidTransactions = new grpc.web.AbstractClientBase.MethodInfo(
  model_liquidPayment_pb.GetLiquidTransactionsResponse,
  /** @param {!proto.model.GetLiquidTransactionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_liquidPayment_pb.GetLiquidTransactionsResponse.deserializeBinary
);


/**
 * @param {!proto.model.GetLiquidTransactionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.GetLiquidTransactionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.GetLiquidTransactionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.LiquidPaymentServiceClient.prototype.getLiquidTransactions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.LiquidPaymentService/GetLiquidTransactions',
      request,
      metadata || {},
      methodDescriptor_LiquidPaymentService_GetLiquidTransactions,
      callback);
};


/**
 * @param {!proto.model.GetLiquidTransactionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.GetLiquidTransactionsResponse>}
 *     A native promise that resolves to the response
 */
proto.service.LiquidPaymentServicePromiseClient.prototype.getLiquidTransactions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.LiquidPaymentService/GetLiquidTransactions',
      request,
      metadata || {},
      methodDescriptor_LiquidPaymentService_GetLiquidTransactions);
};


module.exports = proto.service;

