/**
 * @fileoverview gRPC-Web generated client stub for service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var model_empty_pb = require('../model/empty_pb.js')

var model_healthCheck_pb = require('../model/healthCheck_pb.js')

var google_api_annotations_pb = require('../google/api/annotations_pb.js')
const proto = {};
proto.service = require('./healthCheck_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.service.HealthCheckServiceClient =
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
proto.service.HealthCheckServicePromiseClient =
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
 *   !proto.model.Empty,
 *   !proto.model.HealthCheckResponse>}
 */
const methodDescriptor_HealthCheckService_HealthCheck = new grpc.web.MethodDescriptor(
  '/service.HealthCheckService/HealthCheck',
  grpc.web.MethodType.UNARY,
  model_empty_pb.Empty,
  model_healthCheck_pb.HealthCheckResponse,
  /** @param {!proto.model.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  model_healthCheck_pb.HealthCheckResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.Empty,
 *   !proto.model.HealthCheckResponse>}
 */
const methodInfo_HealthCheckService_HealthCheck = new grpc.web.AbstractClientBase.MethodInfo(
  model_healthCheck_pb.HealthCheckResponse,
  /** @param {!proto.model.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  model_healthCheck_pb.HealthCheckResponse.deserializeBinary
);


/**
 * @param {!proto.model.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.HealthCheckResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.HealthCheckResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.HealthCheckServiceClient.prototype.healthCheck =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.HealthCheckService/HealthCheck',
      request,
      metadata || {},
      methodDescriptor_HealthCheckService_HealthCheck,
      callback);
};


/**
 * @param {!proto.model.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.HealthCheckResponse>}
 *     A native promise that resolves to the response
 */
proto.service.HealthCheckServicePromiseClient.prototype.healthCheck =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.HealthCheckService/HealthCheck',
      request,
      metadata || {},
      methodDescriptor_HealthCheckService_HealthCheck);
};


module.exports = proto.service;

