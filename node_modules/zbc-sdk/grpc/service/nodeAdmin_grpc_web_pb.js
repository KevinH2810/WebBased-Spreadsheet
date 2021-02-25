/**
 * @fileoverview gRPC-Web generated client stub for service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var model_proofOfOwnership_pb = require('../model/proofOfOwnership_pb.js')

var model_node_pb = require('../model/node_pb.js')

var google_api_annotations_pb = require('../google/api/annotations_pb.js')
const proto = {};
proto.service = require('./nodeAdmin_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.service.NodeAdminServiceClient =
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
proto.service.NodeAdminServicePromiseClient =
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
 *   !proto.model.GetProofOfOwnershipRequest,
 *   !proto.model.ProofOfOwnership>}
 */
const methodDescriptor_NodeAdminService_GetProofOfOwnership = new grpc.web.MethodDescriptor(
  '/service.NodeAdminService/GetProofOfOwnership',
  grpc.web.MethodType.UNARY,
  model_proofOfOwnership_pb.GetProofOfOwnershipRequest,
  model_proofOfOwnership_pb.ProofOfOwnership,
  /** @param {!proto.model.GetProofOfOwnershipRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_proofOfOwnership_pb.ProofOfOwnership.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.GetProofOfOwnershipRequest,
 *   !proto.model.ProofOfOwnership>}
 */
const methodInfo_NodeAdminService_GetProofOfOwnership = new grpc.web.AbstractClientBase.MethodInfo(
  model_proofOfOwnership_pb.ProofOfOwnership,
  /** @param {!proto.model.GetProofOfOwnershipRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_proofOfOwnership_pb.ProofOfOwnership.deserializeBinary
);


/**
 * @param {!proto.model.GetProofOfOwnershipRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.ProofOfOwnership)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.ProofOfOwnership>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.NodeAdminServiceClient.prototype.getProofOfOwnership =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.NodeAdminService/GetProofOfOwnership',
      request,
      metadata || {},
      methodDescriptor_NodeAdminService_GetProofOfOwnership,
      callback);
};


/**
 * @param {!proto.model.GetProofOfOwnershipRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.ProofOfOwnership>}
 *     A native promise that resolves to the response
 */
proto.service.NodeAdminServicePromiseClient.prototype.getProofOfOwnership =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.NodeAdminService/GetProofOfOwnership',
      request,
      metadata || {},
      methodDescriptor_NodeAdminService_GetProofOfOwnership);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.GenerateNodeKeyRequest,
 *   !proto.model.GenerateNodeKeyResponse>}
 */
const methodDescriptor_NodeAdminService_GenerateNodeKey = new grpc.web.MethodDescriptor(
  '/service.NodeAdminService/GenerateNodeKey',
  grpc.web.MethodType.UNARY,
  model_node_pb.GenerateNodeKeyRequest,
  model_node_pb.GenerateNodeKeyResponse,
  /** @param {!proto.model.GenerateNodeKeyRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_node_pb.GenerateNodeKeyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.GenerateNodeKeyRequest,
 *   !proto.model.GenerateNodeKeyResponse>}
 */
const methodInfo_NodeAdminService_GenerateNodeKey = new grpc.web.AbstractClientBase.MethodInfo(
  model_node_pb.GenerateNodeKeyResponse,
  /** @param {!proto.model.GenerateNodeKeyRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_node_pb.GenerateNodeKeyResponse.deserializeBinary
);


/**
 * @param {!proto.model.GenerateNodeKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.GenerateNodeKeyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.GenerateNodeKeyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.NodeAdminServiceClient.prototype.generateNodeKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.NodeAdminService/GenerateNodeKey',
      request,
      metadata || {},
      methodDescriptor_NodeAdminService_GenerateNodeKey,
      callback);
};


/**
 * @param {!proto.model.GenerateNodeKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.GenerateNodeKeyResponse>}
 *     A native promise that resolves to the response
 */
proto.service.NodeAdminServicePromiseClient.prototype.generateNodeKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.NodeAdminService/GenerateNodeKey',
      request,
      metadata || {},
      methodDescriptor_NodeAdminService_GenerateNodeKey);
};


module.exports = proto.service;

