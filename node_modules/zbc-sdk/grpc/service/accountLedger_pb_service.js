// package: service
// file: service/accountLedger.proto

var service_accountLedger_pb = require("../service/accountLedger_pb");
var model_accountLedger_pb = require("../model/accountLedger_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AccountLedgerService = (function () {
  function AccountLedgerService() {}
  AccountLedgerService.serviceName = "service.AccountLedgerService";
  return AccountLedgerService;
}());

AccountLedgerService.GetAccountLedgers = {
  methodName: "GetAccountLedgers",
  service: AccountLedgerService,
  requestStream: false,
  responseStream: false,
  requestType: model_accountLedger_pb.GetAccountLedgersRequest,
  responseType: model_accountLedger_pb.GetAccountLedgersResponse
};

exports.AccountLedgerService = AccountLedgerService;

function AccountLedgerServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AccountLedgerServiceClient.prototype.getAccountLedgers = function getAccountLedgers(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AccountLedgerService.GetAccountLedgers, {
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

exports.AccountLedgerServiceClient = AccountLedgerServiceClient;

