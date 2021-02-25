// package: service
// file: service/healthCheck.proto

var service_healthCheck_pb = require("../service/healthCheck_pb");
var model_empty_pb = require("../model/empty_pb");
var model_healthCheck_pb = require("../model/healthCheck_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var HealthCheckService = (function () {
  function HealthCheckService() {}
  HealthCheckService.serviceName = "service.HealthCheckService";
  return HealthCheckService;
}());

HealthCheckService.HealthCheck = {
  methodName: "HealthCheck",
  service: HealthCheckService,
  requestStream: false,
  responseStream: false,
  requestType: model_empty_pb.Empty,
  responseType: model_healthCheck_pb.HealthCheckResponse
};

exports.HealthCheckService = HealthCheckService;

function HealthCheckServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

HealthCheckServiceClient.prototype.healthCheck = function healthCheck(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(HealthCheckService.HealthCheck, {
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

exports.HealthCheckServiceClient = HealthCheckServiceClient;

