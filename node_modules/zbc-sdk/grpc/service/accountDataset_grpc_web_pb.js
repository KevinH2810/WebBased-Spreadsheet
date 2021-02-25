/**
 * @fileoverview gRPC-Web generated client stub for service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var model_accountDataset_pb = require('../model/accountDataset_pb.js')

var google_api_annotations_pb = require('../google/api/annotations_pb.js')
const proto = {};
proto.service = require('./accountDataset_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.service.AccountDatasetServiceClient =
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
proto.service.AccountDatasetServicePromiseClient =
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
 *   !proto.model.GetAccountDatasetsRequest,
 *   !proto.model.GetAccountDatasetsResponse>}
 */
const methodDescriptor_AccountDatasetService_GetAccountDatasets = new grpc.web.MethodDescriptor(
  '/service.AccountDatasetService/GetAccountDatasets',
  grpc.web.MethodType.UNARY,
  model_accountDataset_pb.GetAccountDatasetsRequest,
  model_accountDataset_pb.GetAccountDatasetsResponse,
  /** @param {!proto.model.GetAccountDatasetsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_accountDataset_pb.GetAccountDatasetsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.GetAccountDatasetsRequest,
 *   !proto.model.GetAccountDatasetsResponse>}
 */
const methodInfo_AccountDatasetService_GetAccountDatasets = new grpc.web.AbstractClientBase.MethodInfo(
  model_accountDataset_pb.GetAccountDatasetsResponse,
  /** @param {!proto.model.GetAccountDatasetsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_accountDataset_pb.GetAccountDatasetsResponse.deserializeBinary
);


/**
 * @param {!proto.model.GetAccountDatasetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.GetAccountDatasetsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.GetAccountDatasetsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.AccountDatasetServiceClient.prototype.getAccountDatasets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.AccountDatasetService/GetAccountDatasets',
      request,
      metadata || {},
      methodDescriptor_AccountDatasetService_GetAccountDatasets,
      callback);
};


/**
 * @param {!proto.model.GetAccountDatasetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.GetAccountDatasetsResponse>}
 *     A native promise that resolves to the response
 */
proto.service.AccountDatasetServicePromiseClient.prototype.getAccountDatasets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.AccountDatasetService/GetAccountDatasets',
      request,
      metadata || {},
      methodDescriptor_AccountDatasetService_GetAccountDatasets);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.model.GetAccountDatasetRequest,
 *   !proto.model.AccountDataset>}
 */
const methodDescriptor_AccountDatasetService_GetAccountDataset = new grpc.web.MethodDescriptor(
  '/service.AccountDatasetService/GetAccountDataset',
  grpc.web.MethodType.UNARY,
  model_accountDataset_pb.GetAccountDatasetRequest,
  model_accountDataset_pb.AccountDataset,
  /** @param {!proto.model.GetAccountDatasetRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_accountDataset_pb.AccountDataset.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.GetAccountDatasetRequest,
 *   !proto.model.AccountDataset>}
 */
const methodInfo_AccountDatasetService_GetAccountDataset = new grpc.web.AbstractClientBase.MethodInfo(
  model_accountDataset_pb.AccountDataset,
  /** @param {!proto.model.GetAccountDatasetRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_accountDataset_pb.AccountDataset.deserializeBinary
);


/**
 * @param {!proto.model.GetAccountDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.AccountDataset)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.AccountDataset>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.AccountDatasetServiceClient.prototype.getAccountDataset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.AccountDatasetService/GetAccountDataset',
      request,
      metadata || {},
      methodDescriptor_AccountDatasetService_GetAccountDataset,
      callback);
};


/**
 * @param {!proto.model.GetAccountDatasetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.AccountDataset>}
 *     A native promise that resolves to the response
 */
proto.service.AccountDatasetServicePromiseClient.prototype.getAccountDataset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.AccountDatasetService/GetAccountDataset',
      request,
      metadata || {},
      methodDescriptor_AccountDatasetService_GetAccountDataset);
};


module.exports = proto.service;

