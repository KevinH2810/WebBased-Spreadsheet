/**
 * @fileoverview gRPC-Web generated client stub for service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var model_empty_pb = require('../model/empty_pb.js')

var model_nodeRegistration_pb = require('../model/nodeRegistration_pb.js')

var google_api_annotations_pb = require('../google/api/annotations_pb.js')
const proto = {};
proto.service = require('./nodeRegistration_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.service.NodeRegistrationServiceClient =
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
proto.service.NodeRegistrationServicePromiseClient =
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
 *   !proto.model.GetNodeRegistrationsRequest,
 *   !proto.model.GetNodeRegistrationsResponse>}
 */
const methodDescriptor_NodeRegistrationService_GetNodeRegistrations = new grpc.web.MethodDescriptor(
  '/service.NodeRegistrationService/GetNodeRegistrations',
  grpc.web.MethodType.UNARY,
  model_nodeRegistration_pb.GetNodeRegistrationsRequest,
  model_nodeRegistration_pb.GetNodeRegistrationsResponse,
  /** @param {!proto.model.GetNodeRegistrationsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_nodeRegistration_pb.GetNodeRegistrationsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.GetNodeRegistrationsRequest,
 *   !proto.model.GetNodeRegistrationsResponse>}
 */
const methodInfo_NodeRegistrationService_GetNodeRegistrations = new grpc.web.AbstractClientBase.MethodInfo(
  model_nodeRegistration_pb.GetNodeRegistrationsResponse,
  /** @param {!proto.model.GetNodeRegistrationsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_nodeRegistration_pb.GetNodeRegistrationsResponse.deserializeBinary
);


/**
 * @param {!proto.model.GetNodeRegistrationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.GetNodeRegistrationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.GetNodeRegistrationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.NodeRegistrationServiceClient.prototype.getNodeRegistrations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.NodeRegistrationService/GetNodeRegistrations',
      request,
      metadata || {},
      methodDescriptor_NodeRegistrationService_GetNodeRegistrations,
      callback);
};


/**
 * @param {!proto.model.GetNodeRegistrationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.GetNodeRegistrationsResponse>}
 *     A native promise that resolves to the response
 */
proto.service.NodeRegistrationServicePromiseClient.prototype.getNodeRegistrations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.NodeRegistrationService/GetNodeRegistrations',
      request,
      metadata || {},
      methodDescriptor_NodeRegistrationService_GetNodeRegistrations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.GetNodeRegistrationRequest,
 *   !proto.model.GetNodeRegistrationResponse>}
 */
const methodDescriptor_NodeRegistrationService_GetNodeRegistration = new grpc.web.MethodDescriptor(
  '/service.NodeRegistrationService/GetNodeRegistration',
  grpc.web.MethodType.UNARY,
  model_nodeRegistration_pb.GetNodeRegistrationRequest,
  model_nodeRegistration_pb.GetNodeRegistrationResponse,
  /** @param {!proto.model.GetNodeRegistrationRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_nodeRegistration_pb.GetNodeRegistrationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.GetNodeRegistrationRequest,
 *   !proto.model.GetNodeRegistrationResponse>}
 */
const methodInfo_NodeRegistrationService_GetNodeRegistration = new grpc.web.AbstractClientBase.MethodInfo(
  model_nodeRegistration_pb.GetNodeRegistrationResponse,
  /** @param {!proto.model.GetNodeRegistrationRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_nodeRegistration_pb.GetNodeRegistrationResponse.deserializeBinary
);


/**
 * @param {!proto.model.GetNodeRegistrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.GetNodeRegistrationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.GetNodeRegistrationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.NodeRegistrationServiceClient.prototype.getNodeRegistration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.NodeRegistrationService/GetNodeRegistration',
      request,
      metadata || {},
      methodDescriptor_NodeRegistrationService_GetNodeRegistration,
      callback);
};


/**
 * @param {!proto.model.GetNodeRegistrationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.GetNodeRegistrationResponse>}
 *     A native promise that resolves to the response
 */
proto.service.NodeRegistrationServicePromiseClient.prototype.getNodeRegistration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.NodeRegistrationService/GetNodeRegistration',
      request,
      metadata || {},
      methodDescriptor_NodeRegistrationService_GetNodeRegistration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.GetNodeRegistrationsByNodePublicKeysRequest,
 *   !proto.model.GetNodeRegistrationsByNodePublicKeysResponse>}
 */
const methodDescriptor_NodeRegistrationService_GetNodeRegistrationsByNodePublicKeys = new grpc.web.MethodDescriptor(
  '/service.NodeRegistrationService/GetNodeRegistrationsByNodePublicKeys',
  grpc.web.MethodType.UNARY,
  model_nodeRegistration_pb.GetNodeRegistrationsByNodePublicKeysRequest,
  model_nodeRegistration_pb.GetNodeRegistrationsByNodePublicKeysResponse,
  /** @param {!proto.model.GetNodeRegistrationsByNodePublicKeysRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_nodeRegistration_pb.GetNodeRegistrationsByNodePublicKeysResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.GetNodeRegistrationsByNodePublicKeysRequest,
 *   !proto.model.GetNodeRegistrationsByNodePublicKeysResponse>}
 */
const methodInfo_NodeRegistrationService_GetNodeRegistrationsByNodePublicKeys = new grpc.web.AbstractClientBase.MethodInfo(
  model_nodeRegistration_pb.GetNodeRegistrationsByNodePublicKeysResponse,
  /** @param {!proto.model.GetNodeRegistrationsByNodePublicKeysRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_nodeRegistration_pb.GetNodeRegistrationsByNodePublicKeysResponse.deserializeBinary
);


/**
 * @param {!proto.model.GetNodeRegistrationsByNodePublicKeysRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.GetNodeRegistrationsByNodePublicKeysResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.GetNodeRegistrationsByNodePublicKeysResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.NodeRegistrationServiceClient.prototype.getNodeRegistrationsByNodePublicKeys =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.NodeRegistrationService/GetNodeRegistrationsByNodePublicKeys',
      request,
      metadata || {},
      methodDescriptor_NodeRegistrationService_GetNodeRegistrationsByNodePublicKeys,
      callback);
};


/**
 * @param {!proto.model.GetNodeRegistrationsByNodePublicKeysRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.GetNodeRegistrationsByNodePublicKeysResponse>}
 *     A native promise that resolves to the response
 */
proto.service.NodeRegistrationServicePromiseClient.prototype.getNodeRegistrationsByNodePublicKeys =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.NodeRegistrationService/GetNodeRegistrationsByNodePublicKeys',
      request,
      metadata || {},
      methodDescriptor_NodeRegistrationService_GetNodeRegistrationsByNodePublicKeys);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.Empty,
 *   !proto.model.GetMyNodePublicKeyResponse>}
 */
const methodDescriptor_NodeRegistrationService_GetMyNodePublicKey = new grpc.web.MethodDescriptor(
  '/service.NodeRegistrationService/GetMyNodePublicKey',
  grpc.web.MethodType.UNARY,
  model_empty_pb.Empty,
  model_nodeRegistration_pb.GetMyNodePublicKeyResponse,
  /** @param {!proto.model.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  model_nodeRegistration_pb.GetMyNodePublicKeyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.Empty,
 *   !proto.model.GetMyNodePublicKeyResponse>}
 */
const methodInfo_NodeRegistrationService_GetMyNodePublicKey = new grpc.web.AbstractClientBase.MethodInfo(
  model_nodeRegistration_pb.GetMyNodePublicKeyResponse,
  /** @param {!proto.model.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  model_nodeRegistration_pb.GetMyNodePublicKeyResponse.deserializeBinary
);


/**
 * @param {!proto.model.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.GetMyNodePublicKeyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.GetMyNodePublicKeyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.NodeRegistrationServiceClient.prototype.getMyNodePublicKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.NodeRegistrationService/GetMyNodePublicKey',
      request,
      metadata || {},
      methodDescriptor_NodeRegistrationService_GetMyNodePublicKey,
      callback);
};


/**
 * @param {!proto.model.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.GetMyNodePublicKeyResponse>}
 *     A native promise that resolves to the response
 */
proto.service.NodeRegistrationServicePromiseClient.prototype.getMyNodePublicKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.NodeRegistrationService/GetMyNodePublicKey',
      request,
      metadata || {},
      methodDescriptor_NodeRegistrationService_GetMyNodePublicKey);
};


module.exports = proto.service;

