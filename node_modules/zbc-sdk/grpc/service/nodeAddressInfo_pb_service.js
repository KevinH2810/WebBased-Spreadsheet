// package: service
// file: service/nodeAddressInfo.proto

var service_nodeAddressInfo_pb = require("../service/nodeAddressInfo_pb");
var model_nodeAddressInfo_pb = require("../model/nodeAddressInfo_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var NodeAddressInfoService = (function () {
  function NodeAddressInfoService() {}
  NodeAddressInfoService.serviceName = "service.NodeAddressInfoService";
  return NodeAddressInfoService;
}());

NodeAddressInfoService.GetNodeAddressInfo = {
  methodName: "GetNodeAddressInfo",
  service: NodeAddressInfoService,
  requestStream: false,
  responseStream: false,
  requestType: model_nodeAddressInfo_pb.GetNodeAddressesInfoRequest,
  responseType: model_nodeAddressInfo_pb.GetNodeAddressesInfoResponse
};

exports.NodeAddressInfoService = NodeAddressInfoService;

function NodeAddressInfoServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

NodeAddressInfoServiceClient.prototype.getNodeAddressInfo = function getNodeAddressInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NodeAddressInfoService.GetNodeAddressInfo, {
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

exports.NodeAddressInfoServiceClient = NodeAddressInfoServiceClient;

