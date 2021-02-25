// package: service
// file: service/skippedBlocksmith.proto

var service_skippedBlocksmith_pb = require("../service/skippedBlocksmith_pb");
var model_skippedBlocksmith_pb = require("../model/skippedBlocksmith_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var SkippedBlockSmithsService = (function () {
  function SkippedBlockSmithsService() {}
  SkippedBlockSmithsService.serviceName = "service.SkippedBlockSmithsService";
  return SkippedBlockSmithsService;
}());

SkippedBlockSmithsService.GetSkippedBlockSmiths = {
  methodName: "GetSkippedBlockSmiths",
  service: SkippedBlockSmithsService,
  requestStream: false,
  responseStream: false,
  requestType: model_skippedBlocksmith_pb.GetSkippedBlocksmithsRequest,
  responseType: model_skippedBlocksmith_pb.GetSkippedBlocksmithsResponse
};

exports.SkippedBlockSmithsService = SkippedBlockSmithsService;

function SkippedBlockSmithsServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

SkippedBlockSmithsServiceClient.prototype.getSkippedBlockSmiths = function getSkippedBlockSmiths(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SkippedBlockSmithsService.GetSkippedBlockSmiths, {
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

exports.SkippedBlockSmithsServiceClient = SkippedBlockSmithsServiceClient;

