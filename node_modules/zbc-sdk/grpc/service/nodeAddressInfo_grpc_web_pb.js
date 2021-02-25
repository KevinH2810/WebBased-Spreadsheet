/**
 * @fileoverview gRPC-Web generated client stub for service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var model_nodeAddressInfo_pb = require('../model/nodeAddressInfo_pb.js')

var google_api_annotations_pb = require('../google/api/annotations_pb.js')
const proto = {};
proto.service = require('./nodeAddressInfo_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.service.NodeAddressInfoServiceClient =
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
proto.service.NodeAddressInfoServicePromiseClient =
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
const methodDescriptor_NodeAddressInfoService_GetNodeAddressInfo = new grpc.web.MethodDescriptor(
  '/service.NodeAddressInfoService/GetNodeAddressInfo',
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
const methodInfo_NodeAddressInfoService_GetNodeAddressInfo = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.service.NodeAddressInfoServiceClient.prototype.getNodeAddressInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.NodeAddressInfoService/GetNodeAddressInfo',
      request,
      metadata || {},
      methodDescriptor_NodeAddressInfoService_GetNodeAddressInfo,
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
proto.service.NodeAddressInfoServicePromiseClient.prototype.getNodeAddressInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.NodeAddressInfoService/GetNodeAddressInfo',
      request,
      metadata || {},
      methodDescriptor_NodeAddressInfoService_GetNodeAddressInfo);
};


module.exports = proto.service;

