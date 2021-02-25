// package: service
// file: service/liquidPayment.proto

var service_liquidPayment_pb = require("../service/liquidPayment_pb");
var model_liquidPayment_pb = require("../model/liquidPayment_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var LiquidPaymentService = (function () {
  function LiquidPaymentService() {}
  LiquidPaymentService.serviceName = "service.LiquidPaymentService";
  return LiquidPaymentService;
}());

LiquidPaymentService.GetLiquidTransactions = {
  methodName: "GetLiquidTransactions",
  service: LiquidPaymentService,
  requestStream: false,
  responseStream: false,
  requestType: model_liquidPayment_pb.GetLiquidTransactionsRequest,
  responseType: model_liquidPayment_pb.GetLiquidTransactionsResponse
};

exports.LiquidPaymentService = LiquidPaymentService;

function LiquidPaymentServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

LiquidPaymentServiceClient.prototype.getLiquidTransactions = function getLiquidTransactions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(LiquidPaymentService.GetLiquidTransactions, {
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

exports.LiquidPaymentServiceClient = LiquidPaymentServiceClient;

