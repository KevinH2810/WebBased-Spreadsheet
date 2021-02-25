// package: service
// file: service/nodeHardware.proto

var service_nodeHardware_pb = require("../service/nodeHardware_pb");
var model_nodeHardware_pb = require("../model/nodeHardware_pb");
var model_empty_pb = require("../model/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var NodeHardwareService = (function () {
  function NodeHardwareService() {}
  NodeHardwareService.serviceName = "service.NodeHardwareService";
  return NodeHardwareService;
}());

NodeHardwareService.GetNodeHardware = {
  methodName: "GetNodeHardware",
  service: NodeHardwareService,
  requestStream: true,
  responseStream: true,
  requestType: model_nodeHardware_pb.GetNodeHardwareRequest,
  responseType: model_nodeHardware_pb.GetNodeHardwareResponse
};

NodeHardwareService.GetNodeTime = {
  methodName: "GetNodeTime",
  service: NodeHardwareService,
  requestStream: false,
  responseStream: false,
  requestType: model_empty_pb.Empty,
  responseType: model_nodeHardware_pb.GetNodeTimeResponse
};

exports.NodeHardwareService = NodeHardwareService;

function NodeHardwareServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

NodeHardwareServiceClient.prototype.getNodeHardware = function getNodeHardware(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(NodeHardwareService.GetNodeHardware, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

NodeHardwareServiceClient.prototype.getNodeTime = function getNodeTime(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NodeHardwareService.GetNodeTime, {
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

exports.NodeHardwareServiceClient = NodeHardwareServiceClient;

