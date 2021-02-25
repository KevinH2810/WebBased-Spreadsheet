// package: service
// file: service/escrow.proto

var service_escrow_pb = require("../service/escrow_pb");
var model_escrow_pb = require("../model/escrow_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var EscrowTransactionService = (function () {
  function EscrowTransactionService() {}
  EscrowTransactionService.serviceName = "service.EscrowTransactionService";
  return EscrowTransactionService;
}());

EscrowTransactionService.GetEscrowTransactions = {
  methodName: "GetEscrowTransactions",
  service: EscrowTransactionService,
  requestStream: false,
  responseStream: false,
  requestType: model_escrow_pb.GetEscrowTransactionsRequest,
  responseType: model_escrow_pb.GetEscrowTransactionsResponse
};

EscrowTransactionService.GetEscrowTransaction = {
  methodName: "GetEscrowTransaction",
  service: EscrowTransactionService,
  requestStream: false,
  responseStream: false,
  requestType: model_escrow_pb.GetEscrowTransactionRequest,
  responseType: model_escrow_pb.Escrow
};

exports.EscrowTransactionService = EscrowTransactionService;

function EscrowTransactionServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

EscrowTransactionServiceClient.prototype.getEscrowTransactions = function getEscrowTransactions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EscrowTransactionService.GetEscrowTransactions, {
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

EscrowTransactionServiceClient.prototype.getEscrowTransaction = function getEscrowTransaction(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EscrowTransactionService.GetEscrowTransaction, {
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

exports.EscrowTransactionServiceClient = EscrowTransactionServiceClient;

