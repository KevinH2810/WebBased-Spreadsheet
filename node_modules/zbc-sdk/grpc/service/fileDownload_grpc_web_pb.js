/**
 * @fileoverview gRPC-Web generated client stub for service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var model_fileDownload_pb = require('../model/fileDownload_pb.js')

var google_api_annotations_pb = require('../google/api/annotations_pb.js')
const proto = {};
proto.service = require('./fileDownload_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.service.FileDownloadServiceClient =
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
proto.service.FileDownloadServicePromiseClient =
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
 *   !proto.model.FileDownloadRequest,
 *   !proto.model.FileDownloadResponse>}
 */
const methodDescriptor_FileDownloadService_FileDownload = new grpc.web.MethodDescriptor(
  '/service.FileDownloadService/FileDownload',
  grpc.web.MethodType.UNARY,
  model_fileDownload_pb.FileDownloadRequest,
  model_fileDownload_pb.FileDownloadResponse,
  /** @param {!proto.model.FileDownloadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_fileDownload_pb.FileDownloadResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.FileDownloadRequest,
 *   !proto.model.FileDownloadResponse>}
 */
const methodInfo_FileDownloadService_FileDownload = new grpc.web.AbstractClientBase.MethodInfo(
  model_fileDownload_pb.FileDownloadResponse,
  /** @param {!proto.model.FileDownloadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_fileDownload_pb.FileDownloadResponse.deserializeBinary
);


/**
 * @param {!proto.model.FileDownloadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.FileDownloadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.FileDownloadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.FileDownloadServiceClient.prototype.fileDownload =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.FileDownloadService/FileDownload',
      request,
      metadata || {},
      methodDescriptor_FileDownloadService_FileDownload,
      callback);
};


/**
 * @param {!proto.model.FileDownloadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.FileDownloadResponse>}
 *     A native promise that resolves to the response
 */
proto.service.FileDownloadServicePromiseClient.prototype.fileDownload =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.FileDownloadService/FileDownload',
      request,
      metadata || {},
      methodDescriptor_FileDownloadService_FileDownload);
};


module.exports = proto.service;

