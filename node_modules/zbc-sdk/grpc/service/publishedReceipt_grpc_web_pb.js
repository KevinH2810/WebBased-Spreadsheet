/**
 * @fileoverview gRPC-Web generated client stub for service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var model_publishedReceipt_pb = require('../model/publishedReceipt_pb.js')

var google_api_annotations_pb = require('../google/api/annotations_pb.js')
const proto = {};
proto.service = require('./publishedReceipt_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.service.PublishedReceiptServiceClient =
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
proto.service.PublishedReceiptServicePromiseClient =
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
 *   !proto.model.GetPublishedReceiptsRequest,
 *   !proto.model.GetPublishedReceiptsResponse>}
 */
const methodDescriptor_PublishedReceiptService_GetPublishedReceipts = new grpc.web.MethodDescriptor(
  '/service.PublishedReceiptService/GetPublishedReceipts',
  grpc.web.MethodType.UNARY,
  model_publishedReceipt_pb.GetPublishedReceiptsRequest,
  model_publishedReceipt_pb.GetPublishedReceiptsResponse,
  /** @param {!proto.model.GetPublishedReceiptsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_publishedReceipt_pb.GetPublishedReceiptsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.model.GetPublishedReceiptsRequest,
 *   !proto.model.GetPublishedReceiptsResponse>}
 */
const methodInfo_PublishedReceiptService_GetPublishedReceipts = new grpc.web.AbstractClientBase.MethodInfo(
  model_publishedReceipt_pb.GetPublishedReceiptsResponse,
  /** @param {!proto.model.GetPublishedReceiptsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  model_publishedReceipt_pb.GetPublishedReceiptsResponse.deserializeBinary
);


/**
 * @param {!proto.model.GetPublishedReceiptsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.model.GetPublishedReceiptsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.model.GetPublishedReceiptsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.service.PublishedReceiptServiceClient.prototype.getPublishedReceipts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/service.PublishedReceiptService/GetPublishedReceipts',
      request,
      metadata || {},
      methodDescriptor_PublishedReceiptService_GetPublishedReceipts,
      callback);
};


/**
 * @param {!proto.model.GetPublishedReceiptsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.model.GetPublishedReceiptsResponse>}
 *     A native promise that resolves to the response
 */
proto.service.PublishedReceiptServicePromiseClient.prototype.getPublishedReceipts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/service.PublishedReceiptService/GetPublishedReceipts',
      request,
      metadata || {},
      methodDescriptor_PublishedReceiptService_GetPublishedReceipts);
};


module.exports = proto.service;

