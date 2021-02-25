/**
 * @fileoverview gRPC-Web generated client stub for service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var model_skippedBlocksmith_pb = require('../model/skippedBlocksmith_pb.js')

var google_api_annotations_pb = require('../google/api/annotations_pb.js')
const proto = {};
proto.service = require('./skippedBlocksmith_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.service.SkippedBlockSmithsServiceClient =
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
proto.service.SkippedBlockSmithsServicePromiseClient =
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
 *   !proto.model.GetSkippedBlocksmithsRequest,
 *   !proto.model.GetSkippedBlocksmithsResponse>}
 */
const methodDescriptor_SkippedBlockSmithsService_GetSkippedBlockSmiths = new grpc.web.MethodDescriptor(
  '/service.SkippedBlockSmithsService/GetSkippedBlockSmiths',
  grpc.web.MethodType.UNARY,
  model_skippedBlocksmith_pb.GetSkippedBlocksmithsRequest,
  model_skippedBlocksmith_pb.GetSkippedBlocksmithsResponse,
  /** @param {!proto.model.GetSkippedBlocksmithsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_skippedBlocksmith_pb.GetSkippedBlocksmithsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.GetSkippedBlocksmithsRequest,
 *   !proto.model.GetSkippedBlocksmithsResponse>}
 */
const methodInfo_SkippedBlockSmithsService_GetSkippedBlockSmiths = new grpc.web.AbstractClientBase.MethodInfo(
  model_skippedBlocksmith_pb.GetSkippedBlocksmithsResponse,
  /** @param {!proto.model.GetSkippedBlocksmithsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_skippedBlocksmith_pb.GetSkippedBlocksmithsResponse.deserializeBinary
);


/**
 * @param {!proto.model.GetSkippedBlocksmithsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.GetSkippedBlocksmithsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.GetSkippedBlocksmithsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.SkippedBlockSmithsServiceClient.prototype.getSkippedBlockSmiths =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.SkippedBlockSmithsService/GetSkippedBlockSmiths',
      request,
      metadata || {},
      methodDescriptor_SkippedBlockSmithsService_GetSkippedBlockSmiths,
      callback);
};


/**
 * @param {!proto.model.GetSkippedBlocksmithsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.GetSkippedBlocksmithsResponse>}
 *     A native promise that resolves to the response
 */
proto.service.SkippedBlockSmithsServicePromiseClient.prototype.getSkippedBlockSmiths =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.SkippedBlockSmithsService/GetSkippedBlockSmiths',
      request,
      metadata || {},
      methodDescriptor_SkippedBlockSmithsService_GetSkippedBlockSmiths);
};


module.exports = proto.service;

