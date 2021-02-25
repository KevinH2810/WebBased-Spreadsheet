/**
 * @fileoverview gRPC-Web generated client stub for service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var model_participationScore_pb = require('../model/participationScore_pb.js')

var google_api_annotations_pb = require('../google/api/annotations_pb.js')
const proto = {};
proto.service = require('./participationScore_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.service.ParticipationScoreServiceClient =
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
proto.service.ParticipationScoreServicePromiseClient =
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
 *   !proto.model.GetParticipationScoresRequest,
 *   !proto.model.GetParticipationScoresResponse>}
 */
const methodDescriptor_ParticipationScoreService_GetParticipationScores = new grpc.web.MethodDescriptor(
  '/service.ParticipationScoreService/GetParticipationScores',
  grpc.web.MethodType.UNARY,
  model_participationScore_pb.GetParticipationScoresRequest,
  model_participationScore_pb.GetParticipationScoresResponse,
  /** @param {!proto.model.GetParticipationScoresRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_participationScore_pb.GetParticipationScoresResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.GetParticipationScoresRequest,
 *   !proto.model.GetParticipationScoresResponse>}
 */
const methodInfo_ParticipationScoreService_GetParticipationScores = new grpc.web.AbstractClientBase.MethodInfo(
  model_participationScore_pb.GetParticipationScoresResponse,
  /** @param {!proto.model.GetParticipationScoresRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_participationScore_pb.GetParticipationScoresResponse.deserializeBinary
);


/**
 * @param {!proto.model.GetParticipationScoresRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.GetParticipationScoresResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.GetParticipationScoresResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.ParticipationScoreServiceClient.prototype.getParticipationScores =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.ParticipationScoreService/GetParticipationScores',
      request,
      metadata || {},
      methodDescriptor_ParticipationScoreService_GetParticipationScores,
      callback);
};


/**
 * @param {!proto.model.GetParticipationScoresRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.GetParticipationScoresResponse>}
 *     A native promise that resolves to the response
 */
proto.service.ParticipationScoreServicePromiseClient.prototype.getParticipationScores =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.ParticipationScoreService/GetParticipationScores',
      request,
      metadata || {},
      methodDescriptor_ParticipationScoreService_GetParticipationScores);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.GetLatestParticipationScoreByNodeIDRequest,
 *   !proto.model.ParticipationScore>}
 */
const methodDescriptor_ParticipationScoreService_GetLatestParticipationScoreByNodeID = new grpc.web.MethodDescriptor(
  '/service.ParticipationScoreService/GetLatestParticipationScoreByNodeID',
  grpc.web.MethodType.UNARY,
  model_participationScore_pb.GetLatestParticipationScoreByNodeIDRequest,
  model_participationScore_pb.ParticipationScore,
  /** @param {!proto.model.GetLatestParticipationScoreByNodeIDRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_participationScore_pb.ParticipationScore.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.GetLatestParticipationScoreByNodeIDRequest,
 *   !proto.model.ParticipationScore>}
 */
const methodInfo_ParticipationScoreService_GetLatestParticipationScoreByNodeID = new grpc.web.AbstractClientBase.MethodInfo(
  model_participationScore_pb.ParticipationScore,
  /** @param {!proto.model.GetLatestParticipationScoreByNodeIDRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_participationScore_pb.ParticipationScore.deserializeBinary
);


/**
 * @param {!proto.model.GetLatestParticipationScoreByNodeIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.ParticipationScore)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.ParticipationScore>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.ParticipationScoreServiceClient.prototype.getLatestParticipationScoreByNodeID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.ParticipationScoreService/GetLatestParticipationScoreByNodeID',
      request,
      metadata || {},
      methodDescriptor_ParticipationScoreService_GetLatestParticipationScoreByNodeID,
      callback);
};


/**
 * @param {!proto.model.GetLatestParticipationScoreByNodeIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.ParticipationScore>}
 *     A native promise that resolves to the response
 */
proto.service.ParticipationScoreServicePromiseClient.prototype.getLatestParticipationScoreByNodeID =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.ParticipationScoreService/GetLatestParticipationScoreByNodeID',
      request,
      metadata || {},
      methodDescriptor_ParticipationScoreService_GetLatestParticipationScoreByNodeID);
};


module.exports = proto.service;

