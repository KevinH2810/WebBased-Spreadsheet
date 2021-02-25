/**
 * @fileoverview gRPC-Web generated client stub for service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var model_block_pb = require('../model/block_pb.js')

var google_api_annotations_pb = require('../google/api/annotations_pb.js')
const proto = {};
proto.service = require('./block_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.service.BlockServiceClient =
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
proto.service.BlockServicePromiseClient =
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
 *   !proto.model.GetBlocksRequest,
 *   !proto.model.GetBlocksResponse>}
 */
const methodDescriptor_BlockService_GetBlocks = new grpc.web.MethodDescriptor(
  '/service.BlockService/GetBlocks',
  grpc.web.MethodType.UNARY,
  model_block_pb.GetBlocksRequest,
  model_block_pb.GetBlocksResponse,
  /** @param {!proto.model.GetBlocksRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_block_pb.GetBlocksResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.GetBlocksRequest,
 *   !proto.model.GetBlocksResponse>}
 */
const methodInfo_BlockService_GetBlocks = new grpc.web.AbstractClientBase.MethodInfo(
  model_block_pb.GetBlocksResponse,
  /** @param {!proto.model.GetBlocksRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_block_pb.GetBlocksResponse.deserializeBinary
);


/**
 * @param {!proto.model.GetBlocksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.GetBlocksResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.GetBlocksResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.BlockServiceClient.prototype.getBlocks =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.BlockService/GetBlocks',
      request,
      metadata || {},
      methodDescriptor_BlockService_GetBlocks,
      callback);
};


/**
 * @param {!proto.model.GetBlocksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.GetBlocksResponse>}
 *     A native promise that resolves to the response
 */
proto.service.BlockServicePromiseClient.prototype.getBlocks =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.BlockService/GetBlocks',
      request,
      metadata || {},
      methodDescriptor_BlockService_GetBlocks);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.GetBlockRequest,
 *   !proto.model.GetBlockResponse>}
 */
const methodDescriptor_BlockService_GetBlock = new grpc.web.MethodDescriptor(
  '/service.BlockService/GetBlock',
  grpc.web.MethodType.UNARY,
  model_block_pb.GetBlockRequest,
  model_block_pb.GetBlockResponse,
  /** @param {!proto.model.GetBlockRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_block_pb.GetBlockResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.GetBlockRequest,
 *   !proto.model.GetBlockResponse>}
 */
const methodInfo_BlockService_GetBlock = new grpc.web.AbstractClientBase.MethodInfo(
  model_block_pb.GetBlockResponse,
  /** @param {!proto.model.GetBlockRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_block_pb.GetBlockResponse.deserializeBinary
);


/**
 * @param {!proto.model.GetBlockRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.GetBlockResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.GetBlockResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.BlockServiceClient.prototype.getBlock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.BlockService/GetBlock',
      request,
      metadata || {},
      methodDescriptor_BlockService_GetBlock,
      callback);
};


/**
 * @param {!proto.model.GetBlockRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.GetBlockResponse>}
 *     A native promise that resolves to the response
 */
proto.service.BlockServicePromiseClient.prototype.getBlock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.BlockService/GetBlock',
      request,
      metadata || {},
      methodDescriptor_BlockService_GetBlock);
};


module.exports = proto.service;

