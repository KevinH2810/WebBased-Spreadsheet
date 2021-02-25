// package: service
// file: service/publishedReceipt.proto

var service_publishedReceipt_pb = require("../service/publishedReceipt_pb");
var model_publishedReceipt_pb = require("../model/publishedReceipt_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var PublishedReceiptService = (function () {
  function PublishedReceiptService() {}
  PublishedReceiptService.serviceName = "service.PublishedReceiptService";
  return PublishedReceiptService;
}());

PublishedReceiptService.GetPublishedReceipts = {
  methodName: "GetPublishedReceipts",
  service: PublishedReceiptService,
  requestStream: false,
  responseStream: false,
  requestType: model_publishedReceipt_pb.GetPublishedReceiptsRequest,
  responseType: model_publishedReceipt_pb.GetPublishedReceiptsResponse
};

exports.PublishedReceiptService = PublishedReceiptService;

function PublishedReceiptServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

PublishedReceiptServiceClient.prototype.getPublishedReceipts = function getPublishedReceipts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PublishedReceiptService.GetPublishedReceipts, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.PublishedReceiptServiceClient = PublishedReceiptServiceClient;

